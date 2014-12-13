jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleBevetelezesPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetMaster", context);
	},
	
	handleFelvetelPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("felvetelMaster", context);
	},
	
	handleLeadasPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("leadasMaster", context);
	},
	
	handleUtanvetPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("utanvet", context);
	},
	
	onInit: function(){
		this.getView().byId("leadTile").setNumber("42");
	}

});