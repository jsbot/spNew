// Filename: models/project
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var UserModel = Backbone.Model.extend({
		defaults: {
			id: 0,
			login: "",
			password: "",
			permissions: 0
		}
	});
	// Return the model for the module
	return UserModel;
});
