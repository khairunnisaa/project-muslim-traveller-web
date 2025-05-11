import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography
} from "@mui/material";
import { MuiColor } from "../styles/enum";
import services1 from "../assets/image/services-1.jpg";
import services2 from "../assets/image/services-2.jpg";
import services3 from "../assets/image/services-3.jpg";
import services4 from "../assets/image/services-4.jpg";
import background_1 from "../assets/image/background_1.png";
import "../styles/listDetinatiom.css";
import CardGrid from "../component/CardGrid/CardGrid";
import data from "../data/dummy.json";
import TestimonialCard from "../component/TestimonialCard";
import TourCard from "../component/TourCard";
import CountryCard from "../component/CountryCard";

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

const Home = () => (
    <Box mt={9}>
        <Container>
            <Grid container spacing={2}>
                <Grid size={{xs:12, md:7}} container>
                    {[services1, services2, services3, services4].map((img, index) => (
                        <Grid size={{xs:12, md:6}} key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={img}
                                        alt={`service-${index}`}
                                    />
                                    <CardContent sx={{ height: 140 }}>
                                        <Typography gutterBottom variant="h5">
                                            {['Activities', 'Travel Arrangements', 'Private Guide', 'Location Manager'][index]}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            A small river named Duden flows by their place and supplies it with the necessary
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Grid size={{xs:12, md:5}}>
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        Welcome to Muslim Traveller
                    </Typography>

                    <Typography variant="h1" sx={{
                        fontSize: { xs: 30, md: 50 },
                        lineHeight: 1.2,
                        fontWeight: 700,
                    }}>
                        It's time to start your adventure
                    </Typography>

                    <Typography variant="body1" sx={{ fontSize: 16 }}>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </Typography>

                    <Button size="large" variant="contained" sx={{ bgcolor: MuiColor.Orange, mt: 5 }}>
                        Search Destination
                    </Button>
                </Grid>
            </Grid>
        </Container>

        <Box mt={10} pb={20} sx={{ backgroundImage: `url(${background_1})`, backgroundSize: "cover" }}>
            <Container>
                <Box pt={10} textAlign="center">
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        Pacific Provide Places
                    </Typography>
                    <Typography variant="h1" sx={{ fontSize: { xs: 25, md: 50 }, fontWeight: 700 }}>
                        Select Your Destination
                    </Typography>
                </Box>

                <Grid mt={5} container spacing={2}>
                    <Grid size={{xs:12, md:4, sm:3}}>
                        <CountryCard image={services1} country="Philippines" tourCount={8} />
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <Box mt={10} pb={20}>
            <Container>
                <Box p={2} textAlign="center">
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        Destination
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: { xs: 25, md: 50 }, fontWeight: 700 }}>
                        Tour Destination
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid size={{xs:12, md:4, sm:6}}>
                            <TourCard
                                image="https://picsum.photos/536/354"
                                price="550"
                                days={8}
                                title="Banaue Rice Terraces"
                                location="Banaue, Ifugao, Philippines"
                                baths={2}
                                beds={3}
                                label="Near Mountain"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

        <Container>
            <Box mt={5} pb={20}>
                <Box p={2} textAlign="center">
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        Testimonial
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: { xs: 25, md: 50 }, fontWeight: 700 }}>
                        Tourist Feedback
                    </Typography>
                </Box>

                <Box sx={{ backgroundImage: `url('/your/background/image.jpg')`, py: 10, px: 4 }}>
                    <Grid container spacing={4} justifyContent="center">
                        {testimonials.map((item, idx) => (
                            <Grid size={{xs:12, md:4}} key={idx}>
                                <TestimonialCard {...item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>



            </Box>
        </Container>


        <Container>
            <Box mt={5}>
                <Box p={2} textAlign="center">
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        Our Blog
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: { xs: 25, md: 50 }, fontWeight: 700 }}>
                        Recent Post
                    </Typography>
                </Box>


                <Box sx={{ backgroundImage: `url('/your/background/image.jpg')`, py: 10, px: 4 }}>
                    <Grid container spacing={4} justifyContent="center">
                        {testimonials.map((item, idx) => (
                            <Grid size={{xs:12, md:4}} key={idx}>
                                <TourCard
                                    image="https://picsum.photos/536/354"
                                    price="550"
                                    days={8}
                                    title="Banaue Rice Terraces"
                                    location="Banaue, Ifugao, Philippines"
                                    baths={2}
                                    beds={3}
                                    label="Near Mountain"
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box>
        </Container>

        <Container>
            <Box my={5} sx={{ backgroundImage: `url(${services1})`, backgroundSize: "cover" }}>
                <Box p={2} textAlign="center">
                    <Typography sx={{
                        fontSize: { xs: 25, md: 30 },
                        color: MuiColor.Orange,
                        fontWeight: 700,
                        fontFamily: "Arizonia, cursive",
                    }}>
                        We Are Pacific A Muslim Traveller
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 100 }}>
                        We can manage your dream building A small river named Duden flows by their place
                    </Typography>

                    <Button size="large" variant="contained" sx={{marginY: 5, bgcolor: MuiColor.Orange}}>Ask For A Qoute</Button>
                </Box>
            </Box>
        </Container>

    </Box>
);

export default Home;
