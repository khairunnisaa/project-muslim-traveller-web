import React from 'react';
import background_1 from "../../assets/image/background_1.png";
import {Box, Container, Grid, Typography} from "@mui/material";
import {MuiColor} from "../../styles/enum";
import CountryCard from "../CountryCard";
import services1 from "../../assets/image/services-1.jpg";

const DestinationCard = () => (
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
                    {/*<CountryCard onDestinationClick={1} image={services1} country="Philippines" tourCount={8} />*/}
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default DestinationCard;
