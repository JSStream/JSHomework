define(function (require) {
    "use strict";

    const config = require('../configs');
    const SearchParams = require('../models/SearchParams');
    const SearchResponse = require('../models/SearchResponse');

    class SearchService {
        constructor(client){
            this.apiKey = config.apiKey;
            this.httpClient = client;
            this._parameters = new SearchParams();
        }

        get searchParams() { 
            return this._parameters;
        };
        set searchParams(value) {
            this._parameters = value;
        }

        async search(params) {     
            let url = `search?api_key=${this.apiKey}` +
                `&q=${params.keyword}&limit=${params.limit}&offset=${params.offset}` +
                `&rating=G&lang=en`;
            this._parameters = params;

            return await this.httpClient.get(url)
                .then(result => new SearchResponse(result));
        }
    };

    return SearchService;
});