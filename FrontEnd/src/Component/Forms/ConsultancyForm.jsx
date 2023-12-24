import React, { useEffect, useState } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Box, Stack } from '@mui/material';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';


import {
    Grid,
    TextField,
    Typography,
    Button,
} from '@mui/material';


export default function Contact() {
    const [hovered, setHovered] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");


    useEffect(() => {
        setTimeout(function () {
            setMsg("");
        }, 15000)
    }, [msg])



    const handleChange = (e, type) => {

        switch (type) {
            case "fname":
                setError("");
                setFname(e.target.value);
                if (e.target.value === "") {
                    setError("First Name has left Blank!");
                }
                break;
            case "lname":
                setError("");
                setLname(e.target.value);
                if (e.target.value === "") {
                    setError("Last Name has left Blank!");
                }
                break;
            case "phone":
                setError("");
                setPhone(e.target.value);
                if (e.target.value === "") {
                    setError("Phone Number has left Blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("Email has left Blank!");
                }
                break;
            case "message":
                setError("");
                setMessage(e.target.value);
                if (e.target.value === "") {
                    setError("Email has left Blank!");
                }
                break;

            default:
                break;
        }

    };
    function handleSubmit(e) {
        e.preventDefault();
        if (fname !== "" && lname !== "" && phone !== "" && email !== "") {
            var url = "http://localhost/pharma-buddy-backend/appointment.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                fname: fname,
                lname: lname,
                phone: phone,
                email: email,
                message:message,
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    setMsg(response[0].result);
                }).catch((err) => {
                    setError(err);
                    console.log(err);
                });
            //notification
            Store.addNotification({
                title: "Wonderful!",
                message: "Message Sent successfully",
                type: "success",
                insert: "top",
                container: "top-full",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 4000,
                    onScreen: true
                }
            });
            setFname("");
            setLname("");
            setEmail("");
            setPhone("");
            setMessage("");
        }
        else {
            Store.addNotification({
                title: "Wonderful!",
                message: "All fields are required !! ",
                type: "danger",
                insert: "bottom",
                container: "top-full",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 4000,
                    onScreen: true
                },
                style: {
                    margin: '20rem'
                }
            });

        }

    }


    return (
        <>
            <div className="app-container">
                <ReactNotifications />
            </div>
            <Grid container spacing={10} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item md={4} xs={12}>
                    <Typography sx={{ fontSize: '34px', fontWeight: 500 }}>Appointment Form</Typography>

                    <form style={{ marginTop: '20px' }} onSubmit={handleSubmit} >
                        <Stack spacing={3}>

                            <TextField
                                id="outlined-basic"
                                label="First Name"
                                type='text'
                                variant="outlined"
                                placeholder='First Name'
                                fullWidth
                                value={fname}
                                onChange={(e) => handleChange(e, "fname")}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Last Name"
                                type='text'
                                variant="outlined"
                                placeholder='Last Name'
                                fullWidth
                                value={lname}
                                onChange={(e) => handleChange(e, "lname")}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Phone No"
                                type='text'
                                variant="outlined"
                                placeholder='Phone No'
                                fullWidth
                                value={phone}
                                onChange={(e) => handleChange(e, "phone")}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email Address"
                                type='text'
                                variant="outlined"
                                placeholder='Email Address'
                                fullWidth
                                value={email}
                                onChange={(e) => handleChange(e, "email")}
                            />
                            <TextField
                                type='text'
                                id='outlined-multiline-static'
                                label='Problem'
                                multiline
                                fullWidth
                                rows={4}
                                value={message}
                                onChange={(e) => handleChange(e, "message")}
                            />
                            <input
                                type="submit"
                                defaultValue="submit"
                                onClick={handleSubmit}
                                style={{
                                    color: '#fff',
                                    border: '2px solid #EC5C42',
                                    background: '#EC5C42',
                                    marginTop: '20px',
                                    transition: '.4s linear',
                                    borderRadius: '.4rem',
                                    padding: '.5rem 0rem',
                                    fontSize: '1.4rem',
                                    width: '100%',
                                    cursor: 'pointer',
                                }}
                            />
                        </Stack>
                    </form>
                </Grid>


                {/* second groid */}
                <Grid item md={6} xs={12} >
                    <Typography variant='h4' >Make An<span style={{ color: '#012a9b', }}> Appointment</span></Typography>
                    <Grid container spacing={6} mt={4}>
                        <Grid item md={6}>
                            <Stack direction={'row'} spacing={2}>
                                <Box>
                                    <VaccinesIcon style={{ fontSize: '80px', color: '#012a9b' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h5'>Test heading</Typography>
                                    <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item md={6}>
                            <Stack direction={'row'} spacing={2}>
                                <Box>
                                    <AddLocationIcon style={{ fontSize: '80px', color: '#012a9b' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h5'>Test heading</Typography>
                                    <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                                </Box>
                            </Stack>
                        </Grid>

                    </Grid>

                    <Grid container spacing={6} marginTop={2}>

                        <Grid item md={6}>
                            <Stack direction={'row'} spacing={2}>
                                <Box>
                                    <PersonSearchIcon style={{ fontSize: '100px', color: '#012a9b' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h5'>Test heading</Typography>
                                    <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item md={6}>
                            <Stack direction={'row'} spacing={2}>
                                <Box>
                                    <MedicalServicesIcon style={{ fontSize: '100px', color: '#012a9b' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h5'>Test heading</Typography>
                                    <Typography textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta. </Typography>
                                </Box>
                            </Stack>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}