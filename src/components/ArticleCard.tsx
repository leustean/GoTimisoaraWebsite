import React from "react";
import Paper from "@material-ui/core/Paper";
import Article, {Image, IMAGE, Paragraph, PARAGRAPH} from "../types/Article";
import {makeStyles, Theme, Typography} from "@material-ui/core";
import Link from "./Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        margin: theme.spacing(1),
        '&:hover': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main
        },
    },
    textContainer: {
        padding: theme.spacing(1)
    },
    text: {
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none",
        },
        '&:focus': {
            textDecoration: "none",
        },
    },
    image: {
        width: "100%",
        display: "block"
    }
}));

interface ArticleCardProps {
    article: Article
}

const getArticleCoverImage = (article: Article): Image | null => {
    for (const contentItem of article.contents) {
        if (contentItem.type == IMAGE) {
            return contentItem;
        }
    }
    return null;
};


const getArticleTextPreview = (article: Article): Paragraph | null => {
    for (const contentItem of article.contents) {
        if (contentItem.type == PARAGRAPH) {
            if (contentItem.paragraphContent.length > 160) {
                return {
                    type: PARAGRAPH,
                    paragraphContent: contentItem.paragraphContent.substring(0, 167) + "..."
                }
            }
            return contentItem;
        }
    }
    return null;
};

const ArticleCard = ({article}: ArticleCardProps) => {
    const classes = useStyles();
    const articleImage = getArticleCoverImage(article);
    const articleParagraph = getArticleTextPreview(article);

    // noinspection HtmlUnknownTarget
    return <Link href="/article/[articleId]" as={`/article/${article.articleId}`} className={classes.text}>
        <Paper className={classes.paper} elevation={5}>
            {articleImage !== null && <img
                src={articleImage.imageUrl}
                alt={articleImage.imageCaption}
                className={classes.image}
            />}
            <Grid container className={classes.textContainer} direction={"column"}>
                <Grid item>
                    <Typography variant={"h5"}>
                        {article.title}
                    </Typography>
                </Grid>
                {articleParagraph !== null && <Grid item>
                    <Typography variant={"body1"}>
                        {articleParagraph.paragraphContent}
                    </Typography>
                </Grid>}
                <Grid item>
                    <Typography variant={"body2"} align={"center"}>
                        {article.updatedAt}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Link>
};

export default ArticleCard