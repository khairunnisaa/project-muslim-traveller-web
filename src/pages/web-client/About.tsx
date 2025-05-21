import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography
} from "@mui/material";
import { MuiColor } from "../../styles/enum";
import image from "../../assets/image/serawak.png";

const About = () => (
    <Container sx={{ my: 20 }}>
        <Box
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.05)', // transparansi tanpa mempengaruhi konten
                color: 'white',
                padding: '20px',
                borderRadius: '10px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <Grid container spacing={4} alignItems="center">
                <Grid size={{xs:12, md:6}}>
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        About Me
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                        <strong>MyMUslimTours</strong> is committed to introducing Malaysia as a top destination for Muslim
                        travellers worldwide. We offer complete halal travel packages, blending natural beauty, cultural richness,
                        and prayer-friendly convenience all in one unforgettable journey.
                    </Typography>

                    <Typography variant="h5" color="text.secondary" sx={{ mt: 4 }}>
                        What Makes Us Unique:
                    </Typography>

                    <Box component="ul" sx={{ pl: 3, mt: 1, color: 'text.secondary' }}>
                        <li>100% halal-focused tours</li>
                        <li>Local Muslim tour guides</li>
                        <li>Transparent pricing — no tourist overcharging</li>
                        <li>Customizable packages with Arabic/Malay-speaking support</li>
                        <li>Support for prayer times, halal meals, and Islamic values</li>
                    </Box>
                </Grid>

                <Grid size={{xs:12, md:6}}>
                    <Box
                        sx={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: '10px',
                            width: '100%',
                            height: '50vh',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    </Container>
);

export default About;
