import React from 'react';
import {Avatar, Box, Grid, Popover, Typography} from "@mui/material";


type SubmenuPopoverProps = {
    anchorEl: HTMLElement | null;
    onClose: () => void;
    open: boolean;
    items: string[];
};

const SubmenuPopover:React.FC<SubmenuPopoverProps> = ({anchorEl, onClose, open, items}) => {

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{
                sx: {
                    backgroundColor: 'rgba(37,36,36,0.4)', // semi-transparent white
                    backdropFilter: 'blur(10px)', // blur effect
                    boxShadow: 3,
                    borderRadius: 2,
                }
            }}
        >
            <Box
                sx={{p:2, maxWidth: '100%'}}>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{xs:4, sm:3,}} key={index}>
                            <Box textAlign="center">
                                <Avatar
                                    src={`https://source.unsplash.com/80x80/?${encodeURIComponent(item)}`}
                                    sx={{ mx: 'auto', mb: 1 }}
                                />
                                <Typography variant="body2">Things to do in</Typography>
                                <Typography variant="subtitle2" fontWeight="bold">
                                    {item}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Popover>
    )
}

export default SubmenuPopover;
