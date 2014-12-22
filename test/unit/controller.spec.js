'use strict';
describe("controllers", function() {
	beforeEach(module("app"));
	describe("QuizzCtrl", function() {
		return it("should make scope testable", inject(function($rootScope, $controller) {
			var ctrl, scope;
			scope = $rootScope.$new();
			ctrl = $controller("QuizzCtrl", {
				$scope: scope
			});
			return expect(scope.matchingForm.quizzes.length).toEqual(8);
		}));
	});

    describe("ResultCtrl", function() {
        return it("should make scope testable", inject(function($rootScope, $controller) {
            var ctrl, scope;
            scope = $rootScope.$new();
            ctrl = $controller("ResultCtrl", {
                $scope: scope
            });
            return expect(scope.preferences).toEqual([]);
        }));
    });

    describe("AboutCtrl", function() {
        return it("should make scope testable", inject(function($rootScope, $controller) {
            var ctrl, scope;
            scope = $rootScope.$new();
            ctrl = $controller("AboutCtrl", {
                $scope: scope
            });
            return expect(scope.about).toMatch(/Lorem ipsum/);
        }));
    });
});