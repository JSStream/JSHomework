define(function () {
    "use strict";

    class EventRegistrationService {
        register(id, eventType, action) {
            let element = document.querySelector(id);
            if (element) {
                element.addEventListener(eventType, action);
            }
        }
    };

    return EventRegistrationService;
});