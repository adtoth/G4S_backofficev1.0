jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.utanvet", {
	
	onInit: function(){ // binding model synchronisation
        this.getView().addDelegate({ onBeforeShow: function(evt) { 
	                alert("onHow");
        }});
},
	
	onBeforeRendering: function(){
        // totál utánvét összeg számítás
     	var total = 0;
     	var myView = this.getView();
    	sap.ui.getCore().getModel().read("/Item", null, {
		}, true, function(response) {
			for(var i = 0; i < 5000; i++){
				total += sap.ui.getCore().getModel().getProperty("/Item(" + response.results[i].Id + ")/Price");	
				myView.byId("total_id").setNumber(total);
			}		
		});
    	
	},

	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},

	
	

});