// Filename: views/project/list
define([
	'jquery',
	'backbone',
	'text!cage/registration/templates/page/registrationTpl.html',
	'handlebars',
	'cage/registration/models/registerModel',
	'service/connector'
], function ($, Backbone, pageTemplate, Handlebars, registerModel, connector) {


	registrationView = Backbone.View.extend({
		el: $('#container'),
		model: new registerModel(),
		template: Handlebars.compile(pageTemplate),
		events: {
			"click #rSave": "saveUser", // Обработчик клика на кнопке "Проверить"
			"click .test": "navigateToPage"
			//'change input': 'inputChange'
		},
		navigateToPage: function () {
			appRouterInstance.navigate("page", true);
		},
		saveUser: function () {
			var conn = connector;
			conn.sendMessage('getDBData', '{"id":"0101","collection":"users"}', function (topic, data) {
				console.log("THIS IS DATA");
				console.log(data);
			});
		},
		inputChange: function (e) {
			switch (e.currentTarget.name) {
				case 'user':
					this.model.set('user', e.currentTarget.value);
					break;
				case 'pass':
					this.model.set('pass', e.currentTarget.value);
					break;
				default:
					alert('Я таких значений не знаю');
			}
			console.log(e.currentTarget.name);
			//this.model.set('user', e.currentTarget.value)
		},
		render: function () {
			var html = this.template();
			this.$el.html(html);
		},
		initialize: function () {
			this.model.set({user: "Test User", pass: "123456"});
		}


	});
	// Our module now returns our view
	return registrationView;
});
