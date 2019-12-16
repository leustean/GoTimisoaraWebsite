import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Tag from "../types/Tag";
import Article from "../types/Article";
import Header from "./Header";
import Sorting from "./Sorting";
import ArticleCard from "./ArticleCard";
import {ArticleResponse} from "../helpers/api-calls";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(({
    articleCard: {
        width: "320px"
    },
}));

export interface ArticlesPageProps {
    tagList: Array<Tag>
    articleResponse: ArticleResponse
    pageSorting: string
    activeTag: string | null
}

const ArticlesPage = ({tagList, articleResponse, pageSorting, activeTag}: ArticlesPageProps) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Header pageSorting={pageSorting} activeTag={activeTag} tagList={tagList}/>
            <Sorting pageSorting={pageSorting} activeTag={activeTag}/>
            <Grid container>
                {articleResponse.articles.map((article: Article) =>
                    <Grid item key={article.articleId} className={classes.articleCard}>
                        <ArticleCard article={article}/>
                    </Grid>
                )}
            </Grid>
        </Fragment>
    );
};

export default ArticlesPage