import { Box, Grid } from '@mui/joy';
import React, { useState } from 'react';
import { productsArray } from '../ProductStore';
import ProductLanding from '../Component/landingPage/ProductLanding';
import Footer from '../Component/Footer/Footer';
import Gradient from '../Component/Gradient/Gradient';
import ProductDetails from '../Component/Product/ProductDetails'


const commonStyling = {
  justifyContent: 'center',
  p: 4,
  alignItems: 'center',
  paddingLeft: {
    xs: "1rem",
    md: "6rem"
  }
}

function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Display 4 products per page
  const totalProducts = productsArray.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const productsToShow = productsArray.slice(startIndex, startIndex + productsPerPage);

  return (
    <>
      <Box>
        <ProductLanding />
        <ProductDetails />
      </Box>
      <Box mt={25}>
        <Gradient />
        <Footer />
      </Box>

    </>
  );
}

export default Product;
