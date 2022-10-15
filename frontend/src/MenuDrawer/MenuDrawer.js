import "./MenuDrawer.css";
import emjoi_wave from "../_Assets/emjoi_wave.png";
import emoji_newspaper from "../_Assets/emoji_newspaper.png";
import emoji_woman from "../_Assets/emoji_woman.png";
import x_icon from "../_Assets/x_icon.svg";

function MenuDrawer() {
    return (
        <div className="MenuDrawer">
            <button className="MenuDrawer-Close">
                <img src={x_icon} alt="close menu" />
            </button>
            <a href="localhost:3000" className="MenuDrawer-Link">
                <img src={emoji_newspaper} alt="woman" className="Emoji" />
                Articles
            </a>
            <a href="localhost:3000" className="MenuDrawer-Link">
                <img src={emoji_woman} alt="woman" className="Emoji" />
                About Me
            </a>
            <a href="localhost:3000" className="MenuDrawer-Link">
                <img src={emjoi_wave} alt="waving hand" className="Emoji" />
                Say Hello!
            </a>
        </div>
    );
}

export default MenuDrawer;
