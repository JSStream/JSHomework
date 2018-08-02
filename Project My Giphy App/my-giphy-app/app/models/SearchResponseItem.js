define(function () {
    "use strict";

    class SearchResponseItem {
        constructor(searchResponseDataItem) {
            this.previewUrl = searchResponseDataItem.images.preview_gif.url; // this has SMALL sizes good for preview :)
            this.originalUrl = searchResponseDataItem.images.original.url; // the sizes are HUGE on this one but better quality :)
            this.title = searchResponseDataItem.title
        }
    };

    return SearchResponseItem;
});