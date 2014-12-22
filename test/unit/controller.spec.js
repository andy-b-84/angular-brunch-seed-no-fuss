'use strict';
describe("controllers", function() {
	beforeEach(module("app"));
	describe("ResultCtrl", function() {
		return it("should make scope testable", inject(function($rootScope, $controller, $window) {
			var ctrl, scope;
			scope = $rootScope.$new();
			ctrl = $controller("ResultCtrl", {
				$scope: scope
			});
			return expect(scope.preferences).toEqual([]);
		}));
	});
});