import * as React from 'react';
import { Grid, Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { productsArray } from '../../ProductStore';
import ProductCard from './ProductCard';

export default function ProductDetails(props) {

    
    return (
        <Grid container p={15} direction={'row'}>
            {productsArray.map((product, index) => (
                <Grid item md={3} xs={12} p={3} mt={2} key={index}>
                  <ProductCard product={product}/> 
                  {/* property */}
                </Grid>
            ))}
        </Grid>
    );
}