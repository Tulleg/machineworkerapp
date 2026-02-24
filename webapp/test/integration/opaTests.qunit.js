/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["machineworkerapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
