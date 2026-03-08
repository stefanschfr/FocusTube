function init() {
    update();
    document.addEventListener("yt-page-data-updated", update);
}

init();