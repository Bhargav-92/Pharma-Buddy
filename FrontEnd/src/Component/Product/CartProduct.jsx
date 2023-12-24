import React from 'react'
import { CartContext } from '../../CartContext'
import { useContext } from 'react'
import { getProductData } from '../../ProductStore'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Box, Button, CardMedia, Stack, Typography } from '@mui/material';
import { CardActions } from '@mui/joy';

const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id)


    return (
        <>
            <Card sx={{ display: 'flex', flexDirection: 'row', padding: '.9rem 2rem', marginTop: '1rem' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200, paddingRight: '2rem' }}
                    image={productData.image}
                    alt="Live from space album cover"

                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {productData.title} x {quantity}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Price :-  {(quantity * productData.price).toFixed(2)}&#8377;
                        </Typography>
                    </CardContent>
                    <CardActions sx={{padding:'1rem'}}>
                        <Button color='error' variant='contained' onClick={() => cart.deleteFromCart(id)}>
                            Remove
                        </Button>
                    </CardActions>
                </Box>

            </Card>
        </>
    )
}

export default CartProduct
