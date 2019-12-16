import React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "./Link";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import {Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        position: "relative",
        zIndex: 998
    },
    tag: {
        height: "50px",
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        },
        '&:focus': {
            backgroundColor: theme.palette.primary.main
        },
    },
    active: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
    link: {
        display: "block",
        height: "100%",
        textAlign: "center",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.primary.contrastText,
            textDecoration: "none",
        },
        '&:focus': {
            color: theme.palette.primary.contrastText,
            textDecoration: "none",
        },
    },
    center: {
        height: "100%",
    }
}));

interface SortingProps {
    pageSorting: string,
    activeTag: string | null
}

interface Slug {
    name: string,
    slug: string
}

const sortings = [
    {name: "cele mai noi", slug: "cele-mai-noi"},
    {name: "cele mai citite", slug: "cele-mai-citite"},
    {name: "editor's choise", slug: "editors-choise"}
];

const mapSlugToIndex = (slug: string) => {
    for (const [index, sorting] of sortings.entries()) {
        if (sorting.slug == slug) {
            return index;
        }
    }
    return 0;
};

const createLink = (slug: string, activeTag: string | null) => {
    if (activeTag == null) {
        return `/${slug}`
    }
    return `/${slug}/${activeTag}`
};

const createHref = (activeTag: string | null) => {
    if (activeTag == null) {
        return "/[pageSorting]"
    }
    return "/[pageSorting]/[tag]"
};


const Sorting = ({pageSorting, activeTag}: SortingProps) => {
    const classes = useStyles();
    const pageSlugIndex = mapSlugToIndex(pageSorting);

    return <Paper elevation={5} square={true} className={classes.paper}>
        <Grid container alignItems={"stretch"}>
            {sortings.map((sorting: Slug, index: number) => (
                <Grid
                    xs={4}
                    item
                    key={sorting.slug}
                    className={clsx(classes.tag, pageSlugIndex == index && classes.active)}
                >
                    <Link
                        href={createHref(activeTag)}
                        as={createLink(sorting.slug, activeTag)}
                        className={classes.link}
                    >
                        <Grid
                            className={classes.center}
                            container
                            justify={"center"}
                            direction={"column"}
                        >
                            <Grid item>
                                {sorting.name}
                            </Grid>
                        </Grid>
                    </Link>

                </Grid>
            ))}
        </Grid>
    </Paper>
};

export default Sorting
