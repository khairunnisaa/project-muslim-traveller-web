import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useNavigate} from "react-router-dom";
import { MuiColor } from "../styles/enum";
import Logo from "./Navbar/Logo";
import SubmenuPopover from "./Navbar/SubmenuPopover";
import MobileDrawer from "./Navbar/MobileDrawer";

// Styles
const menuStyle = {
    color: MuiColor.White,
    '&:hover': {
        color: MuiColor.Orange,
    },
};

// Menu config
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

const MENU_ITEMS = [
    'Popular regions',
    'Popular destinations',
    'Popular landmarks',
];

const DESTINATIONS = [
    'Tokyo', 'Osaka', 'Kuala Lumpur', 'Shanghai',
    'Hong Kong', 'Genting Highlands', 'Taipei', 'Seoul',
    'Zurich', 'Kyoto', 'Bangkok', 'Langkawi',
    'Ipoh', 'Busan', 'Beijing', 'Paris',
];

const SUBMENUS: { [key: number]: string[] } = {
    0: ['Asia', 'Europe', 'America', 'Australia', 'Africa'],
    1: ['Tokyo', 'Osaka', 'Paris', 'Kuala Lumpur', 'Zurich'],
    2: ['Eiffel Tower', 'Mount Fuji', 'Petronas Towers', 'Burj Khalifa'],
};

const Navbar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [submenus, setSubmenus] = useState<{ [key: number]: string[] }>({});

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [submenuAnchors, setSubmenuAnchors] = useState<(null | HTMLElement)[]>(() => new Array(menuItems.length).fill(null));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [tabHoverEl, setTabHoverEl] = useState<HTMLElement | null>(null);
    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);

    // Handlers
    const handleMobileMenuOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
    const handleMobileMenuClose = () => setAnchorEl(null);

    const handleSubMenuOpen = (index: number, event: React.MouseEvent<HTMLElement>) => {
        const updated = [...submenuAnchors];
        updated[index] = event.currentTarget;
        setSubmenuAnchors(updated);
    };

    const handleSubMenuClose = (index: number) => {
        const updated = [...submenuAnchors];
        updated[index] = null;
        setSubmenuAnchors(updated);
    };

    const handleHover = (
        event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
        index: number
    ) => {
        const target = event.currentTarget;
        if (SUBMENUS[index] && target instanceof HTMLElement) {
            setHoveredTabIndex(index);
            setTabHoverEl(target);
        }
    };

    const handleClosePopover = () => {
        setHoveredTabIndex(null);
        setTabHoverEl(null);
    };

    const fetchDestinations = (): Promise<string[]> =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(['Tokyo', 'Seoul', 'Bangkok', 'Langkawi', 'Zurich']);
            }, 1000);
        });

    useEffect(() => {
        fetchDestinations().then((destinations) => {
            setSubmenus((prev) => ({ ...prev, 1: destinations }));
        });
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={4}
            sx={{
                minHeight: {xs:'8vh', md: '12vh'},
                backgroundColor: 'rgba(37,36,36,0.4)',
                backdropFilter: 'blur(6px)',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Container>
                <Stack direction="column" >
                    {/* Top toolbar with logo & menu */}
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Logo title={'Muslim'} subtitle={'Traveller'} />
                        <Stack direction='column'>
                            {/* Desktop Menu */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'flex-end' }}>
                                {menuItems.map((item, index) =>
                                    item.children ? (
                                        <Box
                                            key={index}
                                            onMouseEnter={(e) => handleSubMenuOpen(index, e)}
                                            onMouseLeave={() => handleSubMenuClose(index)}
                                        >
                                            <Button sx={menuStyle}>{item.label}</Button>
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
                                                        onClick={() => handleSubMenuClose(index)}
                                                    >
                                                        {child.label}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                    ) : (
                                        <Button key={item.to} sx={menuStyle} component={Link} to={item.to}>
                                            {item.label}
                                        </Button>
                                    )
                                )}


                                {/* Auth Buttons */}
                                <Box>
                                    <Button color="inherit" onClick={() => navigate('/register')}>Sign up</Button>
                                    <Button variant="contained" color="warning" onClick={() => navigate('/login')} sx={{ ml: 1 }}>
                                        Log in
                                    </Button>
                                </Box>
                            </Box>
                            <Divider sx={{ mt: 1, display: {xs: 'none', md: 'flex'} }} />

                            {/* Bottom toolbar with tabs */}
                            <Box sx={{ display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end', maxHeight: 0, p:0,}}>
                                <Tabs value={false} sx={{
                                    minHeight: 100, // tinggi tab container
                                    '.MuiTabs-flexContainer': { gap: 1 },
                                }}>
                                    {MENU_ITEMS.map((label, index) => (
                                        <Tab
                                            key={index}
                                            label={label}
                                            sx={{
                                                textTransform: 'none',
                                                textOverflow: 'ellipsis',
                                                minHeight: 0, // tinggi masing-masing tab
                                                minWidth: 'auto', // optional biar lebih kompak
                                                p:0.5,
                                                color: MuiColor.White,
                                                '&:hover': {
                                                    color: MuiColor.Orange,
                                                },
                                            }}
                                            onMouseEnter={(e) => handleHover(e, index)}
                                        />
                                    ))}
                                </Tabs>
                            </Box>
                            {/* Mobile Menu Button */}
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
                        </Stack>
                    </Toolbar>
                </Stack>

                <SubmenuPopover
                    open={hoveredTabIndex !== null && SUBMENUS[hoveredTabIndex] !== undefined}
                    anchorEl={tabHoverEl}
                    onClose={handleClosePopover}
                    items={hoveredTabIndex !== null ? SUBMENUS[hoveredTabIndex] || [] : []}
                />

                {/* Mobile Drawer */}
                <MobileDrawer
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    menuItems={MENU_ITEMS}
                />
            </Container>
        </AppBar>
    );
};

export default Navbar;
