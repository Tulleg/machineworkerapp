sap.ui.define([], function () {
    "use strict";

    return {
        /**
         * Legt eine neue Meldung im SAP Backend an.
         * @param {sap.ui.model.odata.v2.ODataModel} oModel Das OData Modell der App
         * @param {Object} oData Die Daten der neuen Maßnahme
         * @returns {Promise} Ein Promise, das bei Erfolg aufgelöst (resolve) und bei Fehler abgelehnt (reject) wird
         */
        createNotification: function (oModel, oData) {
            return new Promise(function (resolve, reject) {
                oModel.create("/NotificationSet", oData, {
                    success: function (oResponse) {
                        resolve(oResponse);
                    },
                    error: function (oError) {
                        reject(oError);
                    }
                });
            });
        }
    };
});