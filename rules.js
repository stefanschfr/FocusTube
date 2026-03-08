const RULES = {
    global: [
        'a[title="Shorts"]', // Sidebar Short Category
        // 'tp-yt-app-drawer', // Detailed Sidebar

        'yt-tab-shape[tab-title="Shorts"]', // Channel Short Category
        'ytd-reel-shelf-renderer', // Shorts from Channel
        '.tabGroupShapeSlider' // Channel Category Slider
    ],

    "/": [
        'ytd-browse' // Homepage Suggestions
    ],

    "/feed/subscriptions": [
        'ytd-rich-section-renderer', // Shorts from Feed
    ],

    "/watch": [
        '#secondary', // Sidebar Suggestions
        '#panels-full-bleed-container' // Sidebar Panel in Fullscreen
    ],
    "/results": [
        'grid-shelf-view-model', // Shorts from Search
        '#chip-bar', // Search Filter Bar
        'a[href="https://www.youtube.com/howyoutubeworks/product-features/search/"]' // Search Infos
    ]
};