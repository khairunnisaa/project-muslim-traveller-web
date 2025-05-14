import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    Box,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SubmenuPopover from './SubmenuPopover';
import MobileDrawer from './MobileDrawer';

const MENU_ITEMS = [
    'Popular regions',
    'Popular destinations',
    'Popular landmarks',
    'Explore Klook',
    'Payment discounts',
    'Gift cards',
];

const DESTINATIONS = [
    'Tokyo', 'Osaka', 'Kuala Lumpur', 'Shanghai',
    'Hong Kong', 'Genting Highlands', 'Taipei', 'Seoul',
    'Zurich', 'Kyoto', 'Bangkok', 'Langkawi',
    'Ipoh', 'Busan', 'Beijing', 'Paris',
];

const HeaderMenu: React.FC = () => {
    const [tabHoverEl, setTabHoverEl] = useState<HTMLElement | null>(null);
    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleHover = (event: React.MouseEvent<HTMLElement>, index: number) => {
        if (index === 1) { // Only for "Popular destinations"
            setHoveredTabIndex(index);
            setTabHoverEl(event.currentTarget);
        }
    };

    const handleClosePopover = () => {
        setHoveredTabIndex(null);
        setTabHoverEl(null);
    };

    return (
        <Box>
            <AppBar position="static" color="inherit" elevation={1}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FF5A00' }}>
                        klook
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton onClick={() => setDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Tabs value={false}>
                                {MENU_ITEMS.map((label, index) => (
                                    <Tab
                                        key={index}
                                        label={label}
                                        onMouseEnter={(e) => handleHover(e, index)}
                                    />
                                ))}
                            </Tabs>
                            <Box>
                                <Button color="inherit">Sign up</Button>
                                <Button variant="contained" color="warning" sx={{ ml: 1 }}>
                                    Log in
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>

            <SubmenuPopover
                open={hoveredTabIndex === 1}
                anchorEl={tabHoverEl}
                onClose={handleClosePopover}
                items={DESTINATIONS}
            />

            <MobileDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                menuItems={MENU_ITEMS}
            />
        </Box>
    );
};

export default HeaderMenu;
