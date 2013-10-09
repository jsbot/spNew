// Filename: views/project/list
define([
	'jquery',
	'underscore',
	'backbone',
	'text!cage/login/templates/page/loginTemplate.html',
	'handlebars',
	'service/connector'
], function ($, _, Backbone, loginTemplate, Handlebars, connector) {


	loginView = Backbone.View.extend({
		el: $('#container'),
		template: Handlebars.compile(loginTemplate),
		events: {
			"click #submit": "userLogin"
		},
		userLogin: function () {
			var login = $("#login").val();
			console.log(login);

		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
		},
		initialize: function () {
			var _this = this;
			var conn = connector;
		}


	});
	// Our module now returns our view
	return loginView;
});
