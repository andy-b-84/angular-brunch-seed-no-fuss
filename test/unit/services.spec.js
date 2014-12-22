'use strict';
describe("service", function() {
	beforeEach(module("app"));

	return describe("version", function() {
		return it("should return current version", inject(function(version) {
			return expect(version).toEqual("0.6.0");
		}));
	});

    return describe("Storage", function() {
        return it("should let save some value", inject(function(Storage) {
            return expect(Storage).toEqual("0.6.0");
        }));
    });
});