import React from 'react';
import {List,Container, ListItem, ListItemText, Typography} from "@mui/material";

const HalalPlaces = () => (
    <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Halal Restaurants & Mosques</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Al Noor Halal Restaurant" secondary="123 Halal Street, Istanbul" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Masjid Al-Falah" secondary="45 Prayer Lane, Kuala Lumpur" />
            </ListItem>
        </List>
    </Container>
);

export default HalalPlaces;
