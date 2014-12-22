"use strict";

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("my app", function() {
	beforeEach(function() {
		return browser.get("/#!");
	});

	it("should automatically redirect to /quizz when location hash/fragment is empty", function() {
		return expect(browser.getLocationAbsUrl()).toMatch("/quizz");
	});

	it("should navigate to /result when the Result link in nav is clicked", function() {
		$('.nav a[ui-sref="result()"]').click();
		return expect(browser.getLocationAbsUrl()).toMatch("/result");
	});

	describe("quizz", function() {
		it("should list 6 items", function() {
			return expect(element.all(by.repeater("quizz in matchingForm.quizzes")).count()).toEqual(6);
		});

		it("should sync done status with checkbox state", function() {
			$("[ui-view] ul li input:not(:checked)").click();
			expect($("[ui-view] ul li span").getAttribute("class")).toEqual("donetrue");
			$("[ui-view] ul li input:checked").click();
			return expect($("[ui-view] ul li span").getAttribute("class")).toEqual("donefalse");
		});
	});

	describe("result", function() {
		beforeEach(function() {
			return browser.get("/#!/result");
		});
		return it("should render view when user navigates to /result", function() {
			return expect($("[ui-view] p:first-child").getText()).toMatch(/Your preferences/);
		});
	});
});