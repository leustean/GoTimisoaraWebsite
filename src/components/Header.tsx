import React from "react";
import Tag from "../types/Tag";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles, Theme} from "@material-ui/core";
import Link from "./Link";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        position: "relative",
        zIndex: 999
    },
    logo: {
        height: "100px",
    },
    tag: {
        fontSize: theme.spacing(3),
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        '&:hover': {
            textDecoration: "none",
            color: theme.palette.primary.main
        },
    },
    tags: {
        [theme.breakpoints.down('md')]: {
            justifyContent: "center",
            paddingBottom: theme.spacing(1)
        },
    },
    active: {
        textDecoration: "none",
        color: theme.palette.primary.main
    }
}));


interface HeaderProps {
    tagList: Array<Tag>,
    activeTag: string | null,
    pageSorting: string
}

const Header = ({tagList, activeTag, pageSorting}: HeaderProps) => {
    const classes = useStyles();

    const renderedTags = tagList.map((tag: Tag) => {
        return (
            <Grid item key={tag.tagId}>
                <Link
                    className={clsx(classes.tag, tag.tagName == activeTag && classes.active)}
                    href={"/[pageSorting]/[tag]"}
                    as={`/${pageSorting}/${tag.tagName}`}
                >
                    {tag.tagName}
                </Link>
            </Grid>
        )
    });

    return <Paper elevation={5} square className={classes.paper}>
        <Grid container alignItems={"center"} justify={"center"}>
            <Grid item>
                <Link href={"/"}>
                    <img className={classes.logo} src={"/static/logo.png"} alt={'go timisoara'}/>
                </Link>
            </Grid>
            <Grid item xs={12} md>
                <Grid container justify={"flex-end"} className={classes.tags}>{renderedTags}</Grid>
            </Grid>
        </Grid>
    </Paper>
};

export default Header