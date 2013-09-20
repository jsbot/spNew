// Filename: models/project
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var RegisterModel = Backbone.Model.extend({
        defaults: {
            user: "",
            pass: ""
        }
    });
    // Return the model for the module
    return RegisterModel;
});
