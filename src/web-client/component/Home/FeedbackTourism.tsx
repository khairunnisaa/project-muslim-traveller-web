import React from 'react';
import {Grid} from "@mui/material";
import TestimonialCard from "../TestimonialCard";
const testimonials = [
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Roger Scott',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/150?img=32',
    },
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Roger Scott',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/150?img=47',
    },
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Roger Scott',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/150?img=11',
    },
];

const FeedbackTourism = () => (
    <Grid container spacing={4} justifyContent="center">
        {testimonials.map((item, idx) => (
            <Grid size={{xs:12, md:4}} key={idx}>
                <TestimonialCard {...item} />
            </Grid>
        ))}
    </Grid>

);

export default FeedbackTourism;
