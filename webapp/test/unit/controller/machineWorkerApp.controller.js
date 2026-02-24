/*global QUnit*/

sap.ui.define([
	"machineworkerapp/controller/machineWorkerApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("machineWorkerApp Controller");

	QUnit.test("I should test the machineWorkerApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
