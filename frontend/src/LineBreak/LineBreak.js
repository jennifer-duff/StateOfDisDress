import "./LineBreak.css";
// import { COLORS } from "../Utilities";

function LineBreak(props) {
    let classname = "LineBreak";
    if (props.orientation === "vertical") {
        classname += " LineBreak-Vertical";
    } else if (props.orientation === "horizontal") {
        classname += " LineBreak-Horizontal";
    }
    return <div className={classname}></div>;
}

export default LineBreak;
