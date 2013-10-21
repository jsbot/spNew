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
			var pass = $("#pass").val();
			console.log(login);
			//TODO: add Helper for create JSON and send it to Server
			this.connect.sendMessage('valideteUser', '{"id":"0002","collection":"users", "login":"' + login + '", "password":"' + pass + '"}', function (topic, data) {
				if (!data.status) {
					$('.loginError').html(data.message);
				} else {
					appRouterInstance.navigate("page", true);
					loginStatus = true;
				}
			});
		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
			if (loginStatus) {
				appRouterInstance.navigate("page", true);
			}
		},
		initialize: function () {
			loginStatus = false;
		}


	});
	// Our module now returns our view
	return loginView;
});
