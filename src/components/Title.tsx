import React from "react";
import {Title as TitleType} from "../types/Article";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
    root: {
        width: "100%"
    },
}));

interface TitleProps {
    title: TitleType
}

const Title = ({title}: TitleProps) => {
    const classes = useStyles();

    return <Typography variant={title.titleVariant} className={classes.root}>
        {title.titleText}
    </Typography>
};

export default Title