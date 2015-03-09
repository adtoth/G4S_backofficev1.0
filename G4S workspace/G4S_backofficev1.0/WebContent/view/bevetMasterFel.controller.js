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
					if(response.results[i].PickupStatus == 'U'){
						if(response.results[i].PickupStatus == 'A'){
							sumFelveve += response.results[i].Quantity;
						} else if(response.results[i].PickupStatus == 'M')
							sumFelvetlen += response.results[i].Quantity;						
					}
				}
							
		});
		this.getView().byId("bevetNumText2").setText(sumFelveve);
		this.getView().byId("bevetFelvetlenNumText2").setText(sumFelvetlen);
		
		this.getView().byId("colFelvetDiagram1").setValue(sumFelvetlen);
		this.getView().byId("colFelvetDiagram2").setValue(sumFelveve);
		this.getView().byId("chart").setTooltip("Felvéve: " + sumFelveve + "\n" + "Nincs felvéve: " + sumFelvetlen);
	},


	handleFilterPress: function(){
		var item = globalMaster.getView().byId("list3").getItems();
		for(var b = 0; b < item.length; b++){
			var id = item[b].sId;
			if(item[b].getNumber() == 0){
				globalMaster.getView().byId("list3").removeItem(id);
			}
		}
	},
	
	
	handleList3ItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("futarDetailMasterLe", context);
	},
	
	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},
	
	handleGroup : function(evt) {
	
		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("LifecycleStatus" === key) {
			sap.ui.netlife.G4S.util.Grouper.bundle = this.getView().getModel(
					"i18n").getResourceBundle();
			var grouper = sap.ui.netlife.G4S.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, true, grouper));
		}
	
		// update binding
		var list = this.getView().byId("list");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},
	
	handleToggleSecondaryContent: function(oEvent) {
	    var oSplitContainer = this.getView().byId("mySplitContainer2");
	    oSplitContainer.setShowSecondaryContent(!oSplitContainer.getShowSecondaryContent());
	    if(oSplitContainer.getShowSecondaryContent() == true){
	    	this.byId("toggleListBtn").setIcon("sap-icon://close-command-field");
	    } else {
	    	this.byId("toggleListBtn").setIcon("sap-icon://open-command-field");   	
	    }
	},
	
	handleGroup : function(evt) {
	
		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("Number" === key) {
			sap.ui.netlife.G4S.util.Grouper.bundle = this.getView().getModel("i18n").getResourceBundle();
			var grouper = sap.ui.netlife.G4S.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, false, grouper));
		}
	
		// update binding
		var list = this.getView().byId("list2");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},
	
	  handlePressConfiguration: function(oEvent) {
	    var oItem = oEvent.getSource();
	    var oShell = this.getView().byId("myShell");
	    var bState = oShell.getShowPane();
	    oShell.setShowPane(!bState);
	    oItem.setShowMarker(!bState);
	    oItem.setSelected(!bState);
	  },
	
	  handleLogoffPress: function(oEvent) {
	    sap.m.MessageToast.show("Logoff Button Pressed");
	  },
	
	  handleUserItemPressed: function(oEvent) {
	    sap.m.MessageToast.show("User Button Pressed");
	  },
	  
	  handleSearchItemSelect: function(oEvent) {
	    sap.m.MessageToast.show("Search Entry Selected: " + oEvent.getSource().getTitle());
	  },
	
	  handleShellOverlayClosed: function() {
	    sap.m.MessageToast.show("Overlay closed");
	  },

});