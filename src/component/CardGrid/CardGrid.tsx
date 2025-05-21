import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import moment from "moment";
import "./CardGrid.css";


export default function CardGrid(props:any) {
    const { auction = {} } = props;

    return (
        <Grid size={{xs:12,sm:6,md:4}} key={`mainGrid-${auction?.auctionData?.rowId}`}>
            <div
                className={`ribbon ${
                    auction?.auctionData?.type === "live" ? "ribbonRed" : "ribbonBlue"
                }`}
            >
                <span>{auction.auctionData?.type.toUpperCase()}RM 700</span>
            </div>
            <Card className="card" elevation={1} square={false}>
                <CardHeader
                    className="content"
                    key={`titleCardHeader-${auction?.auctionData?.rowId}`}
                    title={
                        <Typography
                            variant="h6"
                            align="center"
                            display="block"
                            color="primary"
                            key={`titleTypography-${auction?.auctionData?.rowId}`}
                        >
                            {auction?.auctionData?.title}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            align="center"
                            display="block"
                            variant="overline"
                            color="textSecondary"
                        >
                            {`${moment(auction?.auctionData?.timeStart)
                                .format("MMMM DD, YYYY")
                                .toUpperCase()} - ${moment(auction?.auctionData?.duration)
                                .format("MMMM DD, YYYY")
                                .toUpperCase()}`}
                        </Typography>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <DeleteOutlineOutlinedIcon color="error" />
                        </IconButton>
                    }
                />
                <Grid className="overlay">
                    <CardMedia
                        className="media"
                        title="Auction cover image"
                        image={auction?.signedImageUrl ?? `/no-image.jpg`}
                        // image="https://picsum.photos/536/354"
                    />
                    <Grid size={{sm:10}}
                        container
                        display="flex"
                        direction="column"
                        className="overlayText"
                        sx={{ minHeight: "150" }}
                    >
                        <Grid  container spacing={2} display="flex" direction="column">
                            <Grid display="flex">
                                <Typography variant="h6" gutterBottom align="left">
                                    Publiction Status
                                </Typography>
                                <Typography
                                    gutterBottom
                                    component="p"
                                    align="justify"
                                    variant="body2"
                                    marginLeft="16px"
                                    key={`publicationTypo-${auction?.auctionData?.rowId}`}
                                >
                                    <Chip
                                        key={`publicationChip-${auction?.auctionData?.rowId}`}
                                        label={auction?.auctionData?.publicationStatus.toUpperCase()}
                                        style={{ backgroundColor: "white" }}
                                    />
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="h6" gutterBottom align="left">
                                    Description
                                </Typography>
                                <Typography
                                    gutterBottom
                                    component="p"
                                    align="justify"
                                    variant="body1"
                                >
                                    {auction?.auctionData?.description}
                                </Typography>
                            </Grid>
                            <Grid >
                                <Typography variant="caption">
                                    {auction?.auctionData?.timezone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <CardActions sx={{ justifyContent: "space-evenly" }}>
                    <Button>Edit</Button>
                    <Divider orientation="vertical" flexItem />
                    <Button>Lots</Button>
                    <Divider orientation="vertical" flexItem />
                    <Button>Import Lots</Button>
                    <Divider orientation="vertical" flexItem />
                    <Button>View Reports</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
