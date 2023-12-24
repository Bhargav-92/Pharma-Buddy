import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Grid, Stack, Typography, Button, Box } from "@mui/material";
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EastIcon from '@mui/icons-material/East';
import Therapy from '../Component/assets/Therapy.png'
import Counsultancy from '../Component/assets/Login.png'
import meddicie from '../Component/assets/medicine.png'
import { Link } from "react-router-dom";
import style from '../Component/Modulecss/animated.module.css'


const icon = {
    fontSize: '2.5rem'
}
const font = {
    fontSize: '1.5rem'
}
const btn = {
    background: '#19BE6F',
    padding: '.5rem',
    color: '#fff',
    fontWeight: 500,
    fontSize:'14px',
    letterSpacing: '1px',
    ":hover": {
        background: '#19BE6F',
        color: '#fff',
    }
}
const hideMenu = {
    display: {
        sm: "none",
        xs: "none",
        lg: "block",
        md: "block"
    }

}

const CounterUpPage = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div>
                    <article
                        className={style.CounterUp}
                    >
                        <Grid sx={{
                            ...hideMenu,
                            p: 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#F7F8F8',
                            marginTop: "-8rem",
                            width: '60rem',
                            borderRadius:'.6rem'

                        }}>

                            <Grid container lg={12} sx={{ alignItems: 'center', fontFamily: 'Rubik'}} spacing={8}>
                                <Grid item lg={8} sm={12} xs={12}>
                                    <Typography sx={{
                                        color: '#062A3F',
                                        fontSize: '2rem',
                                        fontWeight: 'bolder'
                                    }}>
                                        Provided services Lorem ipsum dolor sit amet.</Typography>

                                </Grid>
                                <Grid item lg={4} sm={12} xs={12} sx={{ paddingLeft: '3rem' }}>
                                    <Link to="/about" style={{ textDecoration: 'none' }}>
                                        <Button sx={{ ...btn }}>
                                            More Details
                                            <EastIcon sx={{ fontSize: '15px', marginLeft: '2px' }} />
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>

                            <Grid container lg={12} spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '3rem', fontFamily: 'Rubik' }}>
                                <Grid item lg={4} sm={12} xs={12} >

                                    <Stack direction="row">
                                        <img src={Therapy} height="80px" width="100px" />
                                        <Stack direction="column" marginLeft={2}>
                                            <Typography sx={{ fontWeight: 'bolder', marginBottom: '1rem' }}>Therapy</Typography>
                                            <Typography>We have Team Of Best Doctor , and We Provide best therapy</Typography>
                                        </Stack>
                                    </Stack>

                                </Grid>
                                <Grid item lg={4} sm={12} xs={12}>

                                    <Stack direction="row">
                                        <img src={Counsultancy} height="80px" width="100px" />
                                        <Stack direction="column" marginLeft={2}>
                                            <Typography sx={{ fontWeight: 'bolder', marginBottom: '1rem' }}>Consultancy</Typography>
                                            <Typography>We have Team Of Best Doctor , and We Provide 24*7 Consultancy Service</Typography>
                                        </Stack>
                                    </Stack>

                                </Grid>
                                <Grid item lg={4} sm={12} xs={12}>

                                    <Stack direction="row">
                                        <img src={meddicie}height="80px" width="100px" />
                                        <Stack direction="column" marginLeft={2}>
                                            <Typography sx={{ fontWeight: 'bolder', marginBottom: '1rem' }}>Meddicine</Typography>
                                            <Typography>We have fastest Delivery. Within 24 hour we deliver your medicine at your place</Typography>
                                        </Stack>
                                    </Stack>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid container lg={8} className={style.CounterOn} spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <AirlineSeatFlatIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={3500} duration={2} />}+</div>
                                    <Typography>Happy clients</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <MonitorHeartIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={60} duration={2} />}+</div>
                                    <Typography>Project Done</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <VolunteerActivismIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={40} duration={2} />}+</div>
                                    <Typography>Award Win</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <MedicalServicesIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={635} duration={2} />}+</div>
                                    <Typography>client Work</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                    </article>
                </div>

            </ScrollTrigger>
        </>

    )
}
export default CounterUpPage;