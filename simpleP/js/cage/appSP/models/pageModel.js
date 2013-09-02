// Filename: models/project
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var PageModel = Backbone.Model.extend({
        defaults: {
            id: 1,
            title: "html mockup",
            img: "/img/1.png",
            src: "/test.html"
        }
    });
    // Return the model for the module
    return PageModel;
});
