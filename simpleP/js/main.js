// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },

    paths: {
        jquery: 'lib/ext/jquery',
        underscore: 'lib/ext/underscore',
        backbone: 'lib/ext/backbone',
        handlebars:'lib/ext/handlebars'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app',
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();

});