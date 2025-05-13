import React from 'react';
import {
    Box,
    Container,
    Grid,
} from "@mui/material";
import services1 from "../assets/image/services-1.jpg";
import bg_1 from "../assets/image/bg_1.jpg";
import background_1 from "../assets/image/background_1.png";
import "../styles/listDetinatiom.css";
import TourCard from "../component/TourCard";
import Hero from "../component/Hero";
import About from "./About";
import TitleAndSubtitle from "../component/TitleAndSubtitle";
import CountryCard from "../component/CountryCard";
import FeedbackTourism from "../component/Home/FeedbackTourism";

const touristData =  [
    {
        "city": "Kuala Lumpur",
        "places": [
            {
                "name": "Petronas Twin Towers",
                "description": "Iconic twin skyscrapers and symbol of Malaysia.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Petronas_Panorama_II.jpg"
            },
            {
                "name": "Batu Caves",
                "description": "Sacred Hindu site with a giant Murugan statue and limestone caves.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Batu_Caves_entrance.jpg"
            },
            {
                "name": "Bukit Bintang",
                "description": "Shopping, dining, and entertainment district.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bukit_Bintang_Kuala_Lumpur_Malaysia.jpg"
            },
            {
                "name": "KL Tower (Menara KL)",
                "description": "Observation tower with panoramic city views.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Menara_KL_Tower.jpg"
            }
        ]
    },
    {
        "city": "Langkawi",
        "places": [
            {
                "name": "Pantai Cenang",
                "description": "Popular beach with restaurants and bars.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Pantai_Cenang_Langkawi.jpg"
            },
            {
                "name": "Langkawi Sky Bridge",
                "description": "Curved pedestrian bridge above the mountains.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Langkawi_Sky_Bridge.jpg"
            },
            {
                "name": "Langkawi Cable Car",
                "description": "Scenic ride to the peak of Gunung Mat Cincang.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Langkawi_Cable_Car.jpg"
            },
            {
                "name": "Underwater World",
                "description": "Aquarium with diverse marine life and exhibits.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Underwater_World_Langkawi.jpg"
            }
        ]
    },
    {
        "city": "Cameron Highlands",
        "places": [
            {
                "name": "Boh Tea Plantation",
                "description": "Largest tea plantation in Malaysia.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Boh_Tea_Cameron_Highlands.jpg"
            },
            {
                "name": "Mossy Forest",
                "description": "Unique cloud forest with misty trails.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mossy_Forest_Cameron.jpg"
            },
            {
                "name": "Strawberry Farms",
                "description": "Pick-your-own fresh strawberries experience.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cameron_Strawberry_Farm.jpg"
            }
        ]
    },
    {
        "city": "Genting Highlands",
        "places": [
            {
                "name": "Resorts World Genting",
                "description": "Integrated resort with casino and theme park.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Resorts_World_Genting.jpg"
            },
            {
                "name": "Skytropolis Indoor Theme Park",
                "description": "Indoor amusement park for all ages.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Skytropolis_Genting.jpg"
            },
            {
                "name": "Genting Premium Outlets",
                "description": "Luxury brand shopping outlet.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Genting_Premium_Outlets.jpg"
            }
        ]
    },
    {
        "city": "Penang",
        "places": [
            {
                "name": "George Town",
                "description": "UNESCO heritage city known for street art and food.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/George_Town_Penang.jpg"
            },
            {
                "name": "Penang Hill",
                "description": "Hilltop with panoramic views and temples.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Penang_Hill_Railway.jpg"
            },
            {
                "name": "Gurney Drive",
                "description": "Seaside promenade famous for street food.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Gurney_Drive_Penang.jpg"
            }
        ]
    },
    {
        "city": "Melaka",
        "places": [
            {
                "name": "Jonker Street",
                "description": "Vibrant night market with souvenirs and food.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Jonker_Street_Melaka.jpg"
            },
            {
                "name": "Dutch Square",
                "description": "Historic red buildings from colonial era.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Dutch_Square_Melaka.jpg"
            },
            {
                "name": "Melaka River Cruise",
                "description": "Scenic boat ride through heritage town.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Melaka_River_Cruise.jpg"
            }
        ]
    },
    {
        "city": "Perhentian Islands",
        "places": [
            {
                "name": "Perhentian Besar & Kecil",
                "description": "Famous islands for snorkeling and diving.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Perhentian_Islands.jpg"
            }
        ]
    },
    {
        "city": "Port Dickson",
        "places": [
            {
                "name": "Port Dickson Beach",
                "description": "Family-friendly beach near Kuala Lumpur.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Port_Dickson_Beach.jpg"
            }
        ]
    }
]

const Home = () => (
    <Box>
        <Hero/>
        <Container sx={{marginTop:10}}>
            <About/>
        </Container>


        <Box pb={10} sx={{ backgroundImage: `url(${background_1})`, backgroundSize: "cover" }}>
            <TitleAndSubtitle title={'Welcome To Malaysia'} subtitle={'Select Your Destination'}/>
            <Container>
                <Grid container spacing={2}>
                    {touristData.map((city, cityIndex) => (
                        <Grid size={{xs:12, md:3, sm:3}} key={cityIndex}>
                            <CountryCard image={'https://picsum.photos/536/354'} country={city.city} tourCount={city.places.length} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>


        <Box mt={10} pb={20}>
            <TitleAndSubtitle title={'Destination'} subtitle={'Tour Destination'}/>
            <Container>
                <Box p={2} textAlign="center">
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


        <Box sx={{ backgroundImage: `url(${bg_1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            position: "inherit",
            py:10,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"}}>
            <Container>
                <TitleAndSubtitle title={'Testimonial'} subtitle={'Tourist Feedback'}/>
                <FeedbackTourism/>
            </Container>
        </Box>



        {/*<Container sx={{ py: 4 }}>*/}
        {/*    {touristData.map((city, cityIndex) => (*/}
        {/*        <div key={cityIndex}>*/}
        {/*            <Typography variant="h4" gutterBottom>*/}
        {/*                {city.city}*/}
        {/*            </Typography>*/}
        {/*            <Grid container spacing={4}>*/}
        {/*                {city.places.map((place, index) => (*/}
        {/*                    <Grid size={{xs:12, sm:6, md:4}} key={index}>*/}
        {/*                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>*/}
        {/*                            <CardMedia*/}
        {/*                                component="img"*/}
        {/*                                image={place.image}*/}
        {/*                                alt={place.name}*/}
        {/*                                height="200"*/}
        {/*                            />*/}
        {/*                            <CardContent>*/}
        {/*                                <Typography variant="h6" gutterBottom>*/}
        {/*                                    {place.name}*/}
        {/*                                </Typography>*/}
        {/*                                <Typography variant="body2" color="text.secondary">*/}
        {/*                                    {place.description}*/}
        {/*                                </Typography>*/}
        {/*                            </CardContent>*/}
        {/*                        </Card>*/}
        {/*                    </Grid>*/}
        {/*                ))}*/}
        {/*            </Grid>*/}
        {/*        </div>*/}
        {/*    ))}*/}
        {/*</Container>*/}

    </Box>
);

export default Home;
