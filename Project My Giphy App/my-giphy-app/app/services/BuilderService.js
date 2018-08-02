define(function () {
    "use strict";

    class BuilderService {
        createGifElement(searchResponse) {
            return this.generateElement(searchResponse.previewUrl, searchResponse.title);
        }

        generateElement(url, name = '', width = 220, height = 100) {
            let image = new Image(width, height);
            image.src = url;
            image.alt = name;
            let container = document.createElement("div");
            container.className = "gif-container";
            container.appendChild(image);
            return container;
        }
    };

    return BuilderService;
});