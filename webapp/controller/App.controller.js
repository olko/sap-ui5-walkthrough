sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    return Controller.extend("sap.ui.demo.walkthrough.controller.App",
        {
            onShowHello : function() {
                // Show alert to say hello
                MessageToast.show("Hallihallo!");
            }
        }
)});
