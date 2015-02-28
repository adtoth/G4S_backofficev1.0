jQuery.sap.require("sap.ui.netlife.G4S.util.Formatter");
jQuery.sap.require("sap.ui.netlife.G4S.util.Grouper");
jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("sap.ui.netlife.G4S.view.bevetMasterLe", {
	
	
	onAfterRendering: function(){
		sap.ui.getCore().getModel().setDefaultCountMode("none");
		window.globalMaster = this;
		this.getView().addDelegate({ onAfterShow: function(evt) {
			alert("1");
			

        }});
	},
	
	handleFilterPress: function(){
		var item = globalMaster.getView().byId("list2").getItems();
		for(var b = 0; b < item.length; b++){
			var id = item[b].sId;
			if(item[b].getNumber() == 0){
				globalMaster.getView().byId("list2").removeItem(id);
			}
		}
	},

	handleList2ItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetDetail", context);
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
	    var oSplitContainer = this.getView().byId("mySplitContainer");
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