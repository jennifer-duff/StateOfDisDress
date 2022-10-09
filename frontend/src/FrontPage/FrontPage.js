import "./FrontPage.css";
import coatimg from "../_Assets/coat.jpg";
// import outfit from "../_Assets/outfit.jpg";
import emojiEyes from "../_Assets/emoji_eyes.png";

function FrontPage() {
    return (
        <div className="FrontPage">
            <div className="FrontPage-SplashImgWrapper">
                {/* <img src={coatimg} alt="coat" className="FrontPage-SplashImg" /> */}
            </div>
            <h1 className="FrontPage-Header">Headline</h1>
            <p className="FrontPage-PreviewText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Malesuada fames ac turpis egestas sed. Fermentum iaculis eu non
                diam phasellus vestibulum lorem sed risus. Neque gravida in
                fermentum et sollicitudin. Senectus et netus et malesuada fames.
                Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper ...
                <a
                    href="localhost:3000"
                    className="FrontPage-ReadMoreLink Mono"
                >
                    continue reading
                    <img
                        src={emojiEyes}
                        alt="continue reading"
                        className="FrontPage-Emoji Emoji"
                    />
                </a>
            </p>
        </div>
    );
}

export default FrontPage;
