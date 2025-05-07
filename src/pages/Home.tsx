import React from 'react';
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {MuiColor} from "../styles/enum";
import services1 from "../assets/image/services-1.jpg";
import services2 from "../assets/image/services-2.jpg";
import services3 from "../assets/image/services-3.jpg";
import services4 from "../assets/image/services-4.jpg";
const Home = () => (

    <Box mt={9}>
        <Grid container spacing={2} columns={16}>
            <Grid container  size={{xs:16, sm: 12, md: 8}}>
                <Grid size={{xs:16, sm: 8}}><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={services1}
                            alt="green iguana"
                        />
                        <CardContent sx={{ height: 140 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Activities
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card></Grid>
                <Grid size={{xs:16, sm: 8}}><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={services2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Travel Arrangements
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                A small river named Duden flows by their place and supplies it with the necessary
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card></Grid>
                <Grid size={{xs:16, sm: 8}}><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={services3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Private Guide
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                A small river named Duden flows by their place and supplies it with the necessary
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card></Grid>
                <Grid size={{xs:16, sm: 8}}><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={services4}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Location Manager
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                A small river named Duden flows by their place and supplies it with the necessary
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card></Grid>

            </Grid>
            <Grid size={{xs:16, sm: 8}}>
                <Typography sx={{
                    fontSize: {xs: 25, md: 30},
                    color: MuiColor.Orange,
                    fontWeight: 700,
                    fontFamily: "Arizonia, cursive",
                }}>
                    Welcome to Muslim Traveller
                </Typography>

                <Typography variant="h1" component="p" sx={{
                    fontSize: {xs: 30, md: 50},
                    lineHeight: 1.2,
                    fontWeight: 700,
                }}>
                    It's time to start your adventure
                </Typography>
                <Typography variant="caption" component="p" sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                }}>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                    a large language ocean.
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </Typography>


            </Grid>
        </Grid>
    </Box>


);

export default Home;
