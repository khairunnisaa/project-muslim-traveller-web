import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={4}
                sx={{
                    backgroundColor: 'rgba(37,36,36,0.4)',
                    backdropFilter: 'blur(6px)',
                    zIndex: (theme) => theme.zIndex.drawer + 1, // pastikan di atas semua
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

                        {/* Mobile Menu (Dropdown) */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={handleMenuOpen} sx={{ color: MuiColor.Orange }}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                {menuItems.map((item) => (
                                    <MenuItem
                                        key={item.to}
                                        component={Link}
                                        to={item.to}
                                        onClick={handleMenuClose}
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
