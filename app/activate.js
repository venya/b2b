define(function(require) {

	// var app = require('durandal/app');
	var ko = require('knockout');
	var self = this;

	companyId =	ko.observable(1);
	companyIdFocused = ko.observable(true);
	licenseKey =ko.observable('');
	licenseKeyFocused = ko.observable(false);

	return {
		clearCompanyId: function() {
			self.companyId('');
			self.companyIdFocused(true);
		},
		clearLicenseKey: function() {
			self.licenseKey('');
			self.licenseKeyFocused(true);
		},

		submit:		function() {
			console.log('Submit form...');
		}
	};

});