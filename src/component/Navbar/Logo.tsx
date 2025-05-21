import React from 'react';
import {Box, Typography} from "@mui/material";
import {MuiColor} from "../../styles/enum";

type LogoProps = {
    title: string;
    subtitle: string;
};

const Logo:React.FC<LogoProps> = ({title, subtitle}) => {
    return (
    <Box sx={{ flexDirection: 'column-reverse', marginTop:{xs:2} }}>
        <Typography variant="h1" sx={{
            fontSize: {xs: 14, md: 19},
            color: MuiColor.White,
            lineHeight: 0.1,
            fontWeight: 900,
        }}>
            {title}
        </Typography>
        <Typography variant="h1" sx={{
            fontSize: {xs: 24, md: 33},
            marginLeft: 3,
            color: MuiColor.Orange,
            lineHeight: 1,
            fontWeight: 700,
            fontFamily: "Arizonia, cursive",
        }}>
            {subtitle}
        </Typography>
    </Box>
    )
}


export default Logo;
