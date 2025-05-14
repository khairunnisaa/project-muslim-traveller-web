import React from 'react';
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import services1 from "../../assets/image/services-1.jpg";
import services2 from "../../assets/image/services-2.jpg";
import services3 from "../../assets/image/services-3.jpg";
import services4 from "../../assets/image/services-4.jpg";
import {MuiColor} from "../../styles/enum";

const About = () => (
    <Box my={20}>
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
    </Box>
);

export default About;
