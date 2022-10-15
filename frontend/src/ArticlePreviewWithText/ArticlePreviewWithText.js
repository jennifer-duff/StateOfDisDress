import React, { Component } from "react";
import "./ArticlePreviewWithText.css";
import { computeBoxShadowStyle } from "../Utilities";

class ArticlePreviewWithText extends Component {
    render() {
        let boxShadowStyle = {
            boxShadow: computeBoxShadowStyle(this.props.BoxShadowColor),
        };

        return (
            <a href="localhost:3000" className="ArticlePreviewWithText">
                <div
                    className="ArticlePreviewWithText-ImgWrapper"
                    style={boxShadowStyle}
                ></div>
                <div className="ArticlePreviewWithText-TextWrapper">
                    <h2>Headline</h2>
                    <p className="ArticlePreviewWithText-Tags Mono">
                        tag anothertag thirdtag
                    </p>
                    <p className="ArticlePreviewWithText-Text">
                        Quisque convallis magna nisl, at fermentum quam
                        condimentum at. Morbi pretium congue felis, et facilisis
                        felis hendrerit sed. Phasellus quis erat vitae lacus
                        vestibulum commodo vel a augue. Sed vel odio et felis
                        condimentum elementum vitae nec purus. Vestibulum sed
                        egestas risus, fringilla mollis sapien. Pellentesque
                        pulvinar condimentum laoreet. Cras pulvinar purus eu leo
                        elementum scelerisque. Maecenas tincidunt dui ac odio
                        elementum, vitae finibus nunc pulvinar. In vel vulputate
                        sem. Proin fermentum odio ac nisl rhoncus, nec bibendum
                        nisi ornare.
                    </p>
                </div>
            </a>
        );
    }
}

export default ArticlePreviewWithText;
