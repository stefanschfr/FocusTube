const RULES = {
    global: [
        'a[title="Shorts"]', // Sidebar Short Category
        'ytd-rich-section-renderer', // Shorts from Homepage
        // 'tp-yt-app-drawer', // Detailed Sidebar

        'yt-tab-shape[tab-title="Shorts"]', // Channel Short Category
        'ytd-reel-shelf-renderer' // Shorts from Channel
    ],

    "/": [
        'ytd-browse' // Homepage Suggestions
    ],

    "/watch": [
        '#secondary', // Sidebar Suggestions
    ],
    "/results": [
        'grid-shelf-view-model', // Shorts from Search
        '#chip-bar', // Search Filter Bar
        'a[href="https://www.youtube.com/howyoutubeworks/product-features/search/"]' // Search Infos
    ]
};