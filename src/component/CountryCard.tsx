import React, { useState } from 'react';
import { Box, Card, CardMedia, Skeleton } from '@mui/material';
import { MuiColor } from '../styles/enum';

interface CountryCardProps {
    id: number,
    image: any;
    country: string;
    tourCount: number;
    onDestinationClick: (id: number) => void;
}



const CountryCard: React.FC<CountryCardProps> = ({onDestinationClick,id, image, country, tourCount }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <Card onClick={() => onDestinationClick(id)}
            sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                    cursor: 'pointer',
                },
            }}
        >
            {/* Top-left country label */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: MuiColor.Orange,
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    borderBottomRightRadius: '8px',
                    zIndex: 2,
                }}
            >
                {country}
            </Box>

            {/* Bottom-right tour count */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: MuiColor.Orange,
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    borderTopLeftRadius: 8,
                    zIndex: 2,
                }}
            >
                {tourCount} Destination
            </Box>

            {/* Skeleton Loader */}
            {!loaded && (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={200}
                    animation="wave"
                />
            )}

            {/* Image */}
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={country}
                sx={{
                    objectFit: 'cover',
                    display: loaded ? 'block' : 'none',
                }}
                onLoad={() => setLoaded(true)}
            />
        </Card>
    );
};

export default CountryCard;
