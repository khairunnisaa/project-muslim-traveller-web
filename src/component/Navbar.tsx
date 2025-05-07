import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { MuiColor } from "../styles/enum";

export const menuStyle = {
    color: MuiColor.White,
    '&:hover': {
        color: MuiColor.Orange,
    },
};

const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Destination", to: "/destination" },
    { label: "Hotel", to: "/hotel" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <AppBar
                position="absolute"
                elevation={0}
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}
            >
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* Logo */}
                        <Box sx={{ flexDirection: 'column-reverse' }}>
                            <Typography variant="h1" sx={{
                                fontSize: 17,
                                color: MuiColor.White,
                                lineHeight: 0.1,
                                fontWeight: 900,
                            }}>
                                Muslim
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: "30px",
                                color: MuiColor.Orange,
                                lineHeight: 1.2,
                                fontWeight: 700,
                                fontFamily: "Arizonia, cursive",
                            }}>
                                Traveller
                            </Typography>
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            {menuItems.map((item) => (
                                <Button key={item.to} sx={menuStyle} component={Link} to={item.to}>
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={() => setOpenDrawer(true)} sx={{ color: MuiColor.White }}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box sx={{ width: 250 }} onClick={() => setOpenDrawer(false)}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem  key={item.to} component={Link} to={item.to}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
