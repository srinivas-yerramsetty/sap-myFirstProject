/*global QUnit*/

sap.ui.define([
	"nsButton/firstproject/controller/myView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("myView Controller");

	QUnit.test("I should test the myView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
