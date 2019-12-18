import ArticlesPage, {ArticlesPageProps} from "../../src/components/ArticlesPage";
import {getAllTags, getArticlesAtPage} from "../../src/helpers/api-calls";
import React from "react";
import {NextRouter} from "next/router";

const Page = (props: ArticlesPageProps) => {
    return <ArticlesPage {...props}/>
};

Page.getInitialProps = async ({query}: NextRouter) => {
    const {pageSorting} = query;
    if ((Array.isArray(pageSorting))) {
        throw new Error()
    }

    return {
        tagList: await getAllTags(),
        articleResponse: await getArticlesAtPage(1, 0, pageSorting),
        pageSorting: pageSorting,
        activeTag: null
    };
};

// noinspection JSUnusedGlobalSymbols
export default Page
