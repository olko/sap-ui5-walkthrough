sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    return Controller.extend("sap.ui.demo.walkthrough.controller.App",
        {
            onInit : function() {
                var oData = {
                    recipient : {
                        name : "UI5"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onShowHello : function() {
                // Show alert to say hello
                MessageToast.show("Hallihallo!");
            }
        }
    )});
