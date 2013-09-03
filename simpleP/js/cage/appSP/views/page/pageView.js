// Filename: views/project/list
define([
	'jquery',
	'underscore',
	'backbone',
	'cage/appSP/collections/pageCollection',
	// Using the Require.js text! plugin, we are loaded raw text
	// which will be used as our views primary template
	'text!cage/appSP/templates/page/page.html',
	'handlebars',
	'service/connector'
], function ($, _, Backbone, PageCollection, pageTemplate, Handlebars, connector) {


	pageView = Backbone.View.extend({
		el: $('#container'),
		template: Handlebars.compile(pageTemplate),
		events: {
			"click .test": "navigateToFriends" // Обработчик клика на кнопке "Проверить"
		},
		navigateToFriends: function () {
			alert("navigate to friends");
			appRouterInstance.navigate("friends", true);
		},
		addRepro: function (collection, reproArr) {
			for (i = 0; i <= reproArr.length; i++) {
				collection.add(reproArr[i]);
			}
			this.render();
		},

		render: function () {
			// Using Underscore we can compile our template with data

			var context = this.collection.models;
			var html = this.template({numbers: context});
			this.$el.html(html);

		},
		initialize: function () {
			var _this = this;
			var conn = connector;
			conn.getMessage('wellcome',function(data){
				console.log(data);
			});
			_this.collection = new PageCollection();
			conn.getMessage('news',function(data){
				console.log(data);
				_this.addRepro(_this.collection, data);
			});
			conn.sendMessage('message','{"id":"0001","collection":"friends"}');

/*			conn.on('wellcome', function (data) {
				console.log(data);
			});
			_this.collection = new PageCollection();
			conn.on('news', function (data) {
				console.log(data);
				_this.addRepro(_this.collection, data);
			});
            */
			//conn.emit('message', '{"id":"0001","collection":"friends"}');


			/*this.collection.add({
			 id: 1,
			 title: "html mockup2",
			 img: "img/1.jpg",
			 src: "/test.html"
			 });*/
			/*this.collection.add({
			 id: 2,
			 title: "html mockup3",
			 img: "img/2.jpg",
			 src: "asdasdasdas/test.html"
			 });*/
		}

	});
	// Our module now returns our view
	return pageView;
});
