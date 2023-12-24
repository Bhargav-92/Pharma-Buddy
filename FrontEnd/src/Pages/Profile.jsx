import { Box, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Gradient from '../Component/Gradient/Gradient';
import { ReactNotifications, Store } from 'react-notifications-component';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const font = {
  textDecoration: 'none',
  color: '#444',
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  paddingTop: '1rem',

};

const ButtonStyle = {
  fontSize: '20px',
  color: '#fff',
  padding: '.5rem',
  borderRadius: '.3rem',
  border: 'none',
  background: '#000',
  margin: '2rem 0rem'
};

export default function Profile() {
  const history = useNavigate();
  const [showAccountForm, setShowAccountForm] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);

  const Username = localStorage.getItem("name");
  const Email = localStorage.getItem("user");
  const pass = localStorage.getItem("pass");
  const phone = localStorage.getItem("phone");
  const [name, setName] = useState(Username);
  const [email, setEmail] = useState(Email);
  const [password, setPassword] = useState(pass);
  const [conPassword, setConPassword] = useState();
  const [phonenum, setPhonenum] = useState(phone);
  const [image, setImage] = useState();
  const [pincode, setPincode] = useState();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000)
  }, [msg])

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const handleLogout = () => {
    clearLocalStorage();
    history('/signin');
  };

  const handleAccountClick = () => {
    setShowAccountForm(true);
    setShowAddressForm(false);
  };

  const handleAddressClick = () => {
    setShowAccountForm(false);
    setShowAddressForm(true);
  };


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
      case "phonenum":
        setError("");
        setPhonenum(e.target.value);
        if (e.target.value === "") {
          setError("Phone Number has left Blank!");
        }
        break;
      case "pincode":
        setError("");
        setPincode(e.target.value);
        if (e.target.value === "") {
          setError("pincode  has left Blank!");
        }
        break;
      case "conPassword":
        setError("");
        setConPassword(e.target.value);
        if (e.target.value === "") {
          setError("password  has left Blank!");
        }
        break;
      case "image":
        setError("");
        const selectedFile = e.target.files[0];

        if (selectedFile) {
          const reader = new FileReader();

          reader.onload = (event) => {
            const imageDataURL = event.target.result;
            setImage(imageDataURL);

            // Save the image data URL to localStorage
            localStorage.setItem("userImage", imageDataURL);
          };

          reader.readAsDataURL(selectedFile);
        } else {
          setImage(null);
          // Clear the image data URL from localStorage if no file selected
          localStorage.removeItem("userImage");
        }
        break;


      default:
        break;
    }

  };
  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();

    if (phonenum !== "" && pincode !== "" && conPassword !== "") {
      var url = "http://localhost/pharma-buddy-backend/profile.php";
      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };

      var data = {
        name: name,
        email: email,
        phone: phonenum,
        pincode: pincode,
        image: image,
        pass: conPassword
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);

          if (response[0].result === "User data updated successfully!") {
            setName("");
            setEmail("");
            setPhonenum("");
            setPincode("");
            setConPassword("");
            setImage(null);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });

      localStorage.setItem("name", name);
      localStorage.setItem("user", email);
      localStorage.setItem("pass", conPassword);
      localStorage.setItem("phone", phonenum);

      Store.addNotification({
        title: "Wonderful!",
        message: "Profile Updated successfully",
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
    } else {
      Store.addNotification({
        title: "Ooops!",
        message: "All fields are required!",
        type: "danger",
        insert: "bottom",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        },
        style: {
          margin: '20rem'
        }
      });
    }
  }

  const handleUserDetails = (e) => {
    e.preventDefault();
  }



  return (
    <>
      <div className="app-container">
        <ReactNotifications />
      </div>
      <Box container md={12} mt={7}>
        <Typography variant='h6' sx={{ padding: { md: '2rem 4rem', xs: '0rem' } }}>
          <Link to={'/home'} style={{ textDecoration: 'none', color: '#777' }}>
            Home
          </Link>
          &#62; <span>Profile</span>
        </Typography>

        <Grid container md={12} sx={{ padding: { md: '3rem', xs: '0rem' } }}>
          <Grid item md={3}>
            <Stack width={'80%'} sx={{ flexDirection: { md: 'column', xs: 'row' } }} spacing={3}>
              <Link to={'/home'} style={{ ...font }}>
                <Typography variant='h6' sx={{ ":hover": { color: "crimson" } }}>
                  Dashboard
                </Typography>
              </Link>


              <Typography variant='h6' sx={{ ":hover": { color: "crimson" }, ...font, cursor: 'pointer' }} onClick={handleAccountClick}>
                Account Details
              </Typography>
              <Typography
                sx={{
                  ...font,
                  cursor: 'pointer',
                  ":hover": {
                    color: "crimson"
                  }
                }}
                onClick={handleLogout}
                variant='h6'
              >
                Logout
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <form method='post'>
                <Stack direction={'column'} spacing={2} mt={2}>
                  <TextField
                    variant='outlined'
                    type='text'
                    label='Name'
                    name='name'
                    value={name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <TextField
                    required
                    variant='outlined'
                    type='text'
                    label='Email'
                    name='email'
                    value={email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                  <FormControl variant="outlined" error={Boolean(error)}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => handleChange(e, "pass")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <TextField
                    required
                    variant='outlined'
                    type='password'
                    label='New Password'
                    name='new_password'
                    value={conPassword}
                    onChange={(e) => handleChange(e, "conPassword")}
                  />
                  <TextField
                    required
                    variant='outlined'
                    type='text'
                    label='Phone'
                    name='phone'
                    value={phonenum}
                    onChange={(e) => handleChange(e, "phonenum")}
                  />

                  <TextField
                    required
                    variant='outlined'
                    type='text'
                    label='Pincode'
                    name='pincode'
                    value={pincode}
                    onChange={(e) => handleChange(e, "pincode")}
                    multiline
                  />
                  <TextField
                    type='file'
                    variant='outlined'
                    onChange={(e) => handleChange(e, "image")}
                    name='image'
                  />

                  <input
                    type="submit"
                    defaultValue="submit"
                    onClick={handleSubmit}
                    style={{
                      color: '#fff',
                      border: '2px solid #000',
                      background: '#000',
                      marginTop: '20px',
                      transition: '.4s linear',
                      borderRadius: '.4rem',
                      padding: '.5rem 0rem',
                      fontSize: '1.4rem',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  />
                </Stack>
              </form>
            </Box>
          </Grid>
        </Grid>
        <Grid item mt={30}>
          <Gradient />
          <Footer />
        </Grid >
      </Box>
    </>
  );
}
