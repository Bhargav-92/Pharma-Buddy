import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Component/Footer/Footer.jsx'
import { Link } from 'react-router-dom'
import CounterUpPage from '../Component/CounterUpPage.jsx'
import Secure from '../Component/assets/secure.png';
import Affortable from '../Component/assets/Affortable.png';
import Reliable from '../Component/assets/Reliable.png';
import CardStyle from '../Component/Modulecss/animated.module.css'
import Cards from '../Component/Card/CardCraousel.jsx'
import AboutLanding from '../Component/landingPage/AboutLanding.jsx'
import Gradient from '../Component/Gradient/Gradient.jsx'



const btn = {
  background: '#19BE6F',
  padding: "1rem",
  color: "#fff",
  letterSpacing: '1px',
  fontWeight: 600,
  transition: '.3s linear',
  ":hover": {
    background: '#fff',
    border: '2px solid #19BE6F',
    color: "#19BE6F",

  }
}

const font = {
  fontSize: '15px',
  textAlign: 'justify',
  color: '#666',
  fontFamily: 'Rubik'

}

export default function About() {
  return (
    <>
      <AboutLanding />
      <Grid container pt={5} alignItems={'center'} justifyContent={'center'}>
        <Grid lg={12} container sx={{
          justifyContent: "center",
          alignItems: 'center',
          letterSpacing: '1px',
          marginTop: '8rem',

        }} spacing={6}>
          <Grid item lg={4} sm={6} xs={12}>
            <Stack direction="column" >
              <Typography
                sx={{
                  color: '#19BE6F',
                  fontSize: "16px",
                  fontWeight: 'bolder',

                }}>
                Work Progress
              </Typography>
              <Typography sx={{
                fontSize: {
                  md: '4rem',
                  xs: '2rem'
                },
                fontWeight: 'bolder',
              }}>
                How It Works?
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Typography textAlign={'justify'}>
              Pharma-Buddy is more than just an online medicine purchasing company; we also take pride in offering consultancy and customer care services, as we greatly value our customers.
            </Typography>
          </Grid>
          <Grid item lg={2} sm={6} xs={12}>
            <Link to="/product" style={{ textDecoration: "none" }}>
              <Button sx={{ ...btn }}>
                Make Order
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Box className={CardStyle.CardCrousel} mt={30}>
        <Typography variant='h4' color={"#fff"} fontFamily={"Rubik"}>Client Testimonials</Typography>

        <Grid container md={12}>
          <Grid item md={6} sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block'
            }
          }}>
            <Stack sx={{
              fontFamily: 'Rubik',
              color: '#fff',
              width: '40rem'
            }} pl={15} spacing={3}>
              <Typography variant='h3' fontWeight={'600'}>
                See our Products
              </Typography>
              <Typography>
                We have serveral products Categories which includes child category
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
                  }
                }}>
                  See our products
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid item md={6} sx={{
            marginLeft: {
              md: '0px',
              xs: '15rem',
              sm: '10rem'
            }
          }}>
            <Cards />
          </Grid>
        </Grid>
      </Box>

      <Box marginTop={40}>
        <CounterUpPage />
      </Box>
      <Box>
        <Grid container md={12} p={5} mt={30} justifyItems={'center'} alignItems={'center'} spacing={2}>
          <Grid item md={4} alignItems={'center'} justifyContent={'center'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <img src={Secure} alt='Secure' height={170} width={220} />
              <Stack direction={'column'} spacing={3}>
                <Typography variant='h4' fontFamily={'Rubik'}> Secure</Typography>
                <Typography sx={{ ...font }} >All the products displayed on Pharma-Buddy are reliable, all the products are lab tasted and verified with licenced pharmacies.</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
              <img src={Affortable} alt='Affortable' height={170} width={220} />
              <Stack direction={'column'} spacing={3}>
                <Typography variant='h4' fontFamily={'Rubik'}>Affortable</Typography>
                <Typography sx={{ ...font }}>In the Pharma-Buddy You can Find affortable medicines subsitutes. and save upto 50% on the health products upto 80% discount products are lab tested  </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <img src={Reliable} alt='Reliable' height={170} width={220} />
              <Stack direction={'column'} spacing={3}>
                <Typography variant='h4' fontFamily={'Rubik'}>Reliable</Typography>
                <Typography sx={{ ...font }}>Pharma - buddy is has encryption payment method with industry data security standard compliant </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid item mt={30}>
        <Gradient />
        <Footer />
      </Grid >
    </>
  )
}
