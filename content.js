function handleNavigation() {
    requestAnimationFrame(() => {
        requestAnimationFrame(update);
    });
}

function init() {
    update();

    window.addEventListener("yt-navigate-finish", handleNavigation);
    window.addEventListener("popstate", handleNavigation);
}

init();