import React from 'react'
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import footer_image from '../assets/BotAvatar.png'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreateIcon from '@mui/icons-material/Create';
import Gradient from '../Gradient/Gradient';


const callIcon = {
  background: '#19BE6F',
  borderRadius: '5rem',
  padding: '3px',
  color: "#fff"
}

function Footer() {
  return (
    <>
      
      <Grid container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          background: '#fff',
          color: '#000',
          minHeight: '80vh', 
          padding: '10px', 
        }}
        md={12} p={8} pl={10}>
        <Grid item md={3}>
          <Stack direction={'row'} alignItems={'center'}>
            <img src={footer_image} alt='Footer Image' height={50} width={60} />
            <Typography variant='h5' fontWeight={600}>Pharma - <span >Buddy </span></Typography>
          </Stack>
          <Stack direction={'column'} spacing={3}>
            <Typography textAlign={'justify'} width={'80%'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio praesentium mollitia accusamus odit itaque. Quibusdam ipsum ad sed iusto?</Typography>
            <Typography variant='h5' fontWeight={500}>Contact</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon style={{ ...callIcon }} />
                  </ListItemIcon>
                  <ListItemText primary="+91 92659 35647" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon style={{ ...callIcon }} />
                  </ListItemIcon>
                  <ListItemText primary="+91 92659 35647" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon style={{ ...callIcon }} />
                  </ListItemIcon>
                  <ListItemText primary="+91 92659 35647" />
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
        </Grid>
        <Grid item md={3}>
          <Stack spacing={1.5} direction={'column'}>
            <Typography variant='h5' fontWeight={500}>Services</Typography>
            <Typography>&bull; Payment methods</Typography>
            <Typography>&bull; Privacy Policy</Typography>
            <Typography>&bull; Term & conditions</Typography>
            <Typography>&bull; FAQ</Typography>
            <Typography>&bull; Product Complain</Typography>
            <Typography>&bull; Consult Doctor</Typography>
            <Typography>&bull; Product Complain</Typography>
            <Typography>&bull; All Doctor List</Typography>
            <Typography>&bull; Returns & Funds</Typography>
          </Stack>
        </Grid>
        <Grid item md={3}>
          <Stack spacing={1.5} direction={'column'}>
            <Typography variant='h5' fontWeight={500}>Quick Links</Typography>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Supplements</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Diet & Nutrition</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Covid 19</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Cosmetics</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Product Complain</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Consult Doctor</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Vitamins</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Baby Care</Typography>
            </Link>
            <Link to='/product' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Mamaearth Products</Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item md={3}>
          <Stack spacing={2}>
            <Typography variant='h5' fontWeight={500}>Follow Us</Typography>
            <Stack spacing={2} direction={'row'}>
              <FacebookIcon style={{ color: 'blue', cursor: 'pointer' }} />
              <InstagramIcon style={{ color: 'crimson', cursor: 'pointer' }} />
              <TwitterIcon style={{ color: '#00bfff', cursor: 'pointer' }} />
              <LinkedInIcon style={{ color: 'blue', cursor: 'pointer' }} />
            </Stack>
            <Stack direction={'column'} pt={2}>
              <Typography variant='h5' fontWeight={500}>Working Hours</Typography>
              <Typography variant='h6'>24 x 7</Typography>
            </Stack>
            <Stack direction="column" spacing={2} justifyContent="center">
              <Typography sx={{ fontSize: '1.5rem' }}>
                Contact info
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon style={{ color: '#0E292E' }} />
                <Typography>203 Royal street University Road, Rajkot, Gujarat, India</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <CallIcon style={{ color: '#0E292E' }} />
                <Typography>9265978659</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <CreateIcon style={{ color: '#0E292E' }} />
                <Typography>pharmabuddy@gmail.com</Typography>
              </Stack>
            </Stack>

          </Stack>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={20}
        sx={{
          padding: '1rem',
          background: '#3B3B3B',
          color: '#fff',
          width: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop:'-1rem'
        }}>
        <Typography>
          Copyright &#169; 2023 All rights reserved
        </Typography>
        <Typography>
          Privacy |  Terms | Sitemap | Help
        </Typography>
      </Stack>
    </>
  )
}

export default Footer
