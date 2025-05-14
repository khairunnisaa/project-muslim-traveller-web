import React from 'react';
import { Container, Grid, TextField, Typography, Button, Box, Paper } from '@mui/material';
import TitleAndSubtitle from "../../component/TitleAndSubtitle";
import {MuiColor} from "../../styles/enum";

const Contact = () => {
    return (
        <Container sx={{ my: 5 }}>
            <TitleAndSubtitle title={'Contact Us'} subtitle={'Please contact us at'} />
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Grid container spacing={4}>
                {/* Form Section */}
                <Grid size={{xs:12, md:6}}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Send us a message
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                type="email"
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <Button variant="contained"  sx={{ mt: 2, bgcolor: MuiColor.Orange }}>
                                Send
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* Contact Info */}
                <Grid size={{xs:12, md:6}}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            📍 Address: Jalan Bukit Bintang, Kuala Lumpur, Malaysia
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            📞 Phone: +60 12-345 6789
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            ✉️ Email: info@malaysiatransport.com
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            🕒 Hours: Mon - Fri, 9am - 6pm
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
