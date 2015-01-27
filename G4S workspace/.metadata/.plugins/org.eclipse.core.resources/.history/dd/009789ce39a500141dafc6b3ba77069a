jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.ui.demo.myFiori.util.Grouper");
sap.ui.controller("sap.ui.demo.myFiori.view.depoMaster", {
	
	onBeforeRendering: function(){
		window.globalDepo = this;
		this.getView().addDelegate({ onAfterShow: function(evt) {
			sap.ui.getCore().getModel().updateBindings(true);
			sap.ui.getCore().getModel().forceNoCache(true)
        	// $("#signature").jSignature();
				var lengthOfAddresses = 0;
				var total = 0;
				globalDepo.byId("list").removeAllItems();
				sap.ui.getCore().getModel().read("/Address", null, {
				}, true, function(response) {
					lengthOfAddresses = response.results.length;
					for(var i = 1; i <= lengthOfAddresses; i++){
						sap.ui.getCore().getModel().read("/Address(" + i + ")" , null, {
							"$expand" : "Items"
						}, true, function(response) {
							if(response.DelStatus != "222" && response.Today == '1'){
								for(var j = 0; j < response.Items.results.length; j++){
									globalDepo.byId("list").addItem(new sap.m.ObjectListItem({icon: "sap-icon://shipping-status", number: response.Items.results[j].ProductId}));
								}		
							}
						});
							}
					
				});
				/*for(var i = 0; i < lengthOfAddresses; i++){
			sap.ui.getCore().getModel().read("/Address(" + i + ")" , null, {
				"$expand" : "Items"
			}, true, function(response) {
				for(var i = 0; i < response.results.length; i++){
					total += sap.ui.getCore().getModel().getProperty("/Items(" + response.Items.results[i].Id + ")/Price");
				}		
			});
				}*/
			
        }});
	
	},
	
	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},



});