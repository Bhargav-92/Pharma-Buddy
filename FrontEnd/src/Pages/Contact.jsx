import React, { useEffect, useState } from 'react';
import Footer from '../Component/Footer/Footer';
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import ContactLanding from '../Component/landingPage/ContactLanding'
import Gradient from '../Component/Gradient/Gradient';
import { Navigate, useNavigate } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';




export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000)
  }, [msg])



  const handleChange = (e, type) => {

    switch (type) {
      case "name":
        setError("");
        setName(e.target.value);
        if (e.target.value === "") {
          setError("Username has left Blank!");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left Blank!");
        }
        break;
      case "phone":
        setError("");
        setPhone(e.target.value);
        if (e.target.value === "") {
          setError("Phone Number has left Blank!");
        }
        break;
      case "message":
        setError("");
        setMessage(e.target.value);
        if (e.target.value === "") {
          setError("Message has left Blank!");
        }
        break;


      default:
        break;
    }

  };
  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "" && email !== "" && phone !== "" && message !== "") {
      var url = "http://localhost/pharma-buddy-backend/contact.php";
      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };
      var Data = {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data)
      }).then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
        }).catch((err) => {
          setError(err);
          console.log(err);
        });
      navigate("/contact");
      //notification
      Store.addNotification({
        title: "Wonderful!",
        message: "Message Sent successfully",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });

      localStorage.setItem("name", name)
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
    else {
      Store.addNotification({
        title: "Ooops !",
        message: "All fields are required !! ",
        type: "danger",
        insert: "bottom",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        },
        style:{
          margin:'20rem'
        }
      });
    
    }

  }

  function checkEmail() {
    var url = "http://localhost/pharma-buddy-backend/checkEmail.php";
    var headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    var Data = {
      email: email,
    }
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data)
    }).then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      }).catch((err) => {
        setError(err);
        console.log(err);
      });
  }



  return (
    <>
      <div className="app-container">
        <ReactNotifications />
      </div>
      <ContactLanding />
      <Grid container md={12} spacing={30} sx={{ alignItems: 'center', justifyContent: 'center' }} pl={20}>
        <Grid item md={6} marginTop={'10rem'}>
          <Typography variant='h4'>Contact Form</Typography>
          <form onSubmit={handleSubmit}>
            <Stack container spacing={2} mt={3}>
              <TextField
                type='text'
                id='Outlined-basic'
                label='Name'
                value={name}
                onChange={(e) => handleChange(e, "name")}
                fullWidth />
              <TextField
                type='text'
                id='Outlined-basic'
                label='Phone Number'
                fullWidth
                value={phone}
                onChange={(e) => handleChange(e, "phone")}
              />
              <TextField
                type='email'
                id='Outlined-basic'
                label='Email Address'
                fullWidth
                value={email}
                onChange={(e) => handleChange(e, "email")}
                onBlur={checkEmail}
              />
              <TextField
                type='text'
                id='outlined-multiline-static'
                label='Message'
                multiline
                fullWidth
                rows={4}
                sx={{ marginTop: '20px' }}
                value={message}
                onChange={(e) => handleChange(e, "message")}
              />
              <input
                type='submit'
                style={{
                  background: '#EC5C42',
                  color: '#fff',
                  border: '1px solid #EC5C42',
                  fontSize: '1.4rem',
                  borderRadius: '.4rem',
                  padding: '.3rem 0rem',
                  cursor: 'pointer',
                  letterSpacing: '.2px'

                }}
                defaultValue="Send Message"
                onClick={handleSubmit}
              />


            </Stack>
          </form>
        </Grid>
        <Grid item md={5}>
          <Stack direction={'column'} spacing={4}>
            <Typography variant='h4'>Contact Info</Typography>
            <Typography>
              <span><LocationOnIcon /></span> 103 Decora Square, Rajkot
            </Typography>
            <Typography>
              <span><CallIcon /></span> 9265986784
            </Typography>
            <Typography>
              <span><EditIcon /></span> Pharma-buddy@gmail.com
            </Typography>
            <Typography>
              <span><AccessTimeIcon /></span> Mon - Sun 8:00 AM - 12:00 PM
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box mt={25}>
        <Gradient />
        <Footer />
      </Box>

    </>
  );
}
