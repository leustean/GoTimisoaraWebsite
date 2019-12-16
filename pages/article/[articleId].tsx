import React from "react";
import ArticlePage, {ArticlePageProps} from "../../src/components/ArticlePage";
import {getAllTags, getArticleById} from "../../src/helpers/api-calls";
import {NextRouter} from "next/router";


const Page = (props: ArticlePageProps) => {
    return <ArticlePage {...props}/>
};

Page.getInitialProps = async ({query}: NextRouter) => {
    const {articleId} = query;
    if (Array.isArray(articleId)) {
        throw new Error()
    }

    return {
        tagList: await getAllTags(),
        article: await getArticleById(parseInt(articleId)),
        pageSorting: "cele-mai-noi",
    };
};

// noinspection JSUnusedGlobalSymbols
export default Page
