define(function(require) {

	var router = require('plugins/router');

	return {
		router: router,
		activate: function() {
			router.map([
					{route: '', title:'Home', moduleId: 'home', nav: true},
					{route: 'activate', title:'Activate POS', moduleId: 'activate'},
					// {route: 'shell', title:'About', moduleId: 'shell', nav: true},
				]).buildNavigationModel();

			return router.activate();
		}
	};
});