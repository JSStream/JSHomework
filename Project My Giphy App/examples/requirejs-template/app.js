requirejs.config({
    //By default load any module IDs from lib
    baseUrl: 'lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
