function removeSelectors(selectors) {
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}

function getActiveSelectors() {
    const path = location.pathname;
    return Array.from(new Set((RULES.global || []).concat(RULES[path] || [])));
}

function observe(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(document.body, {childList: true, subtree: true});
    callback();
}
