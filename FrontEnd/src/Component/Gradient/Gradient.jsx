import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import img1 from '../assets/Gradient/1.png';
import img2 from '../assets/Gradient/2.png';
import img3 from '../assets/Gradient/3.png';
import img4 from '../assets/Gradient/4.png';
import img5 from '../assets/Gradient/5.png';
import img6 from '../assets/Gradient/6.png';

const images = [img1, img2, img3, img4, img5, img6];

const Gradient = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(80deg, rgb(25,188,219) , rgb(236,92,66))',
                padding: '40px'
            }} mt={10}>
            <Stack  direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} sx={{ display: "flex", flexWrap: 'wrap', }}>
                <img src={img1} alt='Gradient 1' />
                <img src={img2} alt='Gradient 2' />
                <img src={img3} alt='Gradient 3' />

                <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                    <img src={img4} alt='Gradient 4' />
                </Box>
                <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                    <img src={img5} alt='Gradient 5' />
                </Box>
                <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                    <img src={img6} alt='Gradient 6' />
                </Box>
            </Stack>
        </Box>
    );
};

export default Gradient;
