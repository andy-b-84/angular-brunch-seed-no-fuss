'use strict';
describe("filter", function() {
	beforeEach(module("app"));

	describe("interpolate", function() {
		beforeEach(module(function($provide) {
			$provide.value("version", "TEST_VER");
		}));
		return it("should replace VERSION", inject(function(interpolateFilter) {
			return expect(interpolateFilter("before %VERSION% after")).toEqual("before TEST_VER after");
		}));
	});

    return describe("bbcode", function() {
        return it("should make a ** text STRONG", inject(function(bbcodeFilter) {
            return expect(bbcodeFilter("*test*")).toEqual("<strong>test</strong>");
        }));
    });
});