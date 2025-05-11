import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

type TransferCardSectionProps = {
    title: string;
    data: {
        type: string;
        details?: string;
        price: string;
    }[];
    note?: string;
};

const airportTransferData = [
    { type: 'Sedan (2–4 passengers)', price: 'RM 100 / RM 200' },
    { type: 'MPV (6 passengers)', details: 'Toyota Camry / Alza / Innova', price: 'RM 120 / RM 240' },
    { type: 'Van (7–10 passengers)', details: 'Hyundai Staria / Toyota Alphard', price: 'RM 300 / RM 600' },
    { type: 'Minibus (15–18 passengers)', details: 'Toyota HiAce', price: 'RM 400 / RM 800' },
    { type: 'Bus (44 passengers)', details: 'On Request', price: 'RM 700 / RM 1400' },
];

const cityTourData = [
    { type: 'Sedan (2–4 passengers)', price: 'RM 300' },
    { type: 'MPV (2–6 passengers)', price: 'RM 400' },
    { type: 'Van (7–10 passengers)', price: 'RM 700' },
    { type: 'Minibus (15–18 passengers)', price: 'RM 800' },
    { type: 'Bus (44 passengers)', price: 'RM 1200' },
];

const additionalInfo = 'Additional charge per hour after 8 hours: RM 40/hr';

const TransferCardSection:React.FC<TransferCardSectionProps> = ({ title, data, note }) => (
    <div style={{ marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom>
            {title}
        </Typography>
        <Grid container spacing={2}>
            {data.map((item:any, index:any) => (
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
        {note && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {note}
            </Typography>
        )}
    </div>
);

const TransportPricing = () => {
    return (
        <div>
            <TransferCardSection title="Airport Transfer (One-Way / Round Trip)" data={airportTransferData}/>
            <TransferCardSection title="City Tour (8-Hour Package)" data={cityTourData} note={additionalInfo} />
            {/* Additional sections like Intercity Transfer, 2D1N / 3D2N / 6D5N Packages can be added below */}
        </div>
    );
};

export default TransportPricing;
