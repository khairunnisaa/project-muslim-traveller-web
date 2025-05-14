import React from "react";
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from "@mui/material";
import IntercityRates from "../../component/Transporation/IntercityRates";
import AirportTransfer from "../../component/Transporation/AirportTransfer";
import TransportPricing from "../../component/Transporation/TransportPricing";
import TitleAndSubtitle from "../../component/TitleAndSubtitle";

type VehicleType = 'Sedan' | 'MPV' | 'Van' | 'Minibus' | 'Bus';
const intercityTypes: VehicleType[] = ['Sedan', 'MPV', 'Van', 'Minibus', 'Bus'];

const pricingData = {
    airportTransfer: [
        { type: "Sedan (2–4 penumpang)", oneWay: 100, roundTrip: 200 },
        { type: "MPV (6 penumpang)", oneWay: 120, roundTrip: 240 },
        { type: "Van (7–10 penumpang)", oneWay: 300, roundTrip: 600 },
        { type: "Minibus (15–18 penumpang)", oneWay: 400, roundTrip: 800 },
        { type: "Bus (44 penumpang)", oneWay: 700, roundTrip: 1400 },
    ],
    cityTour: [
        { type: "Sedan (2–4 penumpang)", price: 300 },
        { type: "MPV (2–6 penumpang)", price: 400 },
        { type: "Van (7–10 penumpang)", price: 700 },
        { type: "Minibus (15–18 penumpang)", price: 800 },
        { type: "Bus (44 penumpang)", price: 1200 },
    ],
    intercity: {
        destinations: ["Genting Highlands", "Cameron Highlands", "Melaka", "Penang", "Pahang"],
        types: ["Sedan", "MPV", "Van", "Minibus", "Bus"],
        rates: {
            Sedan: [
                [300, 500], [350, 600], [300, 500], [400, 700], [400, 700]
            ],
            MPV: [
                [350, 600], [450, 800], [350, 600], [500, 800], [500, 800]
            ],
            Van: [
                [400, 700], [800, 1500], [400, 800], [800, 1500], [800, 1500]
            ],
            Minibus: [
                [500, 1000], [900, 1600], [500, 1000], [1000, 2000], [1000, 2000]
            ],
            Bus: [
                [800, 1200], [1500, 2500], [1000, 1500], [1500, 2500], [1500, 2500]
            ],
        },
    },
    specialTours: {
        "2H1M": [
            { type: "Sedan/MPV (2–6)", price: 1140 },
            { type: "Van (7–10)", price: 1800 },
            { type: "Minibus (15–18)", price: 2300 },
            { type: "Bus (44)", price: 3400 }
        ],
        "3H2M": [
            { type: "Sedan/MPV (2–6)", price: 1740 },
            { type: "Van (7–10)", price: 2800 },
            { type: "Minibus (15–18)", price: 3500 },
            { type: "Bus (44)", price: 5200 }
        ],
    },
    tour6H5M: [
        { route: "KL + Selangor + Genting Highlands", MPV: 3350, Van: 5695, Minibus: 6700, Bus: 10050 },
        { route: "KL + Selangor + Cameron Highlands", MPV: 3450, Van: 5865, Minibus: 6900, Bus: 10350 },
        { route: "KL + Genting Highlands + Penang", MPV: 3790, Van: 6443, Minibus: 7580, Bus: 11370 },
        { route: "KL + Genting Highlands + Kuantan", MPV: 3790, Van: 6443, Minibus: 7580, Bus: 11370 },
        { route: "KL + Genting Highlands + Melaka", MPV: 3590, Van: 6103, Minibus: 7180, Bus: 10770 },
        { route: "KL + Genting Highlands + Terengganu", MPV: 3790, Van: 6443, Minibus: 7580, Bus: 11370 },
    ]
};

const renderTable = (title:any, rows:any, columns:any) => (
    <Box my={4}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((col:any) => (
                            <TableCell key={col}>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row:any, idx:any) => (
                        <TableRow key={idx}>
                            {columns.map((col:any) => (
                                <TableCell key={col}>{row[col.toLowerCase()]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);

export default function Transportation() {
    return (
        <Container>
            <TitleAndSubtitle title={'Transportation'} subtitle={'Select Your Transportation'} />

            <IntercityRates/>

            <AirportTransfer/>

            <TransportPricing/>

            {renderTable("Transfer Bandara (Sekali Jalan / Pulang-Pergi)", pricingData.airportTransfer, ["Type", "OneWay", "RoundTrip"])}

            {renderTable("Tur Kota (8 Jam)", pricingData.cityTour, ["Type", "Price"])}

            <Typography variant="h5" gutterBottom mt={6}>Transfer Antar Kota</Typography>
            {pricingData.intercity.destinations.map((city, i) => (
                <Box key={city} my={2}>
                    <Typography variant="subtitle1">{city}</Typography>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Jenis Kendaraan</TableCell>
                                    <TableCell>Sekali Jalan</TableCell>
                                    <TableCell>Pulang Pergi</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {intercityTypes.map((type: VehicleType) => (
                                    <TableRow key={type}>
                                        <TableCell>{type}</TableCell>
                                        <TableCell>RM {pricingData.intercity.rates[type][i][0]}</TableCell>
                                        <TableCell>RM {pricingData.intercity.rates[type][i][1]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ))}

            <Divider sx={{ my: 4 }} />

            {renderTable("Paket Tur Spesial 2H1M", pricingData.specialTours["2H1M"], ["Type", "Price"])}
            {renderTable("Paket Tur Spesial 3H2M", pricingData.specialTours["3H2M"], ["Type", "Price"])}

            <Typography variant="h5" mt={6} gutterBottom>Paket 6H5M</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Paket</TableCell>
                            <TableCell>MPV</TableCell>
                            <TableCell>Van</TableCell>
                            <TableCell>Minibus</TableCell>
                            <TableCell>Bus</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pricingData.tour6H5M.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.route}</TableCell>
                                <TableCell>RM {row.MPV}</TableCell>
                                <TableCell>RM {row.Van}</TableCell>
                                <TableCell>RM {row.Minibus}</TableCell>
                                <TableCell>RM {row.Bus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
