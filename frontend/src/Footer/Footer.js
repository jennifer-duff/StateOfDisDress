import LineBreak from "../LineBreak/LineBreak";
import "./Footer.css";
import emjoi_wave from "../_Assets/emjoi_wave.png";
import emoji_satellite from "../_Assets/emoji_satellite.png";
import emoji_woman from "../_Assets/emoji_woman.png";

function Footer() {
    return (
        <div className="Footer">
            <LineBreak orientation="horizonal" />
            <div className="Footer-NavLinksWrapper">
                <a href="Localhost:3000" className="Footer-NavLink Mono">
                    <img
                        src={emjoi_wave}
                        alt="wave"
                        className="Footer-Emoji Emoji"
                    />
                    say hello
                </a>
                <a href="Localhost:3000" className="Footer-NavLink Mono">
                    <img
                        src={emoji_satellite}
                        alt="satellite"
                        className="Footer-Emoji Emoji"
                    />
                    get social
                </a>
                <a href="Localhost:3000" className="Footer-NavLink Mono">
                    <img
                        src={emoji_woman}
                        alt="woman"
                        className="Footer-Emoji Emoji"
                    />
                    about me
                </a>
            </div>
        </div>
    );
}

export default Footer;
