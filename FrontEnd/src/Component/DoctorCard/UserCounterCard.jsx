import { Card, Stack, Typography, Grid, Button } from '@mui/material';
import React from 'react';

const hover = {
  transition: '.26s linear',
  ':hover': {
    background: '#EC5C42',
    color: '#fff',
  },
};
const btn = {
  border:'2px solid #EC5C42',
  color:'#fff',
  margin:'1rem 1.5rem',
  transition: '.26s linear',
  ':hover': {
    background: '#EC5C42',
    color: '#fff',
  },
};

export default function UserCounterCard() {
  return (
    <>
    
      <Grid container md={12} spacing={2} p={2}>
        <Grid item>
          <Card sx={{ padding: '1rem 2rem', ...hover }}>
            <Stack direction={'column'} spacing={2}>
              <Typography variant='h4'>01</Typography>
              <Typography>
                Research & <br />
                Preclinical
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ padding: '1rem 3rem', ...hover }}>
            <Stack direction={'column'} spacing={2}>
              <Typography variant='h4'>02</Typography>
              <Typography>
                Starting <br />
                Phase
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ padding: '1rem 3rem', ...hover }}>
            <Stack direction={'column'} spacing={2}>
              <Typography variant='h4'>03</Typography>
              <Typography>
                Medium <br />
                Phase
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Grid container md={12} spacing={2} p={2}>
        <Grid item>
          <Card sx={{ padding: '1rem 2rem', ...hover }}>
            <Stack direction={'column'} spacing={2}>
              <Typography variant='h4'>04</Typography>
              <Typography>
                Finishing & <br />
                Phase
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ padding: '1rem 2rem', ...hover }}>
            <Stack direction={'column'} spacing={2}>
              <Typography variant='h4'>05</Typography>
              <Typography>
                After Drug <br />
                Approval
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ padding: '1rem 3rem', ...hover }}>
            <Stack direction={'column'} spacing={2}>
              <Typography variant='h4'>06</Typography>
              <Typography>
                Drug <br />
                Production
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      <Button sx={{...btn}}>
        See Our Products
      </Button>
    </>
  );
}
