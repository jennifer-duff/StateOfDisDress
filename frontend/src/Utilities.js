export function resolveColor(color) {
    let allColors = {
        blue: "#4f9fc4",
        yellow: "#e6be6e",
        purple: "#deafd9",
        teal: "#4fc4b9",
        pink: "#e386a6",
        eggshell: "#fffaf7",
        darkgray: "#303030",
        lightgray: "#787878",
    };

    return allColors[color];
}

export function computeBoxShadowStyle(stringColor) {
    let hexColor = resolveColor(stringColor);
    return `10px 10px 0px ${hexColor}`;
}

export const COLORS = {
    blue: "#4f9fc4",
    yellow: "#e6be6e",
    purple: "#deafd9",
    teal: "#4fc4b9",
    pink: " #e386a6",
    eggshell: "#fffaf7",
    darkgray: "#303030",
    lightgray: "#787878",
};
