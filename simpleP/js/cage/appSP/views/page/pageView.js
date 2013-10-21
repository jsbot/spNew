// Filename: views/project/list
define([
	'jquery',
	'underscore',
	'backbone',
	'cage/appSP/collections/pageCollection',
	'text!cage/appSP/templates/page/page.html',
	'handlebars',
	'service/connector'
], function ($, _, Backbone, PageCollection, pageTemplate, Handlebars, connector) {


	pageView = Backbone.View.extend({
		el: $('#container'),
		template: Handlebars.compile(pageTemplate),
		events: {
			"click .gtreg": "navigateToRegister" // Обработчик клика на кнопке "Проверить"
		},
		navigateToRegister: function () {
			appRouterInstance.navigate("register", true);
		},
		addRepro: function (collection, reproArr) {
			for (i = 0; i <= reproArr.length; i++) {
				collection.add(reproArr[i]);
			}
			//this.render();
		},
		render: function () {
			var context = this.collection.models;
			var html = this.template({numbers: context});
			this.$el.html(html);
		},
		initialize: function () {
			var _this = this;
			var conn = connector;
			conn.getMessage('wellcome', function (data) {
				console.log(data);
			});
			_this.collection = new PageCollection();
			conn.sendMessage('getFriends', function (topic, data) {
				_this.addRepro(_this.collection, data);
			});
		}


	});
	// Our module now returns our view
	return pageView;
});
