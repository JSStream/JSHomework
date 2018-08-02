define(function (require) {
    // Import the modules
    const GiphyHttpClient = require('./http-clients/GiphyHttpClient');
    const SearchService = require('./services/SearchService');
    const EventRegisterService = require('./services/EventRegistrationService');
    const BuilderService = require('./services/BuilderService');    
    const SearchParams = require('./models/SearchParams');


    // Initialize content from modules
    let httpClient = new GiphyHttpClient();
    let searchService = new SearchService(httpClient);
    let eventRegisterService = new EventRegisterService();
    let builderService = new BuilderService();


    // Set-up actions that will be performed on events.
    let search = async (callback, params) => {
        let result = await searchService.search(params);
        callback(result);
    };
    let drawElements = (searchResults) => {
        if (searchResults.items) {
            searchResults.items.forEach(item => {
                let element = builderService.createGifElement(item);
                document.getElementById('main-content').appendChild(element);
            });
        }
    };
    let initialDraw = (searchResults) => {
        clearElements();
        drawElements(searchResults);
    }
    let appendElements = (searchResults) => {
        drawElements(searchResults);
    }
    let clearElements = () => {
        let content = document.getElementById('main-content');
        content.innerHTML = '';
    };

    

    // Register events
    eventRegisterService.register('#load-more-button', 'click', () => {
        let params = searchService.searchParams;
        params.offset = params.offset + params.limit;
        search(appendElements, params);
    });
    eventRegisterService.register('#search-button', 'click', () => {
        let searchKeyword = document.getElementById("search-input");
        if (searchKeyword) {
            let params = new SearchParams(searchKeyword.value);
            search(initialDraw, params);
        }
    });
    eventRegisterService.register('#header-logo', 'click', (e) => {
        location.reload();
    });
    eventRegisterService.register('.nav__navigation', 'click', (e) => {
        let params = new SearchParams(e.target.text);
        let input = document.getElementById("search-input");
        input.value = e.target.text;
        search(initialDraw, params);
    });

    // Do the first load 
    let params = new SearchParams("internet");
    search(initialDraw, params);
});