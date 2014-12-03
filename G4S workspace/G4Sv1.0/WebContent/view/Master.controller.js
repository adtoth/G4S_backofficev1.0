jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleBevetelezesPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetMaster", context);
	},
	
	handleSzallitasiPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("szallitasiMaster", context);
	},
	
	handleAktualisPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("aktualis", context);
	},
	
	handleUtanvetPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("utanvet", context);
	},
	

});