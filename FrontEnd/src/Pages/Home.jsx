import React from 'react'
import HomeLanding from '../Component/landingPage/HomeLanding'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import CounterUpPage from '../Component/CounterUpPage.jsx'
import CardCrouselAnimation from '../Component/landingPage/CardCrouselAnimation'
import Footer from '../Component/Footer/Footer.jsx'
import { Link } from 'react-router-dom'
import Gradient from '../Component/Gradient/Gradient.jsx'
import Secure from '../Component/assets/secure.png';
import Affortable from '../Component/assets/Affortable.png';
import Reliable from '../Component/assets/Reliable.png';
import LocalShippingIcon from '../Component/assets/shipping.png';
import RefreshIcon from '../Component/assets/easy_returns.png';
import ContactSupportIcon from '../Component/assets/customer.png';
import Whatsapp from '../Component/Bots/Whatsapp'

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

export default function Home() {
  return (
    <>
      <HomeLanding />
      <Box sx={{ padding: '2rem 0rem' }}>
        <Grid container pt={5} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Grid lg={12} container sx={{
            justifyContent: "center",
            alignItems: 'center',
            letterSpacing: '1px',
            marginTop: '8rem',

          }} spacing={6}>
            <Grid item lg={5} sm={6} xs={12}>
              <Stack direction="column" >
                <Typography
                  sx={{
                    color: '#19BE6F',
                    fontSize: "20px",
                    fontWeight: 'bolder',

                  }}>
                  Work Progress
                </Typography>
                <Typography sx={{
                  fontSize: {
                    md: '5rem',
                    xs: '2rem'
                  },
                  width: '100%',
                  fontWeight: 'bolder',
                }}>
                  How It Works?
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Typography textAlign={'justify'} fontSize={'17px'}>
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
      </Box>
      <Box sx={{ padding: '15rem 0rem' }}>
        <CounterUpPage />
      </Box>
      <Grid container md={12} p={5} justifyItems={'center'} alignItems={'center'} spacing={2}>
        <Grid item md={4} alignItems={'center'} justifyContent={'center'}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <img src={Secure} alt='Secure' height={170} width={220} />
            <Stack direction={'column'} spacing={3}>
              <Typography variant='h3' fontFamily={'Rubik'}> Secure</Typography>
              <Typography sx={{ ...font }} >All the products displayed on Pharma-Buddy are reliable, all the products are lab tasted and verified with licenced pharmacies.</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
            <img src={Affortable} alt='Affortable' height={170} width={220} />
            <Stack direction={'column'} spacing={3}>
              <Typography variant='h3' fontFamily={'Rubik'}>Affortable</Typography>
              <Typography sx={{ ...font }}>In the Pharma-Buddy You can Find affortable medicines subsitutes. and save upto 50% on the health products upto 80% discount products are lab tested  </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <img src={Reliable} alt='Reliable' height={170} width={220} />
            <Stack direction={'column'} spacing={3}>
              <Typography variant='h3' fontFamily={'Rubik'}>Reliable</Typography>
              <Typography sx={{ ...font }}>Pharma - buddy is has encryption payment method with industry data security standard compliant </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ padding: '2rem 0rem' }}>
        <CardCrouselAnimation />
      </Box>

      <Grid container md={12} p={5} mt={20} justifyItems={'center'} alignItems={'center'} spacing={2}>
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
            <img src={RefreshIcon} alt='Affortable' height={250} width={260} />
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

      <Box mt={25}>
        <Gradient />
        <Footer />
      </Box>
      <Whatsapp/>
    </>
  )
}

