import "./TopStorySnippet.css";
import emojiEyes from "../_Assets/emoji_eyes.png";
import blazerFit from "../_Assets/blazerFit.png";
import ImageWrapper from "../Image/ImageWrapper";

function TopStorySnippet() {
    let addlStyles = {
        overflow: "hidden",
        "background-position": " right 50% bottom 80%",
    };

    return (
        <div className="TopStorySnippet">
            <div className="TopStorySnippet-SplashImgWrapper">
                <ImageWrapper
                    source={"url(" + blazerFit + ")"}
                    shadowColor="blue"
                    addlStyles={addlStyles}
                />
            </div>
            <h1 className="TopStorySnippet-Header">Headline</h1>
            <p className="TopStorySnippet-Tags Mono">tag anothertag thirdtag</p>
            <p className="TopStorySnippet-PreviewText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus volutpat sed nisi nec semper. Nulla auctor ipsum ante,
                vel pharetra ligula dictum id. Donec blandit feugiat quam eu
                ultricies. Pellentesque leo urna, viverra sed tortor vitae,
                blandit finibus nibh. In metus risus, congue vitae vestibulum
                ut, ultricies et nisl. Maecenas fringilla a erat in laoreet. Ut
                eget vestibulum ligula, a pulvinar nibh. Sed eu turpis quis
                neque dapibus convallis egestas ac ante. Donec elementum tellus
                sed orci suscipit ornare. Nullam in rhoncus lorem. Sed pretium
                faucibus fringilla. Phasellus egestas urna tristique commodo
                facilisis. Donec vitae volutpat odio. Proin vulputate nisl in
                dignissim feugiat. Donec maximus, libero in feugiat consectetur,
                turpis magna ullamcorper est, et luctus neque orci quis enim.
                Quisque convallis magna nisl, at fermentum quam condimentum at.
                Morbi pretium congue felis, et facilisis felis hendrerit sed.
                Phasellus quis erat vitae lacus vestibulum commodo vel a augue.
                Sed vel odio et felis condimentum elementum vitae nec purus.
                Vestibulum sed egestas risus, fringilla mollis sapien.
                Pellentesque pulvinar condimentum laoreet. Cras pulvinar purus
                eu leo elementum scelerisque. Maecenas tincidunt dui ac odio
                elementum, vitae finibus nunc pulvinar. In vel vulputate sem.
                Proin fermentum odio ac nisl rhoncus, nec bibendum nisi ornare.
                Aenean a magna porta, lobortis mi ac, volutpat mi. Phasellus
                scelerisque, ipsum ornare vestibulum cursus, tortor turpis
                condimentum eros, vel interdum nisi massa ut erat. Fusce nec
                nunc posuere, tincidunt purus sed, consectetur elit. Cras
                pellentesque mauris et turpis pretium eleifend eget non magna.
                Phasellus suscipit consectetur lorem, in lacinia libero placerat
                vel. Nam efficitur turpis diam, at volutpat ipsum dapibus ut.
                Phasellus pharetra egestas ornare. Vivamus id elit eros.
                Vestibulum porttitor malesuada felis, et blandit lorem iaculis
                id. Fusce ultricies rhoncus mattis. Aenean euismod ultricies
                ornare. Ut id auctor sem. Fusce vitae faucibus leo.
            </p>
            <a
                href="localhost:3000"
                className="TopStorySnippet-ReadMoreLink Mono"
            >
                <img
                    src={emojiEyes}
                    alt="continue reading"
                    className="TopStorySnippet-Emoji Emoji"
                />
                continue reading ➞
            </a>
        </div>
    );
}

export default TopStorySnippet;
