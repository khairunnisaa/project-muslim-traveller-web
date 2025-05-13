import React from 'react';
import {Container, Grid, Stack, Typography} from "@mui/material";
import TitleAndSubtitle from "../component/TitleAndSubtitle";
import {useNavigate, useParams} from "react-router-dom";
import {touristData} from "../data/malaysia";
import TourCard from "../component/TourCard";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {MuiColor} from "../styles/enum";

const Destination:React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const numericId = parseInt(id as string, 10);
    const cityData = touristData.find(city => city.id === numericId);

    return (
        <Container>
            <TitleAndSubtitle title={'Our Destinations'} subtitle={'Detail Destination From ' + cityData?.city} />
            {cityData ? (
                <Grid container={true} spacing={2}>
                    {cityData.places.map((place, index) => (
                        <Grid size={{xs:12, md:4, sm:6}} key={index}>
                            <TourCard
                                image="https://picsum.photos/536/354"
                                days={8}
                                title={place.name}
                                location={place.location}
                                baths={2}
                                beds={3}
                                label={place.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Stack direction="row" alignItems="center">
                    <Typography variant="h5" color="error"> Destination not found</Typography>
                </Stack>
            )}

            <Button sx={{backgroundColor: MuiColor.Orange, color: MuiColor.White, marginY: 3}}
                    onClick={() => {navigate("/")}}>
                <ArrowBackIcon />Back
            </Button>

        </Container>
    )
}

export default Destination;
