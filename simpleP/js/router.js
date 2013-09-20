// Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'cage/appSP/views/page/pageView',
	'cage/registration/views/page/RegistrationView'
], function ($, _, Backbone, PageView, RegistrationView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"": "index",
			"page": "page",
			"register": "registration"
		},

		index: function () {
			alert("page");
		},

		page: function () {
			pv.render();
		},
		registration: function () {
			rv.render();
		}
	});

	initialize = function () {
		rv = new RegistrationView();
		pv = new PageView();
		appRouterInstance = new AppRouter();

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});