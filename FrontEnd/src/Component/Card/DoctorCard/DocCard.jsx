import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import doc1 from '../../assets/Doctors/Dentist.png';
import doc2 from '../../assets/Doctors/dermatologist.png';
import doc3 from '../../assets/Doctors/neurologist.png';
import doc4 from '../../assets/Doctors/ophthalmologist.png';

const style = {
    background: '#fff',
    transition: '.3s linear',
    ":hover": {
        background: '#1D4248',
        color: '#fff'
    }
}
export default function DocCard() {
    const doctors = [
        {
            image: doc1,
            name: 'Frank C. McGee',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, beatae.',
            profession: 'Surgeon',
        },
        {
            image: doc2,
            name: 'Lorance Romily',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio?',
            profession: 'Dermatologist',
        },
        {
            image: doc3,
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorum.',
            profession: 'Neurologist',
        },
        {
            image: doc4,
            name: 'Alice Smith',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, iusto.',
            profession: 'Ophthalmologist',
        },
        // Add more doctor objects here as needed
    ];

    return (

        <Grid container spacing={10} p={10}>
            {doctors.map((doctor, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ width: 300, padding: '2rem 3rem', ...style }}>
                        <Stack style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} spacing={2}>
                            <img src={doctor.image} alt={`doctor ${index + 1}`} height={120} width={130} />
                            <Typography variant="h5" color={'rgb(25,188,219)'}>{doctor.name}</Typography>
                            <Typography>{doctor.description}</Typography>
                            <Typography variant="h5" color={'#EC5C42'}>{doctor.profession}</Typography>
                        </Stack>
                    </Card>
                </Grid>
            ))}
        </Grid>

    );
}
