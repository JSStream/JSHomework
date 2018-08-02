define(function (require) {
    "use strict";

    const config = require('../configs');
    const BaseHttpClient = require('./BaseHttpClient');

    class GiphyHttpClient extends BaseHttpClient {
        constructor() {
            super();
            this.baseUrl = config.baseUrl;
        }

        get(url) {
            let _url = `${this.baseUrl}/${url}`;
            return super.get(_url);
        }
    };

    return GiphyHttpClient;
});