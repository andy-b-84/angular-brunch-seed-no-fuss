'use strict';
describe("controllers", function() {
	beforeEach(module("app"));
	describe("MyCtrl1", function() {
		return it("should make scope testable", inject(function($rootScope, $controller, $window) {
			var ctrl, scope;
			scope = $rootScope.$new();
			ctrl = $controller("MyCtrl", {
				$scope: scope
			});
			return expect(scope.preferences).toEqual([]);
		}));
	});
	return describe("MyCtrl2", function() {
		return it("should...");
	});
});