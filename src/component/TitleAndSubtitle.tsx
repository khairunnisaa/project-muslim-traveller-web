import React from 'react';
import background_1 from "../assets/image/background_1.png";
import {Box, Container, Grid, Typography} from "@mui/material";
import {MuiColor} from "../styles/enum";
import CountryCard from "./CountryCard";
import services1 from "../assets/image/services-1.jpg";

type TitleAndSubtitleProps = {
    title: string;
    subtitle: string;
};

const TitleAndSubtitle:React.FC<TitleAndSubtitleProps> = ({title,subtitle}) => (
    <Box py={10}>
        <Container>
            <Box textAlign="center">
                <Typography sx={{
                    fontSize: { xs: 25, md: 30 },
                    color: MuiColor.Orange,
                    fontWeight: 700,
                    fontFamily: "Arizonia, cursive",
                }}>
                    {title}
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: 25, md: 50 }, fontWeight: 700 }}>
                    {subtitle}
                </Typography>
            </Box>


        </Container>
    </Box>

);

export default TitleAndSubtitle;
