import React from 'react';
import { Card, Stack, Typography, Box } from '@mui/material';



export default function CardComponent({ title, image, description, name }) {
  return (
    <Card sx={{ minWidth: 345, background: '#1D4248', color: '#fff'}} >
      <Stack direction={'column'} sx={{textAlign:'center',alignItems:'center'}} p={2}>
        <Box>
          <img src={image} alt="user" height={150} width={180} />
        </Box>
        <Typography textAlign={'center'}>
          {description}
        </Typography>
        <Typography variant='h5' color={'#19BCDB'} p={2}>
          {name}
        </Typography>
        <Typography variant='h6' color={'#EC5C42'} p={1}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}
