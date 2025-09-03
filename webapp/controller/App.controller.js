sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    return Controller.extend("sap.ui.demo.walkthrough.controller.App",
            {
                onShowHello : function() {
                    // Show alert to say hello
                    alert('Hello!');
                }
            }
        )
    }
)
