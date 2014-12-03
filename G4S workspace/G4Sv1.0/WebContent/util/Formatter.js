jQuery.sap.declare("sap.ui.demo.myFiori.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.demo.myFiori.util.Formatter = {
	
	_statusStateMap : {
		"1" : "Warning",
		"111" : "Warning", // még nincs szállítva
		"M" : "Warning",
		"A" : "Success",
		"R" : "Success",
		"222" : "Success", // sikeres
		"C" : "Error",
		"1"	: "Error",
		"2"	: "Error",
		"3"	: "Error",
		"4"	: "Error",
		"5"	: "Error",
		"6"	: "Error",
		"7"	: "Error",
		"8"	: "Error",
		"9"	: "Error",
		"10": "Error",
		"999" : "Success" // akítv
		
	},
	_CODStateMap :{
		'0' : 'Success',
		'1' : 'Warning'
	},

	statusText :  function (value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("StatusText" + value, "?");
	},
	
	CODText :  function (value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("CODText" + value, "?");
	},
	
	statusState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	CODState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._CODStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"}); 
			return oDateFormat.format(new Date(value));
		} else {
			return value;
		}
	},
	
	quantity :  function (value) {
		try {
			return (value) ? parseFloat(value).toFixed(0) : value;
		} catch (err) {
			return "Not-A-Number";
		}
	}
};