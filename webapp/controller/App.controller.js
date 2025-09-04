sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
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
                var i18nModel = new ResourceModel({
                    bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: ""
                });
                this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello : function() {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var msgText = oBundle.getText("helloMsg", [sRecipient]);
                // Show alert to say hello
                MessageToast.show(msgText);
            }
        }
    )});
