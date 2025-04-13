sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("dw.ui5.walkthrough.06.controller.App", {
      onInit() {
        this._oI18n = new ResourceModel({
          bundleName: "dw.ui5.walkthrough.06.i18n.i18n"
        });
        this.getView().setModel(this._oI18n, "i18n");
        // set data model on view
        const oData = {
          recipient: {
            name: "SAP Fiori 开发之多语言模型支持",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onSayHelloPress: function () {
        const oResourceBundle = this._oI18n.getResourceBundle();
        // const sLanguage = sap.ui.getCore().getConfiguration().getLanguage();
        // let sUserName = oResourceBundle.getText("userName");
        let sRecipientName = this.getView().getModel().getProperty("/recipient/name");
        let sUserNameEn = "Li Yugang";
        let sUserNameZh = "李玉刚";
        let sMsg = oResourceBundle.getText("helloMsg", [sRecipientName, sUserNameEn, sUserNameZh]);
        MessageToast.show(sMsg);
      }
    });
  }
);