// Filename: views/project/list
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/pageCollection',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!templates/friends/friendsPage.html',
    'handlebars'
], function($, _, Backbone, PageCollection, pageTemplate, Handlebars){


    pageView = Backbone.View.extend({
        el: $('#container'),
        template: Handlebars.compile(pageTemplate),
        render: function(){
		alert("fr1");
            // Using Underscore we can compile our template with data

            var context = this.collection.models;
            var html    = this.template({numbers: context});
            this.$el.append( html );

        },
        initialize: function(){
		alert("fr");

        }

    });
    // Our module now returns our view
    return pageView;
});
