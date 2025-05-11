import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';

interface CountryCardProps {
    image: string;
    country: string;
    tourCount: number;
}

const CountryCard: React.FC<CountryCardProps> = ({ image, country, tourCount }) => {
    return (
        <Card
            sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                width: 280,
                height: 350,
                boxShadow: 3,
            }}
        >
            {/* Top-left country label */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: '#ea6a2b',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    borderBottomRightRadius: '8px',
                    zIndex: 1,
                }}
            >
                {country}
            </Box>

            {/* Bottom-right tour count */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    backgroundColor: '#ea6a2b',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    borderRadius: '20px',
                    zIndex: 1,
                }}
            >
                {tourCount} Tours
            </Box>

            {/* Image */}
            <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={country}
                sx={{ objectFit: 'cover' }}
            />
        </Card>
    );
};

export default CountryCard;
