import React from "react";
import Tag from "../types/Tag";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import Link from "./Link";

// noinspection TypeScriptValidateJSTypes
const useStyles = makeStyles(theme => ({
    logo: {
        height: "100px",
    },
    tag:{
        fontSize: theme.spacing(3),
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        '&:hover':{
            textDecoration: "none",
            color: theme.palette.primary.main
        },
        '&.active':{
            textDecoration: "none",
            color: theme.palette.primary.main
        }
    }
}));

interface HeaderProps {
    tagList: Array<Tag>
}

const Header = ({tagList}:HeaderProps) => {
    const classes = useStyles();

    const renderedTags = tagList.map((tag:Tag)=>{
       return (
           <Grid item={true} key={tag.tagId}>
               <Link className={classes.tag}  href="#">{tag.tagName}</Link>
           </Grid>
       )
    });

    return  <nav>
        <Paper>
        <Grid container={true} alignItems={"center"}>
            <Grid item={true}><img className={classes.logo} src={"/static/logo.png"} alt={'go timisoara'}/></Grid>
            <Grid item={true} xs={true}>
                <Grid container={true} justify={"flex-end"}>{renderedTags}</Grid>
            </Grid>
        </Grid>
        </Paper>
    </nav>
};

export default Header