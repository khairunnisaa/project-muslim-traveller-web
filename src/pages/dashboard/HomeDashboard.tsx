import React from 'react';
import {Box, Grid, Skeleton, Typography} from "@mui/material";

const HomeDashboard:React.FC = () => {

    return (
        <Box>
            <Typography variant="h5">Home</Typography>
            <Grid container spacing={1}>
                <Grid size={5} />
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>
                <Grid size={4}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={8}>
                    <Skeleton height={100} />
                </Grid>

                <Grid size={12}>
                    <Skeleton height={150} />
                </Grid>
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>

                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeDashboard;
