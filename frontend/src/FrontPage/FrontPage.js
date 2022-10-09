import "./FrontPage.css";
import TopStorySnippet from "../TopStorySnippet/TopStorySnippet";
import LineBreak from "../LineBreak/LineBreak";
import ArticlePreviewText from "../ArticlePreviewText/ArticlePreviewText";

function FrontPage() {
    return (
        <div className="FrontPage">
            <TopStorySnippet />
            <LineBreak />
            <ArticlePreviewText BoxShadowColor="teal" />
            <LineBreak />
            <ArticlePreviewText BoxShadowColor="yellow" />
            <LineBreak />
            <ArticlePreviewText BoxShadowColor="pink" />
        </div>
    );
}

export default FrontPage;
