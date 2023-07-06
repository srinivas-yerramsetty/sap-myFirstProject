sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("ns.Button.firstproject.controller.myView", {
            onPress:function(evt) {
                evt.getSource();
                MessageToast.show("Application Has Been Deleted");
            }
        });
    });
