import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type MobileDrawerProps = {
    open: boolean;
    onClose: () => void;
    menuItems: string[];
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, menuItems }) => {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box sx={{ width: 250, p: 2 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">Menu</Typography>
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </Box>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem  key={index}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default MobileDrawer;
