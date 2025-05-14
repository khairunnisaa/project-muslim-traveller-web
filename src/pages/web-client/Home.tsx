import React from 'react';
import {
    Box,
    Container,
    Grid,
} from "@mui/material";
import bg_1 from "../../assets/image/bg_1.jpg";
import background_1 from "../../assets/image/background_1.png";
import "../../styles/listDetinatiom.css";
import Hero from "../../component/Hero";
import TitleAndSubtitle from "../../component/TitleAndSubtitle";
import CountryCard from "../../component/CountryCard";
import FeedbackTourism from "../../component/Home/FeedbackTourism";
import {touristData} from '../../data/malaysia'
import {useNavigate} from "react-router-dom";


const Home:React.FC = () => {
    const navigate = useNavigate();

    return(
        <Box>
            <Hero/>

            <Box pb={10} sx={{ backgroundImage: `url(${background_1})`, backgroundSize: "cover" }}>
                <TitleAndSubtitle title={'Welcome To Malaysia'} subtitle={'Select Your Destination'}/>
                <Container>
                    <Grid container spacing={2}>
                        {touristData.map((city, cityIndex) => (
                            <Grid size={{xs:12, md:4, sm:6}} key={cityIndex}>
                                <CountryCard image={city.image}
                                             country={city.city}
                                             tourCount={city.places.length}
                                             onDestinationClick={() => navigate(`/destination/${city.id}`)}
                                             id={city.id}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>


            {/*<Box mt={10} pb={20}>*/}
            {/*    <TitleAndSubtitle title={'Destination'} subtitle={'Tour Destination'}/>*/}
            {/*    <Container>*/}
            {/*        <Box p={2} textAlign="center">*/}

            {/*        </Box>*/}
            {/*    </Container>*/}
            {/*</Box>*/}


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
        </Box>
    );
};
export default Home;
