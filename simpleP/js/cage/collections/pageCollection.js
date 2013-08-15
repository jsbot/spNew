// Filename: collections/projects
define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'models/pageModel'
], function(_, Backbone, PageModel){
    var PageCollection = Backbone.Collection.extend({
        model: PageModel
    });
    // You don't usually return a collection instantiated
    return PageCollection;
});