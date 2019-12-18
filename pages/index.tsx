import ArticlesPage, {ArticlesPageProps} from "../src/components/ArticlesPage";
import {getAllTags, getArticlesAtPage} from "../src/helpers/api-calls";
import React from "react";

const Page = (props: ArticlesPageProps) => {
    return <ArticlesPage {...props}/>
};

Page.getInitialProps = async () => {
    return {
        tagList: await getAllTags(),
        articleResponse: await getArticlesAtPage(1),
        pageSorting: "cele-mai-noi",
        activeTag: null
    };
};

// noinspection JSUnusedGlobalSymbols
export default Page
