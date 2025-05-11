import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const airportTransferData = [
    { type: 'Sedan (2–4 passengers)', price: 'RM 100 / RM 200' },
    { type: 'MPV (6 passengers)', details: 'Toyota Camry / Alza / Innova', price: 'RM 120 / RM 240' },
    { type: 'Van (7–10 passengers)', details: 'Hyundai Staria / Toyota Alphard', price: 'RM 300 / RM 600' },
    { type: 'Minibus (15–18 passengers)', details: 'Toyota HiAce', price: 'RM 400 / RM 800' },
    { type: 'Bus (44 passengers)', details: 'On Request', price: 'RM 700 / RM 1400' },
];

const AirportTransfer = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Airport Transfer (One-Way / Round Trip)
            </Typography>
            <Grid container spacing={2}>
                {airportTransferData.map((item, index) => (
                    <Grid size={{xs:12, sm:6, md:4}} key={index}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">{item.type}</Typography>
                                {item.details && (
                                    <Typography variant="body2" color="text.secondary">
                                        {item.details}
                                    </Typography>
                                )}
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    <strong>Price:</strong> {item.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AirportTransfer;
