define(function (require) {



    // Promises example
    
    // let isMomHappy = true; // change this to true/false to see difference
    // // Promise
    // let willIGetNewPhone = new Promise(
    //     function (resolve, reject) {
    //         if (isMomHappy) {
    //             let phone = {
    //                 brand: 'Samsung',
    //                 color: 'black'
    //             };
    //             resolve(phone); // fulfilled
    //         } else {
    //             let reason = new Error('mom is not happy');
    //             reject(reason); // reject
    //         }
    //     }
    // );
    // let askMom = function () {
    //     willIGetNewPhone
    //         .then(function (fulfilled) {
    //             // yay, you got a new phone
    //             console.log(fulfilled);
    //          // output: { brand: 'Samsung', color: 'black' }
    //         })
    //         .catch(function (error) {
    //             // oops, mom don't buy it
    //             console.log(error.message);
    //          // output: 'mom is not happy'
    //         });
    // };
    // askMom();





    // Fetch example
    // class FetchService {
    //     constructor() {
    //         //  how to construct an url look into this https://developers.giphy.com/explorer/
    //         this.url = `https://api.giphy.com/v1/gifs/search?api_key=WskhCYgc72icE2iDAgAPefGDc5XX7FOX&q=test&limit=25&offset=0&rating=G&lang=en`;
    //     }

    //     oldSchoolXhrWay() {
    //         let xhrReq = new XMLHttpRequest();
    //         xhrReq.onreadystatechange = function() {
    //             if (xhrReq.readyState == XMLHttpRequest.DONE) {
    //                 console.log(JSON.parse(xhrReq.response));
    //             }
    //         }
    //         xhrReq.open('GET', this.url);
                    
    //         xhrReq.onload = function() {
    //             console.log('The onload is the function called when an XMLHttpRequest transaction completes successfully.');
    //         };
                    
    //         xhrReq.onerror = function(error) {
    //             console.log('I had an error');
    //         };
                    
    //         xhrReq.send();
    //     }

    //     theFetchWay() {
    //         let requestOptions = {
    //             method: 'GET'
    //         };
    //         return fetch(this.url).then(function(response) {
    //                 return response.json();
    //             }).catch(function(error) {
    //                 console.log(error);
    //             });
    //     }
    // }

    // let fetchService = new FetchService();
    // // fetchService.oldSchoolXhrWay();
    // fetchService.theFetchWay().then(responseJson => console.log(responseJson)) ;




    // Async await example
    //
    class SearchService {
        constructor() {
            // how to construct an url look into this https://developers.giphy.com/explorer/
            this.url = `https://api.giphy.com/v1/gifs/search?api_key=WskhCYgc72icE2iDAgAPefGDc5XX7FOX&q=test&limit=25&offset=0&rating=G&lang=en`;
        }


        async get(url) { // async allows us make asynchronous calls and still write 
            let myInit = { method: 'GET' };
            let request = new Request(this.url, myInit);
            try {
                let response = await fetch(request); // fetch - returns a Promise of a Response. await - let's us wait for the response while not blocking a thread.
                if (response.status == 200) {
                    return response.json(); // Also returns a Promise
                } else {
                    throw Error('Something went wrong!')
                }
            } catch(err) {
                console.error(err);
            }
        }

        callGet() {
            console.log(this.get());
        }
        callGetButAlsoLetItResolve() {
            this.get().then(result => console.log(result));
            console.log('test'); // this get's called first
        }
        async callGetButAlsoLetItResolveAndAwaitBeforeMovingOn() {
            console.log(await this.get().then(result => result));
            console.log('test'); // this get's called second
        }
    }

    let searchService = new SearchService();
   // searchService.callGet();
    // searchService.callGetButAlsoLetItResolve();
     searchService.callGetButAlsoLetItResolveAndAwaitBeforeMovingOn();




    
});
