import React, { useEffect, useState } from 'react';
import consult from '../Component/assets/consult.png';
import { Box, Button, Grid, Stack, Typography, TextField } from '@mui/material';
import CardStyle from '../Component/Modulecss/animated.module.css';
import { Link } from 'react-router-dom';
import DoctorCard from '../Component/DoctorCard/CardCraousel';
import LocalShippingIcon from '../Component/assets/shipping.png';
import RefreshIcon from '../Component/assets/easy_returns.png';
import ContactSupportIcon from '../Component/assets/customer.png';
import Footer from '../Component/Footer/Footer';
import DocCard from '../Component/Card/DoctorCard/DocCard';
import ConsultancyForm from '../Component/Forms/ConsultancyForm'
import Gradient from '../Component/Gradient/Gradient';
import { ReactNotifications, Store } from 'react-notifications-component';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const font = {
  fontSize: '15px',
  textAlign: 'justify',
  color: '#666',
  fontFamily: 'Rubik',
};

const Icons = {
  color: '#062A3F',
  fontSize: '1.7rem',
  ":hover": {
    color: '#fff',
    transition: '.4s',
  },
};

export default function Consultancy() {
  const [hovered, setHovered] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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
      case "fname":
        setError("");
        setFname(e.target.value);
        if (e.target.value === "") {
          setError("First Name has left Blank!");
        }
        break;
      case "lname":
        setError("");
        setLname(e.target.value);
        if (e.target.value === "") {
          setError("Last Name has left Blank!");
        }
        break;
      case "phone":
        setError("");
        setPhone(e.target.value);
        if (e.target.value === "") {
          setError("Phone Number has left Blank!");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left Blank!");
        }
        break;
      case "message":
        setError("");
        setMessage(e.target.value);
        if (e.target.value === "") {
          setError("Email has left Blank!");
        }
        break;

      default:
        break;
    }

  };
  function handleSubmit(e) {
    e.preventDefault();
    if (fname !== "" && lname !== "" && phone !== "" && email !== "" && message !== "") {
      var url = "http://localhost/pharma-buddy-backend/appointment.php";
      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };
      var Data = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        message: message,
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
          duration: 2000,
          onScreen: true
        }
      });
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
    else {
      Store.addNotification({
        title: "Oops!",
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
        style: {
          margin: '20rem'
        }
      });

    }

  }

  return (
    <>
      <div className="app-container">
        <ReactNotifications />
      </div>
      <Grid container md={12} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        {/* Header Image */}
        <Grid item md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={consult} alt="consult" height={520} width={1000} />
        </Grid>

        {/* Features */}
        <Grid item md={12}>
          <Grid container md={12} p={5} mt={10} justifyItems={'center'} alignItems={'center'} spacing={2}>
            {/* Feature 1 */}
            <Grid item md={4} alignItems={'center'} justifyContent={'center'}>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <img src={ContactSupportIcon} alt='Secure' height={200} width={250} />
                <Stack direction={'column'} spacing={3}>
                  <Typography variant='h5' fontFamily={'Rubik'}>Customer Support</Typography>
                  <Typography sx={{ ...font }}>
                    We have 24*7 Customer Support, You can Submit Your Queries at Any Time!!
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Feature 2 */}
            <Grid item md={4}>
              <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
                <img src={RefreshIcon} alt='Affortable' height={200} width={250} />
                <Stack direction={'column'} spacing={3}>
                  <Typography variant='h5' fontFamily={'Rubik'}>Easy Returns</Typography>
                  <Typography sx={{ ...font }}>
                    We Provide Best Facility of Easy Return Where you can replace your product very easily!
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Feature 3 */}
            <Grid item md={4}>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <img src={LocalShippingIcon} alt='Reliable' height={200} width={250} />
                <Stack direction={'column'} spacing={3}>
                  <Typography variant='h5' fontFamily={'Rubik'}>Free Shipping</Typography>
                  <Typography sx={{ ...font }}>
                    We Provide Free Shipping, Means We Provide Medicine with no Extra Delivery charge!
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Client Testimonials */}
        <Grid item>
          <Box className={CardStyle.CardCrousel} mt={30}>
            <Typography variant='h4' color={"#fff"} fontFamily={"Rubik"}>Our Doctor Team</Typography>

            <Grid container md={12}>
              {/* Text Content */}
              <Grid item md={6} sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
              }}>
                <Stack sx={{
                  fontFamily: 'Rubik',
                  color: '#fff',
                  width: '40rem',
                }} pl={15} spacing={3}>
                  <Typography variant='h3' fontWeight={'600'}>
                    See our Products
                  </Typography>
                  <Typography>
                    We have several products Categories which includes child category
                  </Typography>
                  <Typography
                    textAlign={'justify'}
                  >
                    Discover a world of wellness with our carefully curated selection of pharmaceutical products. Trust in our pharmacy's commitment to providing safe and effective healthcare solutions. Explore our extensive inventory to find the right products for your well-being.
                  </Typography>
                  <Link to={'/product'}>
                    <Button sx={{
                      background: 'rgba(0,0,0,0)',
                      color: '#fff',
                      border: '2px solid #EC5C42',
                      padding: '10px 15px',
                      transition: '.3s linear',
                      ":hover": {
                        background: '#EC5C42',
                        border: '#fff',
                        color: '#fff',
                      },
                    }}>
                      See our products
                    </Button>
                  </Link>
                </Stack>
              </Grid>

              {/* Doctor Cards */}
              <Grid item md={6} sx={{
                marginLeft: {
                  md: '0px',
                  xs: '15rem',
                  sm: '10rem',
                },
              }}>
                <DoctorCard />
              </Grid>
            </Grid>
          </Box>
        </Grid >

        {/* Additional Grid */}
        <Grid container pt={20}>
          <Grid item>
            <DocCard />
          </Grid>
          <Grid item>
            <DocCard />
          </Grid>
        </Grid>
        <Grid container pt={20}>
          <Grid item>
            <Grid container spacing={10} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Grid item md={4} xs={12}>
                <Typography sx={{ fontSize: '34px', fontWeight: 500 }}>Appointment Form</Typography>

                <form style={{ marginTop: '20px' }} onSubmit={handleSubmit} >
                  <Stack spacing={3}>

                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      type='text'
                      variant="outlined"
                      placeholder='First Name'
                      fullWidth
                      value={fname}
                      onChange={(e) => handleChange(e, "fname")}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      type='text'
                      variant="outlined"
                      placeholder='Last Name'
                      fullWidth
                      value={lname}
                      onChange={(e) => handleChange(e, "lname")}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Phone No"
                      type='text'
                      variant="outlined"
                      placeholder='Phone No'
                      fullWidth
                      value={phone}
                      onChange={(e) => handleChange(e, "phone")}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email Address"
                      type='text'
                      variant="outlined"
                      placeholder='Email Address'
                      fullWidth
                      value={email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                    <TextField
                      type='text'
                      id='outlined-multiline-static'
                      label='Problem'
                      multiline
                      fullWidth
                      rows={4}
                      value={message}
                      onChange={(e) => handleChange(e, "message")}
                    />
                    <input
                      type="submit"
                      defaultValue="submit"
                      onClick={handleSubmit}
                      style={{
                        color: '#fff',
                        border: '2px solid #EC5C42',
                        background: '#EC5C42',
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
              </Grid>


              {/* second groid */}
              <Grid item md={6} xs={12} >
                <Typography variant='h4' >Make An<span style={{ color: '#012a9b', }}> Appointment</span></Typography>
                <Grid container spacing={6} mt={4}>
                  <Grid item md={6}>
                    <Stack direction={'row'} spacing={2}>
                      <Box>
                        <VaccinesIcon style={{ fontSize: '80px', color: '#012a9b' }} />
                      </Box>
                      <Box>
                        <Typography variant='h5'>Test heading</Typography>
                        <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack direction={'row'} spacing={2}>
                      <Box>
                        <AddLocationIcon style={{ fontSize: '80px', color: '#012a9b' }} />
                      </Box>
                      <Box>
                        <Typography variant='h5'>Test heading</Typography>
                        <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                </Grid>

                <Grid container spacing={6} marginTop={2}>

                  <Grid item md={6}>
                    <Stack direction={'row'} spacing={2}>
                      <Box>
                        <PersonSearchIcon style={{ fontSize: '100px', color: '#012a9b' }} />
                      </Box>
                      <Box>
                        <Typography variant='h5'>Test heading</Typography>
                        <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack direction={'row'} spacing={2}>
                      <Box>
                        <MedicalServicesIcon style={{ fontSize: '100px', color: '#012a9b' }} />
                      </Box>
                      <Box>
                        <Typography variant='h5'>Test heading</Typography>
                        <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        {/* Footer */}

        <Grid item mt={30}>
          <Gradient />
          <Footer />
        </Grid >
      </Grid>
    </>
  );
}
