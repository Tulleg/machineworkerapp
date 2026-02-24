
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment" // Das Modul für Popups hinzufügen
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("machineworkerapp.controller.machineWorkerApp", {
        
        onInit: function () {
        },

        // Öffnet das Popup
        onOpenAddDialog: function () {
            var oView = this.getView();

            // Prüfen, ob das Dialogfenster schon existiert
            if (!this.byId("addDialog")) {
                // Fragment laden (Pfade anpassen!)
                Fragment.load({
                    id: oView.getId(),
                    // HIER AUFPASSEN: Das muss der Namespace deiner App sein + ".view.AddNotificationDialog"
                    // Meistens ist es der vordere Teil deines Controller-Namens.
                    // Beispiel: "machineworkerapp.view.AddNotificationDialog"
                    name: "machineworkerapp.view.AddNotificationDialog", 
                    controller: this
                }).then(function (oDialog) {
                    // Dialog mit der View verbinden (wichtig für Daten und Übersetzungen)
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                // Wenn er schon geladen war, einfach wieder öffnen
                this.byId("addDialog").open();
            }
        },

        // Schließt das Popup, wenn man auf "Abbrechen" klickt
        onCloseDialog: function () {
            this.byId("addDialog").close();
        },

        // Platzhalter für den Speichern-Button
        onSaveNotification: function () {
            alert("Hier speichern wir gleich die Daten!");
        }

    });
});