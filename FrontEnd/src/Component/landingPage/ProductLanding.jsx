import React from 'react'
import styles from '../Modulecss/animated.module.css'
import { Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import product from '../assets/product.png'


const productHeader= {
    width : '100%',
    margin : {
        md:' 0rem 6rem',
        xs:'0rem'
    },
}

export default function ProductLanding() {
    return (
        <>
            <article
                className={styles.product}
            >
                <Grid container spacing={50} sx={{ justifyContent: "center", alignItems: 'center' }}>
                    <Grid item md={5} xs={12}>
                        <Stack sx={{ justifyContent: 'center', alignItems: 'center', ...productHeader }} spacing={3}>
                            <Typography variant='h1' fontWeight={500} fontFamily={'Rubik'} className={styles.header}>Shop</Typography>
                            <Typography className={styles.link}>
                                <Link to="/Home" className={styles.link}>
                                    Home
                                </Link>  /
                                Product
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={7} sx={{ display: { md: 'block', xs: 'none' } }}>
                        <img src={product} height={500} width={600} style={{ marginTop: '2rem' }} alt='#' />
                    </Grid>
                </Grid>
            </article>
        </>
    )
}


