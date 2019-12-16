import React, {Fragment} from 'react';
import Article, {ArticleContent, IMAGE, IMAGE_GROUP, PARAGRAPH, TITLE} from "../types/Article";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import Tag from "../types/Tag";
import Title from "./Title";
import Paragraph from "./Paragraph";
import {makeStyles, Paper, Theme} from "@material-ui/core";
import Image from "./Image";
import ImageGroup from "./ImageGroup";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";


const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        margin: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    contentItem: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    titleItem: {
        width: "100%"
    }
}));

export interface ArticlePageProps {
    article: Article,
    tagList: Array<Tag>,
    pageSorting: string
}

const renderContent = (content: ArticleContent) => {
    if (content.type == TITLE) {
        return <Title title={content}/>
    }
    if (content.type == PARAGRAPH) {
        return <Paragraph paragraph={content}/>
    }
    if (content.type == IMAGE) {
        return <Image image={content}/>
    }
    if (content.type == IMAGE_GROUP) {
        return <ImageGroup imageGroup={content}/>
    }
};

const ArticlePage = ({article, tagList, pageSorting}: ArticlePageProps) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Header pageSorting={pageSorting} tagList={tagList} activeTag={article.tag ? article.tag.tagName : null}/>
            <Paper className={classes.paper} elevation={5}>
                <Grid container={true}>
                    <Grid item className={clsx(classes.contentItem, classes.titleItem)}>
                        <Typography variant={"h3"} display={"block"}>
                            {article.title}
                        </Typography>
                        <Typography variant={"subtitle1"} display={"block"}>
                            {article.author.fullName} - {article.updatedAt}
                        </Typography>
                    </Grid>
                    {article.contents.map((content: ArticleContent, index: number) =>
                        <Grid item key={index} className={classes.contentItem}>
                            {renderContent(content)}
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </Fragment>
    );
};

export default ArticlePage