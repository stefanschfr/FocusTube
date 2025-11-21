function removeSelectors(selectors) {
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}
function getActiveSelectors() {
    const path = location.pathname;
    const selectors = [];

    if (RULES.global) selectors.push(...RULES.global);

    if (RULES[path]) selectors.push(...RULES[path]);

    return selectors;
}

function observe(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(document.body, { childList: true, subtree: true });
    callback();
}
