import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import animation from '../Component/assets/success.gif';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
      direction={'column'}
    >
      <Grid item>
        <Box pt={15} sx={{ textAlign: 'center' }}>
          <Typography variant="h3">Thank you for Purchasing !!</Typography>
        </Box>
      </Grid>
      <Grid item>
        <img src={animation} alt="Success Animation" height={200} width={200} />
      </Grid>
      <Grid item>
        <Typography variant="h4">Order confirmed !!</Typography>
      </Grid>
      <Grid item textAlign={'center'} p={2}>
        <Typography width={700}>Thank you for your purchase! Your order has been successfully confirmed. An email/SMS with order details will be sent shortly. We appreciate your business!</Typography>
      </Grid>
      <Grid item textAlign={'center'} p={2}>
        <Link to="/product">
          <Button color='error' variant='contained'>
            Purchase More
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Success;
