import React, {Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Tag from "../types/Tag";
import Article from "../types/Article";
import Header from "./Header";
import Sorting from "./Sorting";
import ArticleCard from "./ArticleCard";
import {ArticleResponse, getArticlesAtPage} from "../helpers/api-calls";
import {makeStyles, Theme} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
    articleCard: {
        width: "320px"
    },
    loader: {
        width: "100%",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
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
    const [loadedArticles, setLoadedArticles] = useState(articleResponse.articles);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const loadMore = async () => {
        setIsLoading(true);
        let idOfCurrentTag = 0;
        for (const tag of tagList) {
            if (tag.tagName === activeTag) {
                idOfCurrentTag = tag.tagId
            }
        }
        const articleResponse = await getArticlesAtPage(currentPage + 1, idOfCurrentTag, pageSorting);
        setCurrentPage(currentPage + 1);
        setLoadedArticles([
                ...loadedArticles,
                ...articleResponse.articles
            ]
        );
        setIsLoading(false);
    };

    return (
        <Fragment>
            <Header pageSorting={pageSorting} activeTag={activeTag} tagList={tagList}/>
            <Sorting pageSorting={pageSorting} activeTag={activeTag}/>
            <Grid container justify={"space-around"}>
                {loadedArticles.map((article: Article) =>
                    <Grid item key={article.articleId} className={classes.articleCard}>
                        <ArticleCard article={article}/>
                    </Grid>
                )}
            </Grid>
            {!isLoading && currentPage < articleResponse.numberOfPages &&
            <Grid container justify={"center"} key={"loader"} className={classes.loader}>
                <Grid item>
                    <Button onClick={loadMore} color={"primary"} variant="contained">
                        Incarca mai multe
                    </Button>
                </Grid>
            </Grid>}
            {isLoading && <Grid container justify={"center"} key={"loader"} className={classes.loader}>
                <Grid item>
                    <CircularProgress/>
                </Grid>
            </Grid>}
        </Fragment>
    );
};

export default ArticlesPage