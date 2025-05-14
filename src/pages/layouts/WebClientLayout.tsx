import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const WebClientLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box>
                <Outlet />
            </Box>
            <Footer/>
        </>
    );
};

export default WebClientLayout;
