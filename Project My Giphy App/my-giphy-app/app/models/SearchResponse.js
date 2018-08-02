define(function (require) {
    "use strict";
    let SearchResponseItem = require('./SearchResponseItem');

    class SearchResponse {
        constructor(response) {
            this.page = response.pagination.offset;
            this.pageSize = response.pagination.count;
            this.status = response.meta.status;
            this.statusMsg = response.meta.msg;
            this.items = response.data.map(element => {
                return new SearchResponseItem(element);
            });
        }
    };

    return SearchResponse;
});