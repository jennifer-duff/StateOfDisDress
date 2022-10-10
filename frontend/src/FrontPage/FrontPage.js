import "./FrontPage.css";
import TopStorySnippet from "../TopStorySnippet/TopStorySnippet";
import LineBreak from "../LineBreak/LineBreak";
import ArticlePreviewWithText from "../ArticlePreviewWithText/ArticlePreviewWithText";

function FrontPage() {
    return (
        <div className="FrontPage">
            <TopStorySnippet />
            <LineBreak />
            <ArticlePreviewWithText BoxShadowColor="teal" />
            <LineBreak />
            <ArticlePreviewWithText BoxShadowColor="yellow" />
            <LineBreak />
            <ArticlePreviewWithText BoxShadowColor="pink" />
        </div>
    );
}

export default FrontPage;
