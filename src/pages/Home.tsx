import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid, IconButton,
    Typography
} from "@mui/material";
import {MuiColor} from "../styles/enum";
import services1 from "../assets/image/services-1.jpg";
import services2 from "../assets/image/services-2.jpg";
import services3 from "../assets/image/services-3.jpg";
import services4 from "../assets/image/services-4.jpg";
import background_1 from "../assets/image/background_1.png";
import Chip from "@mui/material/Chip";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "../styles/listDetinatiom.css"
import CardGrid from "../component/CardGrid/CardGrid";
import data from "../data/dummy.json"

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
                <Button size={"large"} variant={"contained"} sx={{bgcolor: MuiColor.Orange, marginTop: 5}}>Search Destination</Button>
            </Grid>
        </Grid>


        <Box mt={10} pb={20} sx={{backgroundImage:`url(${background_1})`, backgroundSize: "cover", }}>
            <Box p={2} sx={{flexDirection: 'row', textAlign: 'center' }}>
                <Typography sx={{
                    fontSize: {xs: 25, md: 30},
                    color: MuiColor.Orange,
                    fontWeight: 700,
                    fontFamily: "Arizonia, cursive",
                }}>
                    Pacific Provide Places
                </Typography>

                <Typography variant="h1" component="p" sx={{
                    fontSize: {xs: 25, md: 50},
                    lineHeight: 1.2,
                    fontWeight: 700,
                }}>
                    Select Your Destination
                </Typography>

            </Box>
            <Grid marginTop={5} container={true} spacing={2} >
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card className="card" sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                               Indonesia
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{xs:12, sm: 4, md: 3}}>
                    <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={services1}
                                alt="green iguana"
                                sx={{maxHeight: 400, maxWidth: 400}}
                            />
                            <CardActions sx={{ color: MuiColor.Orange, fontSize: "16px" }}>
                                <Typography variant="body2">
                                    Canada
                                </Typography>
                                <Divider orientation="vertical" flexItem></Divider>
                                <Typography variant="subtitle2">
                                    7 Tour
                                </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>


        <Box mt={10} pb={20}>
            <Box p={2} sx={{flexDirection: 'row', textAlign: 'center' }}>
                <Typography sx={{
                    fontSize: {xs: 25, md: 30},
                    color: MuiColor.Orange,
                    fontWeight: 700,
                    fontFamily: "Arizonia, cursive",
                }}>
                    Destination
                </Typography>

                <Typography variant="h1" component="p" sx={{
                    fontSize: {xs: 25, md: 50},
                    lineHeight: 1.2,
                    fontWeight: 700,
                }}>
                    Tour Destination
                </Typography>
            </Box>

            <Grid container>
                <Grid size={{xs:10}} display="flex">
                    <Card sx={{ display: "flex" }} className="card">
                        <div className="cardImage">
                            <CardMedia
                                component="img"
                                alt="auction image"
                                image="https://picsum.photos/536/354"
                            />
                        </div>
                        <div className="details">
                            <div className="content">
                                <CardContent>
                                    <Typography variant="h5" color="primary" id="auctionTitle">
                                        Test auction
                                    </Typography>
                                    <Typography variant="body2" component="p" gutterBottom>
                                        DECEMBER 22, 2022 - DECEMBER 22, 2022 | Published
                                    </Typography>
                                    <Typography variant="body2" component="p" color="textSecondary">
                                        Ok !
                                    </Typography>
                                </CardContent>
                            </div>
                            <div className="controls">
                                <Button>Edit</Button>
                                <Divider orientation="vertical" flexItem />
                                <Button>Lots</Button>
                                <Divider orientation="vertical" flexItem />
                                <Button>import lots</Button>
                                <Divider orientation="vertical" flexItem />
                                <Button>view reports</Button>
                            </div>
                        </div>
                        <div className="delete">
                            <Chip label="LIVE" color="error" />
                            <IconButton aria-label="settings">
                                <DeleteOutlineOutlinedIcon color="error" />
                            </IconButton>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                display="flex"
                style={{ padding: "16px" }}
            >
                <Grid size={{xs:12}}>
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        display="flex"
                        style={{ padding: "16px" }}
                    >
                        {data?.auctionDetails?.map((auction) => (
                            <CardGrid auction={auction} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Box>


);

export default Home;
