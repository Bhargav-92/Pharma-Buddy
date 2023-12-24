import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '../Button/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

const ButtonStyle = {
  background: "#000",
  color: "#fff",
  fontSize: "15px",
  padding: ".6rem 1rem",
  textTransform: 'capitalize', 
  borderRadius: ".4rem",
  border: "none",
};

export default function HeroAppbar() {
  return (
    <>
      <AppBar position="static" style={{ background: '#fff', boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" flexGrow={1}>
            <Link to={"/"} style={{
              color: "#000",
              fontSize: '1.5rem',
              textDecoration: "none"
            }}>
              Pharma-Buddy
            </Link>
          </Typography>
          <Stack spacing={2} direction={'row'}>
            <Link to={"/signup"}>
              <Button style={{ ...ButtonStyle }}>
                Sign Up
              </Button>
            </Link>
            <Link to={"/signin"}>
              <Button style={{ ...ButtonStyle }}>
                Sign In
              </Button>
            </Link>
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: {
                xs: 'block',
                md: 'none'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
