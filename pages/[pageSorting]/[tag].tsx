import ArticlesPage, {ArticlesPageProps} from "../../src/components/ArticlesPage";
import {getAllTags, getArticlesAtPage} from "../../src/helpers/api-calls";
import React from "react";
import {NextRouter} from "next/router";

const Page = (props: ArticlesPageProps) => {
    return <ArticlesPage {...props}/>
};

Page.getInitialProps = async ({query}: NextRouter) => {
    const {pageSorting, tag} = query;
    if (Array.isArray(tag) || (Array.isArray(pageSorting))) {
        throw new Error()
    }

    return {
        tagList: await getAllTags(),
        articleResponse: await getArticlesAtPage(0, tag),
        pageSorting: pageSorting,
        activeTag: tag
    };
};

// noinspection JSUnusedGlobalSymbols
export default Page
