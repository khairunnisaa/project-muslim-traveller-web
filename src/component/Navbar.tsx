import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton, ListItemText,
    Menu,
    MenuItem, MenuList, Paper,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { MuiColor } from "../styles/enum";
import Divider from "@mui/material/Divider";

// Style menu button
export const menuStyle = {
    color: MuiColor.White,
    '&:hover': {
        color: MuiColor.Orange,
    },
};

// Menu items with optional submenus
const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    {
        label: "Transportation",
        children: [
            { label: "Bus", to: "/transportation" },
            { label: "Train", to: "/transportation/train" },
            { label: "Flight", to: "/transportation/flight" },
        ],
    },
    {
        label: "Hotel",
        children: [
            { label: "Budget", to: "/hotel" },
            { label: "Luxury", to: "/hotel/luxury" },
        ],
    },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

const Navbar = () => {
    // Mobile menu anchor
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Submenu anchor per index (desktop)
    const [submenuAnchors, setSubmenuAnchors] = useState<(null | HTMLElement)[]>(
        () => new Array(menuItems.length).fill(null)
    );

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSubMenuOpen = (index: number, event: React.MouseEvent<HTMLElement>) => {
        const updatedAnchors = [...submenuAnchors];
        updatedAnchors[index] = event.currentTarget;
        setSubmenuAnchors(updatedAnchors);
    };

    const handleSubMenuClose = (index: number) => {
        const updatedAnchors = [...submenuAnchors];
        updatedAnchors[index] = null;
        setSubmenuAnchors(updatedAnchors);
    };

    return (
        <AppBar
            position="fixed"
            elevation={4}
            sx={{
                backgroundColor: 'rgba(37,36,36,0.4)',
                backdropFilter: 'blur(6px)',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box sx={{ flexDirection: 'column-reverse', marginTop:{xs:2} }}>
                        <Typography variant="h1" sx={{
                            fontSize: {xs: 14, md: 16},
                            color: MuiColor.White,
                            lineHeight: 0.1,
                            fontWeight: 900,
                        }}>
                            Muslim
                        </Typography>
                        <Typography variant="h1" sx={{
                            fontSize: {xs: 24, md: 33},
                            color: MuiColor.Orange,
                            lineHeight: 1,
                            fontWeight: 700,
                            fontFamily: "Arizonia, cursive",
                        }}>
                            Traveller
                        </Typography>
                    </Box>

                    {/* Desktop Menu with Dropdowns */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {menuItems.map((item, index) => {
                            if (item.children) {
                                return (
                                    <Box
                                        key={index}
                                        onMouseEnter={(e) => handleSubMenuOpen(index, e)}
                                        onMouseLeave={() => handleSubMenuClose(index)}
                                    >
                                        <Button sx={menuStyle}>
                                            {item.label}
                                        </Button>

                                            <Menu
                                                anchorEl={submenuAnchors[index]}
                                                open={Boolean(submenuAnchors[index])}
                                                onClose={() => handleSubMenuClose(index)}
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                                MenuListProps={{ autoFocusItem: false }}
                                            >
                                                {item.children.map((child, cIdx) => (
                                                    <MenuItem

                                                        key={cIdx}
                                                        component={Link}
                                                        to={child.to}
                                                        onClick={() => handleSubMenuClose(index)}>{child.label}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                    </Box>

                                );
                            }

                            return (
                                <Button key={item.to} sx={menuStyle} component={Link} to={item.to}>
                                    {item.label}
                                </Button>
                            );
                        })}
                    </Box>

                    {/* Mobile Menu (Dropdown) */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton onClick={handleMobileMenuOpen} sx={{ color: MuiColor.Orange }}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMobileMenuClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            {menuItems.map((item, idx) =>
                                item.children ? (
                                    <Box key={idx}>
                                        <MenuItem disabled>{item.label}</MenuItem>
                                        {item.children.map((child, cIdx) => (
                                            <MenuItem
                                                key={cIdx}
                                                component={Link}
                                                to={child.to}
                                                onClick={handleMobileMenuClose}
                                                sx={{ pl: 4 }}
                                            >
                                                {child.label}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                ) : (
                                    <MenuItem
                                        key={item.to}
                                        component={Link}
                                        to={item.to}
                                        onClick={handleMobileMenuClose}
                                    >
                                        {item.label}
                                    </MenuItem>
                                )
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
