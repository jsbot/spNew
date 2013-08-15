// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'cage/views/page/pageView',
    'cage/views/friends/friendsView'
], function($, _, Backbone, PageView, FriendsView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            "page": "page",
            "friends": "friendsPage"
        },

        index: function() {
            alert("page");
        },

        page: function() {

            pv.render();
           // alert("page");//welcomeViewInstance.render();
        },
        friendsPage: function(){

            fv.render();
        }
    });

    initialize = function(){

        fv = new FriendsView();
        pv = new PageView();
        appRouterInstance = new AppRouter();

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});