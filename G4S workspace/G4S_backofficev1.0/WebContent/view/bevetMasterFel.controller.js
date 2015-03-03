jQuery.sap.require("sap.ui.netlife.G4S.util.Formatter");
jQuery.sap.require("sap.ui.netlife.G4S.util.Grouper");
jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("sap.ui.netlife.G4S.view.bevetMasterFel", {
	
	
	onAfterRendering: function(){
		sap.ui.getCore().getModel().setDefaultCountMode("none");
		window.globalMaster = this;
		this.getView().addDelegate({ onAfterShow: function(evt) {
        }});
		
		var sumFelveve = 0;
		var sumFelvetlen = 0;
		sap.ui.getCore().getModel().read("/Item?$filter=Today eq '1'", null , {}, false, function(response){
			var lengthOfItems = response.results.length;				
				for (var i = 0; i < lengthOfItems; i++){
					if(response.results[i].PickupStatus == 'A'){
						sumFelveve += response.results[i].Quantity;
					} else if(response.results[i].PickupStatus == 'M')
						sumFelvetlen += response.results[i].Quantity;						
				}
							
		});
		this.getView().byId("bevetNumText").setText(sumFelveve);
		this.getView().byId("bevetFelvetlenNumText").setText(sumFelvetlen);
		
		this.getView().byId("col1").setValue(sumFelvetlen);
		this.getView().byId("col2").setValue(sumFelveve);