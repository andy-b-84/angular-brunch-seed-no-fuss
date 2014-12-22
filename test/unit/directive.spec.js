'use strict';
describe("directives", function() {
	beforeEach(module("app"));
	return describe("app-version", function() {
		return it("should print current version", function() {
			module(function($provide) {
				$provide.value("version", "TEST_VER");
			});
			return inject(function($compile, $rootScope) {
				var element;
				element = $compile("<span app-version></span>")($rootScope);
				return expect(element.text()).toEqual("TEST_VER");
			});
		});
	});

    return describe("preferences-form", function() {
        return it("should return the html form", function() {
            return inject(function($compile, $rootScope) {
                var element;
                element = $compile("<form preferences-form></form>")($rootScope);
                return expect(element.text()).toMatch("I like pizza");
            });
        });
    });
});