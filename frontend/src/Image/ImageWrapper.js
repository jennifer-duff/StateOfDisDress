import "./ImageWrapper.css";
import { computeBoxShadowStyle } from "../Utility";

function ImageWrapper(props) {
    const shadowStyle = computeBoxShadowStyle(props.shadowColor);

    // set basic image styles
    let style = {
        "box-shadow": `${shadowStyle}`,
        "background-image": `${props.source}`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        width: "100%",
        height: "100%",
    };

    // if we have additonal styles to add, add or override them in the `style` dictionary
    if ("addlStyles" in props) {
        for (const [key, value] of Object.entries(props.addlStyles)) {
            style[key] = value;
        }
    }

    return <div className="ImageWrapper" style={style}></div>;
}

export default ImageWrapper;
