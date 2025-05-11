import React from 'react';
import { Box, Container, IconButton, Typography } from "@mui/material";
import background_1 from "../assets/image/background_1.png";
import { MuiColor } from "../styles/enum";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const Footer = () => (
    <Box pb={20} sx={{ backgroundImage: `url(${background_1})`, backgroundSize: "cover", height: '70vh', color: MuiColor.White }}>
        <Container>
            <Box pt={20} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4 }}>

                {/* About Section */}
                <Box maxWidth={250}>
                    <Typography fontWeight={800} variant="h5" color={MuiColor.Black}>About</Typography>
                    <Typography mt={2} variant="body2" fontWeight={300} color="textSecondary">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Box mt={3} sx={{ display: 'flex', gap: 1 }}>
                        {[TwitterIcon, FacebookOutlinedIcon, InstagramIcon].map((Icon, index) => (
                            <IconButton
                                key={index}
                                sx={{
                                    color: MuiColor.White,
                                    backgroundColor: MuiColor.Orange,
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    boxShadow: 3,
                                    '&:hover': {
                                        backgroundColor: MuiColor.White,
                                        color: MuiColor.Orange,
                                    },
                                }}
                            >
                                <Icon fontSize="small" />
                            </IconButton>
                        ))}
                    </Box>
                </Box>

                {/* Information Section */}
                <Box maxWidth={200}>
                    <Typography fontWeight={800} variant="h5" color={MuiColor.Black}>Information</Typography>
                    <Box mt={2}>
                        {[
                            'Online Enquiry',
                            'General Enquiries',
                            'Booking Conditions',
                            'Privacy and Policy',
                            'Refund Policy',
                            'Call Us',
                        ].map((item, idx) => (
                            <Typography key={idx} variant="body2" fontWeight={300} color="textSecondary" mb={0.5}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                {/* Experience Section */}
                <Box maxWidth={200}>
                    <Typography fontWeight={800} variant="h5" color={MuiColor.Black}>Experience</Typography>
                    <Box mt={2}>
                        {[
                            'Adventure',
                            'Hotel and Restaurant',
                            'Beach',
                            'Nature',
                            'Camping',
                            'Party',
                        ].map((item, idx) => (
                            <Typography key={idx} variant="body2" fontWeight={300} color="textSecondary" mb={0.5}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                {/* Contact Section */}
                <Box maxWidth={300}>
                    <Typography fontWeight={800} variant="h5" color={MuiColor.Black}>Have a question</Typography>
                    <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <PinDropOutlinedIcon sx={{ color: MuiColor.Orange }} />
                            <Typography variant="body2" fontWeight={300} color="textSecondary">
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocalPhoneOutlinedIcon sx={{ color: MuiColor.Orange }}/>
                            <Typography variant="body2" fontWeight={300} color="textSecondary">
                                +2 392 3929 210
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocalPostOfficeIcon sx={{ color: MuiColor.Orange }} />
                            <Typography variant="body2" fontWeight={300} color="textSecondary">
                                info@yourdomain.com
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Container>
    </Box>
);

export default Footer;
