import React from "react";
import {Paragraph as ParagraphType} from "../types/Article";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
    root: {
        width: "100%"
    },
}));

interface ParagraphProps {
    paragraph: ParagraphType
}

const Paragraph = ({paragraph}: ParagraphProps) => {
    const classes = useStyles();

    return <Typography className={classes.root}>
        {paragraph.paragraphContent}
    </Typography>
};

export default Paragraph