import React from 'react';
import image from "../assets/image/img.png";
import {Box, Container, IconButton, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { MuiColor } from '../styles/enum';
const Hero = () => (
    <Box className="hero-wrap"
        sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            py: 10,
            width: "100%",
            height: "70vh",
            position: "inherit",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
        }}
    >
        <Box className="overlay" sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
            py: 10,
            background: "#000000",
            width: '100%',
            height: "70vh",
        }}>

        </Box>
        <Container sx={{
            marginTop: 20,
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: 'space-between',
                flexDirection: { xs: "column", md: "row" },
                alignItems: 'center',
                gap: 4,
            }}>
                <Box sx={{ position: 'relative', zIndex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography sx={{
                        fontSize: {xs: 25, md: 30},
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        Welcome to Muslim Traveller
                    </Typography>
                    <Typography variant="h1" sx={{
                        fontSize: {xs: 30, md: 70},
                        color: MuiColor.White,
                        lineHeight: 1.2,
                        fontWeight: 700,
                    }}>
                        Discover Your Favorite <br/> Place with Us
                    </Typography>
                    <Typography variant="caption" component="p" sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                    }}>
                        Travel to the any corner of the world, without going around in circles
                    </Typography>

                </Box>
                <Box alignSelf={{ xs: 'center', md: 'center' }} margin={5}>
                    <IconButton
                        sx={{
                            color: MuiColor.Orange,
                            backgroundColor: MuiColor.White,
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            boxShadow: 3,
                            '&:hover': {
                                backgroundColor: MuiColor.White,
                            },
                        }}
                    >
                        <PlayArrowIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    </Box>

);

export default Hero;
