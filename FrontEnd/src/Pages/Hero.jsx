import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '../Component/Button/Button';
import HeroAppbar from '../Component/HeroAppbar/HeroAppbar';
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer/HeroFooter';
import '../Component/Modulecss/HeroScrollbar.css';
import img1 from '../Component/assets/Doctors/img1.png'
import img2 from '../Component/assets/Doctors/img2.png'
import img3 from '../Component/assets/Doctors/img3.png'
import img4 from '../Component/assets/Doctors/img4.png'




const ButtonStyle = {
  background: "linear-gradient(to right , #111, #777)",
  color: "#fff",
  fontSize: "16px",
  padding: ".6rem 1.5rem",
  textTransform: 'capitalize',
  borderRadius: "5rem",
  border: "none",
};



function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [animationCSS, setAnimationCSS] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationCSS(true);
      document.body.classList.add('hero-page'); // Add class to body for the hero page
    }, 400);

    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove('hero-page'); // Remove class when component unmounts
    };
  }, []);
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <HeroAppbar />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container direction="column" alignItems="center" spacing={1}>
          <Grid item pb={2} mt={20}>
            <Typography
              fontWeight={700}
              variant='h2'
              style={{
                transform: animationComplete ? 'translateY(0)' : 'translateY(40px)',
                opacity: animationComplete ? 1 : 0,
                filter: `blur(${animationComplete ? 0 : 5}px)`,
                transition: 'transform .5s linear',
              }}
            >
              Welcome to Pharma-Buddy
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight={400}
              style={{
                transform: animationComplete ? 'translateY(0)' : 'translateY(40px)',
                opacity: animationComplete ? 1 : 0,
                filter: `blur(${animationComplete ? 0 : 5}px)`,
                transition: 'transform .7s linear',
              }}
            >
           Explore a world of healthcare solutions, where our wide range of pharmaceutical products, 
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight={400}
              style={{
                transform: animationComplete ? 'translateY(0)' : 'translateY(40px)',
                opacity: animationComplete ? 1 : 0,
                filter: `blur(${animationComplete ? 0 : 5}px)`,
                transition: 'transform .8s linear',
              }}
            >
           dedicated customer care, and expert consultancy meet all your wellness needs.
            </Typography>
          </Grid>
          <Grid item mt={6}>
            <Link to="/signup ">
              <Button
                style={{
                  ...ButtonStyle,
                  opacity: animationComplete ? 1 : 0,
                  filter: `blur(${animationComplete ? 0 : 5}px)`,
                  transition: 'transform .8s linear',
                }}
              >
                Sign Up For Free
              </Button>
            </Link>
          </Grid>
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} p={5} spacing={4}>
            <Stack direction={'row'} spacing={"-0.2rem"}>
              <img src={img1} alt="customer" height={45} width={50} style={{ filter: 'brightness(0.8)' }}/>
              <img src={img2} alt="customer" height={45} width={50} style={{ filter: 'brightness(0.8)' }} />
              <img src={img3} alt="customer" height={45} width={50} style={{ filter: 'brightness(0.8)' }} />
              <img src={img4} alt="customer" height={45} width={50} style={{ filter: 'brightness(0.8)' }} />
            </Stack>
            <Typography>
              Loved By 1000+ Customers
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Footer />

    </>
  );
}

export default Hero;
