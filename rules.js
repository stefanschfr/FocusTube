const RULES = {
    global: [
        'a[title="Shorts"]', // Sidebar Short Category
        // 'tp-yt-app-drawer', // Detailed Sidebar

        'yt-tab-shape[tab-title="Shorts"]', // Channel Short Category
        'ytd-reel-shelf-renderer', // Shorts from Channel
        '.tabGroupShapeSlider', // Channel Category Slider
        'yt-thumbnail-view-model' // Thumbnails on Profiles and Feed
    ],

    "/": [
        'ytd-browse' // Homepage Suggestions
    ],

    "/feed/subscriptions": [
        'ytd-rich-section-renderer', // Shorts from Feed
    ],

    "/watch": [
        '#secondary', // Sidebar Suggestions
        '#panels-full-bleed-container', // Sidebar Panel in Fullscreen
        '.ytp-ce-element', // Profile and other Video Link
        '.ytp-suggestion-set' // Suggestions after Video
    ],
    "/results": [
        'grid-shelf-view-model', // Shorts from Search
        '#chip-bar', // Search Filter Bar
        'a[href="https://www.youtube.com/howyoutubeworks/product-features/search/"]', // Search Infos
        'ytd-thumbnail', // Thumbnails in Search
        'ytd-horizontal-card-list-renderer', //Similar Searches
        'ytd-badge-supported-renderer', // New and 4K Badge
        '.metadata-snippet-container-one-line', //Video description
        '.metadata-snippet-container ', //Video description
        '#description-text', //Video description
        '#expandable-metadata', //Playlists
        'ytd-universal-watch-card-renderer', //Videos on Sidebar
        'ytd-shelf-renderer', //Suggestions
        'ytd-channel-renderer', //Channels
    ]
};