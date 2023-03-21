import React, { useState } from 'react';
import { Box, Card, CardActions, Collapse, Button, Typography, Rating, useTheme, useMediaQuery } from "@mui/material";
import { useGetProductsQuery } from 'state/api';
import Header from 'components/Header';

const Products = () => {
    return (
        <Box>
            <Header title="PRODUCTS" subtitle="See your products list"/>
        </Box>
    );
};

export default Products;