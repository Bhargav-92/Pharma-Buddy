import React, { useState, useContext, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Drawer from '@mui/material/Drawer';
import { Badge, Dialog, Divider, List, ListItem, ListItemIcon, ListItemText, Slide, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import bot_img from '../assets/BotAvatar.png';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { CartContext } from '../../CartContext';
import CartProduct from '../Product/CartProduct';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { loadStripe } from "@stripe/stripe-js";



const Linkstyle = {
    fontSize: '20px',
    fontFamily: 'Rubik',
    color: '#000',
    textDecoration: 'none',
}

const ButtonStyle = {
    border: 'none',
    borderRadius: '.4rem',
    background: '#19BE6F',
    color: '#fff',
    padding: '.8rem 1rem',
    fontSize: '17px'

}

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ResponsiveAppBar() {

    const navigate = useNavigate();
    const settings = ['Profile', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [state, setState] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const cart = useContext(CartContext);
    const [open, setOpen] = React.useState(false);
    const [avatarImage, setAvatarImage] = React.useState();
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const item = {
        price: "price_1K3TfMA4B8Maa00LFZ4EFwdX",
        quantity: 1
    };

    useEffect(() => {
        const storedImage = localStorage.getItem("userImage");
        if (storedImage) {
            setAvatarImage(storedImage);
        }
    }, []);

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    };

    const redirectToCheckout = async () => {
        setLoading(true);
        console.log("redirectToCheckout");

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const checkout = async () => {
        try {
            const response = await fetch('http://localhost:4000/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: cart.items }),
            });

            if (!response.ok) {
                throw new Error(`Failed to create checkout session. Status: ${response.status}`);
            }

            const responseData = await response.json();

            if (responseData.url) {
                window.location.assign(responseData.url);
            } else {
                throw new Error('Invalid response format: URL not present');
            }
        } catch (error) {
            console.error('Error during checkout:', error.message);
            // Handle the error, e.g., display an error message to the user
        }
    };

    // const checkout = () => {
    //     const prize = cart.getTotalCost().toFixed(2);
    //     const product = cart.getProductQuantity;

    //     localStorage.setItem("purchase" , prize)
    //     // Use `prize` variable as needed
    //     console.log(prize); // For example, log the prize to the console
    //   };





    const ProductsCount = cart.items.reduce((sum, Product) => sum + Product.quantity, 0);


    const handleSettingClick = (setting) => {
        switch (setting) {
            case 'Profile':
                navigate('/profile');
                handleCloseUserMenu();
                break;
            case 'Dashboard':
                navigate('/home');
                handleCloseUserMenu();
                break;
            case 'Logout':
                localStorage.clear();
                localStorage.setItem("login", "");
                localStorage.setItem("LoginStatus ", "Logged out Successfully");
                navigate('/')
                handleCloseUserMenu();
                break;

            default:
                break;
        }
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // toggle drawer

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 200, marginTop: '2rem' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}

        >

            <Link to="/Home" style={{ ...Linkstyle }}>
                <List>
                    <ListItem Button>
                        <ListItemIcon >

                            <HomeIcon sx={{ marginRight: '20px' }} /> Home

                        </ListItemIcon>
                    </ListItem>
                </List>
            </Link>

            <Link to="/About" style={{ ...Linkstyle }}>
                <List>
                    <ListItem Button>
                        <ListItemIcon>
                            <InfoIcon sx={{ marginRight: '20px' }} /> About
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Link>
            <Link to="/Product" style={{ ...Linkstyle }}>
                <List>
                    <ListItem Button>
                        <ListItemIcon>
                            <ShoppingBagIcon sx={{ marginRight: '20px' }} /> Product
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Link>
            <Link to="/Contact" style={{ ...Linkstyle }}>
                <List>
                    <ListItem Button>
                        <ListItemIcon>
                            <CallIcon sx={{ marginRight: '20px' }} /> Contact
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Link>
            <Link to="/Consultancy" style={{ ...Linkstyle }}>
                <List>
                    <ListItem Button>
                        <ListItemIcon>
                            <CallIcon sx={{ marginRight: '20px' }} /> Consultancy
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Link>
        </Box>
    );

    // user data 
    const UserEmail = localStorage.getItem('user');
    const UserName = localStorage.getItem('name');
    return (
        <>
            <AppBar position="absolute" sx={{ background: "#fff", boxShadow: 'none', color: '#000' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <img src={bot_img} alt="LOGO" height={50} width={60} />
                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'rubik',
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Pharma-Buddy
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <div>
                                {['left'].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={toggleDrawer(anchor, true)}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </div>

                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Pharma-Buddy
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            paddingLeft: '4rem'
                        }}>
                            <Link to="/home"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    style={{ color: "#000" }}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link to="/about"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    style={{ color: "#000" }}
                                >
                                    About
                                </Button>
                            </Link>
                            <Link to="/contact"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    style={{ color: "#000" }}
                                >
                                    Contact
                                </Button>
                            </Link>
                            <Link to="/product"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    style={{ color: "#000" }}
                                >
                                    product
                                </Button>
                            </Link>
                            <Link to="/Consultancy"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    style={{ color: "#000" }}
                                >
                                    Consultancy
                                </Button>
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Stack direction={'row'}>                              
                                <Tooltip title="Cart">
                                    <MenuItem>
                                        <IconButton sx={{ pr: 1 }} onClick={() => setModal(true)}>
                                            <Badge color='error' badgeContent={ProductsCount}>
                                                <LocalMallIcon style={{ color: '#000', fontSize: '1.8rem' }} />
                                            </Badge>
                                        </IconButton>
                                    </MenuItem>
                                </Tooltip>
                                <Tooltip title="User">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="User Avatar" src={avatarImage} />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <Stack direction={'column'}>
                                    <Stack direction={'column'} sx={{ margin: "1rem 1rem", alignItems: 'flex-start' }} >
                                        <Typography textAlign="center" sx={{ fontWeight: 700 }} >{UserName}</Typography>
                                        <Typography textAlign="center">{UserEmail}</Typography>
                                    </Stack>
                                    <hr style={{
                                        border: ".1px solid #555"
                                    }} />
                                    <div style={{ padding: ".7rem 0rem" }}>
                                        {settings.map((setting, index) => (
                                            <MenuItem key={index} onClick={() => handleSettingClick(setting)} sx={{
                                                width: 200
                                            }}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </Stack>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Card modal  */}

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={modal}
                onClose={() => setModal(false)}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 700,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        maxHeight: '80vh', // Set maximum height
                        overflowY: 'auto', // Enable vertical scrolling
                        '&::-webkit-scrollbar': {
                            width: '8px'
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#fff'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#19BE6F',
                            borderRadius: '6px'
                        }
                    }}
                >
                    <ModalClose variant="plain" sx={{
                        m: 1,
                        transition: ' .2s linear',
                        ":hover": {
                            color: '#fff',
                            background: 'crimson'
                        }
                    }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Shopping Cart
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        {ProductsCount > 0 ?
                            <>
                                <Typography>Items in Your cart: {ProductsCount}</Typography>
                                {cart.items.map((currentProduct, index) => (
                                    <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
                                ))}
                                <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }} p={1} mt={2} spacing={15}>
                                    <Typography variant='h5'>Total :- &nbsp; {cart.getTotalCost().toFixed(2)} &#8377; </Typography>
                                    <button
                                        className="checkout-button"
                                        onClick={checkout}
                                        disabled={isLoading}
                                        style={{ ...ButtonStyle }}
                                    >
                                        <div className="text-container">
                                            <p className="text">{isLoading ? "Loading..." : "Checkout"}</p>
                                        </div>
                                    </button>
                                </Stack>
                            </>

                            :
                            <Typography variant='h5' sx={{ padding: '2rem' }}> There is no items in your cart</Typography>
                        }
                    </Typography>
                </Sheet>
            </Modal>
            {/* Wish modal  */}

            {/* <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            WishList
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        {WishProductsCount > 0 ?
                            <>
                                <Typography>Items in Your cart:</Typography>
                                {wish.items.map((currentProduct, index) => (
                                    <WishProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} ></WishProduct>
                                ))}
                                <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }} p={1} mt={2} spacing={15}>
                                    <Typography variant='h5'>Total :- &nbsp; {wish.getTotalCostWish().toFixed(2)} &#8377; </Typography>
                                    <Button variant='contained' color='success'>
                                        Checkout
                                    </Button>
                                </Stack>
                            </>

                            :
                            <Typography variant='h5' sx={{ padding: '2rem' }}> There is no items in your cart</Typography>
                        }
                    </Typography>
                </List>
            </Dialog> */}
            <Outlet />
        </>
    );
}
export default ResponsiveAppBar;