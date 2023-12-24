import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import CardStyle from '../Modulecss/animated.module.css'
import Cards from '../Card/CardCraousel.jsx'
import { Link } from 'react-router-dom'

export default function CardCrouselAnimation() {
    return (
        <>

            <Box className={CardStyle.CardCrousel} mt={30}>
                <Typography variant='h4' color={"#fff"} fontFamily={"Rubik"}>Client Testimonials</Typography>

                <Grid container md={12}>
                    <Grid item md={6} sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'block'
                        }
                    }}>
                        <Stack sx={{
                            fontFamily: 'Rubik',
                            color: '#fff',
                            width: '40rem'
                        }} pl={15} spacing={3}>
                            <Typography variant='h3' fontWeight={'600'}>
                                See our Products
                            </Typography>
                            <Typography>
                                We have serveral products Categories which includes child category
                            </Typography>
                            <Typography
                                textAlign={'justify'}
                            >
                                Discover a world of wellness with our carefully curated selection of pharmaceutical products. Trust in our pharmacy's commitment to providing safe and effective healthcare solutions. Explore our extensive inventory to find the right products for your well-being.
                            </Typography>
                            <Link to={'/product'}>
                                <Button sx={{
                                    background: 'rgba(0,0,0,0)',
                                    color: '#fff',
                                    border: '2px solid #EC5C42',
                                    padding: '10px 15px',
                                    transition: '.3s linear',
                                    ":hover": {
                                        background: '#EC5C42',
                                        border: '#fff',
                                        color: '#fff',
                                    }
                                }}>
                                    See our products
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item md={6} sx={{
                        marginLeft: {
                            md: '0px',
                            xs: '15rem',
                            sm: '10rem'
                        }
                    }}>
                        <Cards />
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}


