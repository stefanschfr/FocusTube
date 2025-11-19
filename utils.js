function removeSelectors(selectors) {
    for (const { selector } of selectors) {
        document.querySelectorAll(selector).forEach(el => el.remove());
    }
    /*const frosted = document.getElementById('frosted-glass');
    if (frosted) {
        frosted.style.height = '0px';
        frosted.style.padding = '0px';
    }*/
    // Class for the overlapping frosted glass: with-chipbar
}

function observe(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(document.body, { childList: true, subtree: true });
    callback();
}
