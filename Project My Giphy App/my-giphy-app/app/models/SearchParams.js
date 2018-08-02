define(function (require) {
    "use strict";
    
    class SearhParams {
        constructor(keyword = "", limit = 25, offset = 0) {
            this.keyword = keyword;
            this.limit = limit;
            this.offset = offset;
        }
    };

    return SearhParams;
});