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
		connect: connector,
		userLogin: function () {
			var login = $("#login").val();
			this.connect.sendMessage('valideteUser', '{"id":"0001","collection":"users"}', function (topic, data) {
				console.log(data)
			});
		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
		},
		initialize: function () {

		}


	});
	// Our module now returns our view
	return loginView;
});
