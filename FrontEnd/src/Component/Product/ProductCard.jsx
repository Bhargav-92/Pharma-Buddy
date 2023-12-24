import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, Stack, Grid, Divider, CardMedia, } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../../CartContext'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Modal, ModalClose, Sheet } from '@mui/joy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const ProductQuantity = cart.getProductQuantity(product.id);
    const [open, setOpen] = React.useState(false);

    // // whishList
    // const wish = useContext(WishContext);
    // const WishQuantity = wish.getWishQuantity(product.id)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(cart.items);
    // console.log(wish.items);



    return (
        <>
            <Card sx={{ maxWidth: 400, padding: "5px" }}>
                <CardContent
                    sx={{
                        p: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(0deg)',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                            transform: ' scale(1.1)',
                        },
                    }}>
                    <img
                        src={product.image}
                        height={150}
                        width={150}
                        alt="Products"
                    />

                </CardContent>

                <CardContent sx={{ paddingBottom: "1.5rem" }} >
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography gutterBottom component="div" variant='h6'>
                            {product.title}
                        </Typography>
                        <Typography variant='h6'>
                            {product.price}	&#8377;
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>

                    {ProductQuantity > 0 ?
                        <>
                            <Stack direction={'column'} spacing={2}>
                                <Stack direction={'row'} spacing={1}>
                                    <Typography variant='h6'>
                                        In Cart : {ProductQuantity}
                                    </Typography>
                                    <Stack direction={'row'}>
                                        <Button size="small" color='success' onClick={() => cart.addOneToCart(product.id)}>
                                            <AddIcon />
                                        </Button>
                                        <Button size="small" color='error' onClick={() => cart.removeOneFromCart(product.id)}>
                                            <RemoveIcon />
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Button size='small' variant='contained' color='error' onClick={() => cart.deleteFromCart(product.id)}>Clear</Button>
                            </Stack>
                        </> :
                        <Stack direction={'row'} spacing={2}>
                            <Button size="small" color='error' sx={{ padding: '7px 20px' }} variant='contained' onClick={() => cart.addOneToCart(product.id)}>

                                <ShoppingCartIcon />&nbsp;  Add to Cart
                            </Button>
                            <Button size="small" variant='contained' onClick={handleClickOpen}>
                                <RemoveRedEyeIcon />
                            </Button>
                        </Stack>
                    }
                </CardActions>
            </Card >

            {/* Modal for View Product */}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 600,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1, transition: ".2s linear", ":hover": { color: '#fff', background: 'crimson' } }} />

                    <Card sx={{ display: 'flex', padding: "30px", justifyContent: 'space-between', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 250, padding: "20px" }}
                            image={product.image}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {product.description}
                                </Typography>
                                <Typography variant="subtitle1" color="000" fontWeight={'500'} component="div">
                                <span style={{color:"#000",fontSize:'20px',padding:'2rem 0rem'}}>Availability </span>  : {product.stock}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


                                {ProductQuantity > 0 ?
                                    <>
                                        <Stack direction={'column'} spacing={2}>
                                            <Stack direction={'row'} spacing={1}>
                                                <Typography variant='h6'>
                                                    In Cart : {ProductQuantity}
                                                </Typography>
                                                <Stack direction={'row'}>
                                                    <Button size="small" color='success' onClick={() => cart.addOneToCart(product.id)}>
                                                        <AddIcon />
                                                    </Button>
                                                    <Button size="small" color='error' onClick={() => cart.removeOneFromCart(product.id)}>
                                                        <RemoveIcon />
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                            <Button size='small' variant='contained' color='error' onClick={() => cart.deleteFromCart(product.id)}>Clear</Button>
                                        </Stack>
                                    </> :
                                    <Stack direction={'row'} spacing={2}>
                                        <Button size="small" color='error' variant='contained' onClick={() => cart.addOneToCart(product.id)}>

                                            <ShoppingCartIcon />&nbsp;  Add to Cart
                                        </Button>
                                    </Stack>
                                }
                            </Box>
                        </Box>
                    </Card>
                </Sheet>
            </Modal>
        </>
    )
}

export default ProductCard
