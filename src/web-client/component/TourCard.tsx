import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface TourCardProps {
    image: string;
    price: string;
    days: number;
    title: string;
    location: string;
    baths: number;
    beds: number;
    label: string;
}

const TourCard: React.FC<TourCardProps> = ({ image, price, days, title, location, baths, beds, label }) => {
    return (
        <Card sx={{ borderRadius: 3, overflow: 'hidden', position: 'relative', boxShadow: 3 }}>
            {/* Price Tag */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: '#ea6a2b',
                    color: 'white',
                    fontWeight: 600,
                    px: 2,
                    py: 0.5,
                    borderBottomRightRadius: '8px',
                    zIndex: 1,
                }}
            >
                ${price}/person
            </Box>

            {/* Image */}
            <CardMedia component="img" height="250" image={image} alt={title} />

            {/* Content */}
            <CardContent>
                <Typography variant="caption" sx={{ fontWeight: 600, color: '#ea6a2b' }}>
                    {days} DAYS TOUR
                </Typography>
                <Typography variant="h6" fontWeight="bold" mt={0.5}>
                    {title}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={0.5} color="text.secondary" mb={2}>
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2">{location}</Typography>
                </Stack>

                <Stack direction="row" spacing={3} alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <BathtubIcon fontSize="small" />
                        <Typography>{baths}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <HotelIcon fontSize="small" />
                        <Typography>{beds}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <TerrainIcon fontSize="small" />
                        <Typography>{label}</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default TourCard;
