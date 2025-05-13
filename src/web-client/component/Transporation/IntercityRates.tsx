// src/pages/IntercityRates.tsx
import { Card, CardContent, Typography, Grid } from "@mui/material";

type VehicleType = 'Sedan' | 'MPV' | 'Van' | 'Minibus' | 'Bus';

const destinations = [
    "Genting Highlands",
    "Cameron Highlands",
    "Melaka",
    "Penang",
    "Pahang"
];

const intercityRates: Record<VehicleType, [number, number][]> = {
    Sedan: [
        [300, 500],
        [350, 600],
        [300, 500],
        [400, 700],
        [400, 700]
    ],
    MPV: [
        [350, 600],
        [450, 800],
        [350, 600],
        [500, 800],
        [500, 800]
    ],
    Van: [
        [400, 700],
        [800, 1500],
        [400, 800],
        [800, 1500],
        [800, 1500]
    ],
    Minibus: [
        [500, 1000],
        [900, 1600],
        [500, 1000],
        [1000, 2000],
        [1000, 2000]
    ],
    Bus: [
        [800, 1200],
        [1500, 2500],
        [1000, 1500],
        [1500, 2500],
        [1500, 2500]
    ]
};

export default function IntercityRates() {
    return (
        <div style={{ padding: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                Intercity Transfer Rates (One Way / Round Trip)
            </Typography>
            <Grid container spacing={3}>
                {destinations.map((destination, i) => (
                    <Grid size={{xs:12,md:6,lg:4}} key={destination}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {destination}
                                </Typography>
                                {Object.entries(intercityRates).map(([type, rates]) => (
                                    <div key={type} style={{ marginBottom: "0.5rem" }}>
                                        <Typography variant="body1">
                                            <strong>{type}</strong>: RM {rates[i][0]} / RM {rates[i][1]}
                                        </Typography>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
