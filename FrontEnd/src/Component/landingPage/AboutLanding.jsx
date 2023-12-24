import React from 'react'
import styles from '../Modulecss/animated.module.css'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

export default function AboutLanding() {
    return (
        <>
            <article
                className={styles.article}
            >
                <Stack direction="column" sx={{ justifyContent: "center", alignItems: 'center' }}>
                    <h1 className={styles.header}>About Us</h1>
                    <p className={styles.link}>
                        <Link to="/Home" className={styles.link}>
                            Home
                        </Link>  /
                        About
                    </p>
                </Stack>
            </article>
        </>
    )
}


