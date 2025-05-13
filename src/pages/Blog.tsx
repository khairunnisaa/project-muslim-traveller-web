import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {MuiColor} from "../styles/enum";
import TitleAndSubtitle from "../component/TitleAndSubtitle";

const blog = [
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Roger Scott',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/150?img=32',
    },
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Roger Scott',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/150?img=47',
    },
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Roger Scott',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/150?img=11',
    },
];

const Blog = () => (
    <Container sx={{ marginTop: {xs:20, sm:10, md:10} }}>
        <TitleAndSubtitle title={'Our Blog'} subtitle={'Post Your Blog'}/>
        <Box sx={{ backgroundImage: `url('/your/background/image.jpg')`, py: 10, px: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {blog.map((item, idx) => (
                    <Grid size={{xs:12, md:4}} key={idx}>
                        {/*<TourCard*/}
                        {/*    image="https://picsum.photos/536/354"*/}
                        {/*    price="550"*/}
                        {/*    days={8}*/}
                        {/*    title="Banaue Rice Terraces"*/}
                        {/*    location="Banaue, Ifugao, Philippines"*/}
                        {/*    baths={2}*/}
                        {/*    beds={3}*/}
                        {/*    label="Near Mountain"*/}
                        {/*/>*/}
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Container>
);

export default Blog;
