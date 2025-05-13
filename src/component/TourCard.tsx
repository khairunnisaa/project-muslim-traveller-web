import React from 'react';
import {Typography, Card, CardMedia, CardContent, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {MuiColor} from "../styles/enum";

interface TourCardProps {
    image: string;
    days: number;
    title: string;
    location: string;
    baths: number;
    beds: number;
    label: string;
}

const TourCard: React.FC<TourCardProps> = ({ image, days, title, location, baths, beds, label }) => {
    return (
        <Card sx={{ borderRadius: 3, overflow: 'hidden', position: 'relative', boxShadow: 3 }}>

            {/* Image */}
            <CardMedia component="img" height="250" image={image} alt={title} />

            {/* Content */}
            <CardContent>
                <Typography variant="caption" sx={{ fontWeight: 600, color: '#ea6a2b' }}>
                    {days} DAYS TOUR
                </Typography>
                <Typography variant="h6" fontWeight="bold" mt={0.5}>
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Typography>
                <Stack direction="column"  spacing={0.5} color="text.secondary" mb={2}>
                    <Stack direction="row" spacing={1}>
                        <LocationOnIcon fontSize="small" sx={{color: MuiColor.Orange}}/>
                        <Typography variant="body2">{location.length > 20 ? `${location.substring(0, 20)}...` : location}</Typography>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <EditNoteIcon fontSize="small" sx={{color: MuiColor.Orange}} />
                        <Typography variant="body2">{label.length > 100 ? `${label.substring(0, 100)}...` : label}</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default TourCard;
