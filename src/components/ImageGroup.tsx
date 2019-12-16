import React, {useState} from "react";
import {ImageGroup as ImageGroupType, Image as ImageType} from "../types/Article";
import {Grid, makeStyles, Theme} from "@material-ui/core";
import Image from "./Image";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%"
    },
    thumbnailsContainer: {
        width: "100%",
        overflowX: "auto"
    },
    image: {
        width: "100%",
        display: "block"
    },
    thumbnailContainer: {
        width: "150px",
        padding: "5px",
        margin: theme.spacing(2),
        cursor: "pointer",
        backgroundColor: theme.palette.secondary.main,
    },
    active: {
        backgroundColor: theme.palette.primary.main
    }
}));

interface ImageGroupProps {
    imageGroup: ImageGroupType
}

const ImageGroup = ({imageGroup}: ImageGroupProps) => {
    const classes = useStyles();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return <Grid container direction={"column"} className={classes.root}>
        <Grid item className={classes.root}>
            <Image image={imageGroup.images[activeImageIndex]}/>
        </Grid>
        <Grid item className={classes.root}>
            <Grid container justify={"center"}>
                {imageGroup.images.map((image: ImageType, index: number) => {
                    return <Grid key={index}
                                 item
                                 className={clsx(classes.thumbnailContainer, index === activeImageIndex && classes.active)}
                    >
                        <img
                            src={image.imageUrl}
                            className={classes.image}
                            alt={image.imageCaption}
                            onClick={() => {
                                setActiveImageIndex(index)
                            }}
                        />
                    </Grid>
                })}
            </Grid>
        </Grid>
    </Grid>
};

export default ImageGroup