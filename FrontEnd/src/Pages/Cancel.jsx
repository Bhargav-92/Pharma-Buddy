import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import cancellationAnimation from '../Component/assets/cancel_order.png';
import { Link } from 'react-router-dom';

const CancelOrder = () => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
      direction={'column'}
      textAlign="center"
    >
      <Grid item>
        <Box pt={15}>
          <Typography variant="h3" sx={{
            color:'#333',
            fontWeight:500
          }}>Order Cancellation Request Received</Typography>
        </Box>
      </Grid>
      <Grid item>
        <img src={cancellationAnimation} alt="Cancellation Animation" height={300} width={350} />
      </Grid>
      <Grid item>
        <Typography variant="h3" color='error'>Order cancellation in progress</Typography>
      </Grid>
      <Grid item p={2}>
        <Typography width={700}>
          We've received your request to cancel the order. The cancellation process is underway. An email/SMS with the cancellation details will be sent shortly. We appreciate your understanding.
        </Typography>
      </Grid>
      <Grid item p={2}>
        <Link to="/product">
          <Button color='primary' variant='contained'>
            Continue Shopping
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default CancelOrder;
