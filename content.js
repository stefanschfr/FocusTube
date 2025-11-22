function init() {
    observe(() => {
        removeSelectors(getActiveSelectors())
    });
}

init();