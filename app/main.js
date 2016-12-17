requirejs.config({
	paths: {
		'durandal':	"../vendor/durandal/js",
		'plugins':	"../vendor/durandal/js/plugins",
		// 'transitions':"../vendor/durandal/js/transitions",
		'knockout':	"../vendor/knockout/knockout-3.4.0",
		'jquery':	"../vendor/jquery/jquery-1.9.1",
		'text':		"../vendor/require/text",
		}
});

define(function(require) {
	var app = require('durandal/app');

	var system = require('durandal/system');
	system.debug(true);

	app.title = 'Durandal Example';

	app.configurePlugins({
		router:true,
		// dialog: true
	});

	app.start().then(function() {
		app.setRoot('shell');
	});
});