// Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'cage/appSP/views/page/pageView',
	'cage/registration/views/page/RegistrationView',
	'cage/login/views/page/loginView'
], function ($, _, Backbone, PageView, RegistrationView, LoginView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"": "index",
			"page": "page",
			"register": "registration",
			"login": "login"

		},

		index: function () {
			alert("page");
		},

		page: function () {
			pv.render();
		},
		registration: function () {
			rv.render();
		},
		login: function () {
			lv.render();
		}
	});

	initialize = function () {
		rv = new RegistrationView();
		pv = new PageView();
		lv = new LoginView();
		appRouterInstance = new AppRouter();

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});