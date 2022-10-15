import "./FrontPage.css";
import TopStorySnippet from "../TopStorySnippet/TopStorySnippet";
import LineBreak from "../LineBreak/LineBreak";
import ArticlePreviewWithText from "../ArticlePreviewWithText/ArticlePreviewWithText";
import React from "react";

function FrontPage() {
    return (
        <div className="FrontPage">
            <TopStorySnippet />
            <div className="FrontPage-ArticleDiv">
                <ArticlePreviewWithText BoxShadowColor="teal" />
                <LineBreak orientation="horizontal" />
                <ArticlePreviewWithText BoxShadowColor="yellow" />
                <LineBreak orientation="horizontal" />
                <ArticlePreviewWithText BoxShadowColor="pink" />
            </div>
        </div>
    );
}

export default FrontPage;
