define(function (require) {
    "use strict";

    class BaseHttpClient {
        async get(url) {
            let myInit = { method: 'GET' };
            let request = new Request(url, myInit);
            try {
                let response = await fetch(request);
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw Error('Something went wrong!')
                }
            } catch(err) {
                console.error(err);
            }
        }
    };

    return BaseHttpClient;
});