import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import styles from '../Modulecss/animated.module.css';
import Pharma from '../assets/backHome2.png';
import { Link } from 'react-router-dom';


function HomeLanding() {
    return (
        <article className={styles.Home}>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={10}  p={9}>
                <Stack direction="column" sx={{ color: '#fff', fontStyle: 'rubik', textAlign: 'center' }} spacing={5}>
                    <Typography variant='h3' fontWeight={600}>
                        Welcome to Pharma - Buddy
                    </Typography>
                    <Typography variant='h5' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quasi?
                    </Typography>
                    <Box>
                        <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }} spacing={6}>
                            <Link to='/consultancy'>
                                <button className={styles.homeButton} role="button">
                                    Consult
                                </button>
                            </Link>
                            <Link to='/product'>
                                <button className={styles.homeButton} role="button">
                                    Purchase
                                </button>
                            </Link>
                        </Stack>
                    </Box>

                </Stack>
                <Box sx={{ display: { md: 'block ', xs: 'none' }, paddingRight: '4rem' }}>
                    <div className={styles.HomeImage} >
                        <img src={Pharma} alt="Home image" />
                    </div>
                </Box>
            </Stack>
        </article>
    );
}

export default HomeLanding;
