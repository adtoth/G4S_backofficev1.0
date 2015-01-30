jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {

	bundle : null, // somebody has to set this

	TPostalCode : function (oContext) {
		var status = oContext.getProperty("TPostalCode");
		var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText(status);
		return {
			key: status,
			text: text
		};
	},
	
	To : function (oContext) {
		var status = oContext.getProperty("To");
		var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText(status);
		return {
			key: status,
			text: text
		};
	},
	
	TStreet : function (oContext) {
		var status = oContext.getProperty("TStreet");
		var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText(status);
		return {
			key: status,
			text: text
		};
	}
	

};