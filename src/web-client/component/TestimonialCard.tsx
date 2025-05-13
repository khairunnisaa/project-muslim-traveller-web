import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface TestimonialCardProps {
    text: string;
    name: string;
    role: string;
    image: string;
    stars?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({text, name, role, image, stars = 5}) => {
    return (
        <Box
            sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: '#fff',
                boxShadow: 3,
                maxWidth: 350,
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* Stars */}
            <Box sx={{ color: '#ff6600', display: 'flex', mb: 2 }}>
                {[...Array(stars)].map((_, idx) => (
                    <StarIcon key={idx} fontSize="small" />
                ))}
            </Box>

            {/* Testimonial Text */}
            <Typography variant="body1" fontWeight={300} color="text.secondary" sx={{ flexGrow: 1 }}>
                {text}
            </Typography>

            {/* Profile Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <Avatar src={image} alt={name} sx={{ width: 56, height: 56, mr: 2 }} />
                <Box>
                    <Typography fontWeight={700} fontSize="1rem">
                        {name}
                    </Typography>
                    <Typography fontWeight={500} fontSize="0.9rem" color="#ff6600">
                        {role}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TestimonialCard;
