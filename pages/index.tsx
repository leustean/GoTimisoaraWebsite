import React from 'react';
import Header from "../src/components/Header";
import Tag from "../src/types/Tag";
import {getAllTags} from "../src/helpers/api-calls";

interface IndexPageProps {
    tagList: Array<Tag>
}

const Index = ({tagList}: IndexPageProps) => {
    return (
        <Header tagList={tagList}/>
    );
};

Index.getInitialProps = async () => {
    return {
        tagList: await getAllTags()
    };
};

export default Index
