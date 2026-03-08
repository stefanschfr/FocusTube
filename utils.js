const STYLE_ID = "yt-cleaner-style";

function update() {
    applyCSS(getSelectors());
}

function getSelectors() {
    const path = location.pathname;
    return [
        ...(RULES.global || []),
        ...(RULES[path] || [])
    ];
}

function applyCSS(selectors) {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
        style = document.createElement("style");
        style.id = STYLE_ID;
        document.head.appendChild(style);
    }
    style.textContent = buildCSS(selectors);
}

function buildCSS(selectors) {
    return selectors
        .map(s => `${s} { display: none !important; }`)
        .join("\n");
}
