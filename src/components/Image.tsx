import React from "react";
import {Image as ImageType} from "../types/Article";
import {makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        display: "block",
        position: "relative"
    },
    image: {
        width: "100%",
        display: "block",
        position: "relative"
    },
    text: {
        width: "100%",
        position: "absolute",
        bottom: "0px",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2)
    }
}));

interface ImageProps {
    image: ImageType
}

const Image = ({image}: ImageProps) => {
    const classes = useStyles();

    return <a href={image.imageLink} className={classes.root}>
        <img src={image.imageUrl} className={classes.image} alt={image.imageCaption}/>
        <Typography className={classes.text}>
            {image.imageCaption}
        </Typography>
    </a>
};

export default Image