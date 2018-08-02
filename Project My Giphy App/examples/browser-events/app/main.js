define(function (require) {

    // Search by a CSS query
    let buttonByQuerySelector = document.querySelector("#search-button");
    //Search by id
    let buttonById = document.getElementById("search-button");
    // Search by class. Beware will return an array of DOM nodes
    let buttonOrButtonsByClassName = document.getElementsByClassName("search__button")[0];

    function test1() {
        console.log("I was called by clicking via buttonByQuerySelector");
    }
    function test2() {
        console.log("I was called by bluring (loosing focus of element) via buttonByIdSelector");
    }
    function test3() {
        console.log("I was called by doubleclick via buttonOrButtonsByClassName");
    }
    
    buttonByQuerySelector.addEventListener("click", test1);
    buttonById.addEventListener("blur", test2);
    buttonOrButtonsByClassName.addEventListener("dblclick", test3);
});
