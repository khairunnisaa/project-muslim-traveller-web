import React from 'react';
import {
    Box,
    Container,
    Grid, Typography,
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
import CardGrid from "../../component/CardGrid/CardGrid";
import {MuiColor} from "../../styles/enum";
import image1 from "../../assets/image/selangor/1920px-Bukit_Bintang.jpeg";
import image2 from "../../assets/image/selangor/Bukit_Bintang_Junction_in_2023.jpg";
import image3 from "../../assets/image/selangor/TengkatTongShin.jpeg";
import image4 from "../../assets/image/selangor/Bukit_bintang_junction_view_1.jpg";
import image5 from "../../assets/image/selangor/Starhill_Gallery_in_2021.jpg";
import Slider from "react-slick";
import {destinationData} from '../../data/malaysia'

const images = [image1, image2, image3, image4, image5];
function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", borderRadius: 20, }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", borderRadius: 20, }}
            onClick={onClick}
        />
    );
}
const Home:React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    };
    const navigate = useNavigate();

    return(
        <Box>
            <Hero/>


            <Box pb={10} sx={{ backgroundImage: `url(${background_1})`, backgroundSize: "cover" }}>
                <TitleAndSubtitle title={'Discover Kuala Lumpur with our day City Tour!'}
                                  subtitle={'Choose from 5 exciting'}/>
                <Container>
                    {destinationData.map((destination, cityIndex) => (
                    <Box key={cityIndex}
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.05)', // transparansi tanpa mempengaruhi konten
                            color: 'white',
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                            position: 'relative',
                            zIndex: 1,
                            marginBottom: 5,
                        }}
                    >
                        <Grid container spacing={4} alignItems="center">
                            <Grid size={{xs:12, md:6}} p={5}>
                                <Typography variant="h5" color={MuiColor.Orange} sx={{ mt: 4 }}>
                                    {destination.name}
                                </Typography>
                                <Box component="ul" sx={{ pl: 3, mt: 1, color: 'text.secondary' }}>
                                    {destination.location.map((location, index) => (
                                        <li key={index}>{location}</li>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid size={{xs:12, md:6}} className="slider-container">
                                <Slider {...settings}>
                                    {destination.image.map((img, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                backgroundImage: `url(${img})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: '10px',
                                                width: '100%',
                                                height: '50vh',
                                            }}
                                        />
                                    ))}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Box>
                    ))}














                    <Grid container spacing={2} mt={4}>
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



            <Box mt={10} pb={20}>
                <TitleAndSubtitle title={'Destination'} subtitle={'Tour Destination'}/>
                <Container>
                    <CardGrid container spacing={2}/>
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
        </Box>
    );
};
export default Home;
