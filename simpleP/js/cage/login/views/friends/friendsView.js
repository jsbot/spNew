// Filename: views/project/list
define([
    'jquery',
    'underscore',
    'backbone',
    'cage/appSP/collections/pageCollection',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!cage/appSP/templates/friends/friendsPage.html',
    'handlebars'
], function($, _, Backbone, PageCollection, pageTemplate, Handlebars){


    pageView = Backbone.View.extend({
        el: $('#container'),
        template: Handlebars.compile(pageTemplate),
        events: {
            "click .wasup": "navigateToPage" // Обработчик клика на кнопке "Проверить"
        },
        navigateToPage: function(){
            //alert("check");
            appRouterInstance.navigate("page",true);
        },
        render: function(){

            // Using Underscore we can compile our template with data

            var context = this.collection.models;
            var html    = this.template({numbers: context});
            this.$el.html( html );

        },
        initialize: function(){

            this.testModel = {title: 'Title', text: 'Text'};
            this.collection = new PageCollection();

            this.collection.add({
                id: 1,
                title: "html mockup2",
                img: "/img/1.jpg",
                src: "/test.html"
            });
            this.collection.add({
                id: 2,
                title: "html mockup3",
                img: "/img/2.jpg",
                src: "asdasdasdas/test.html"
            });
        }

    });
    // Our module now returns our view
    return pageView;
});
