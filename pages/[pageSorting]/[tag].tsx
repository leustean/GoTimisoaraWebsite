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
    const tags = await getAllTags();
    let tagId = 0;
    for(const tagObject of tags){
        if(tagObject.tagName == tag){
            tagId = tagObject.tagId
        }
    }
    return {
        tagList: tags,
        articleResponse: await getArticlesAtPage(1, tagId, pageSorting),
        pageSorting: pageSorting,
        activeTag: tag
    };
};

// noinspection JSUnusedGlobalSymbols
export default Page
