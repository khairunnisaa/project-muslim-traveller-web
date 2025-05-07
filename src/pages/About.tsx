import React from 'react';
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";

const destinations = [
    { name: "Istanbul", description: "A beautiful city with rich Islamic history." },
    { name: "Kuala Lumpur", description: "Modern city with many halal options." },
];

const Destinations = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>Muslim-Friendly Destinations</Typography>
            <Grid container spacing={2}>
                {destinations.map((dest, idx) => (
                    <Grid size={{xs:12, md:6, }} key={idx}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{dest.name}</Typography>
                                <Typography>{dest.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Destinations;
