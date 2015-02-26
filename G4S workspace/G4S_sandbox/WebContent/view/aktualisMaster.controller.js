jQuery.sap.require("sap.ui.netlife.G4S.util.Formatter");
jQuery.sap.require("sap.ui.netlife.G4S.util.Grouper");
sap.ui.controller("sap.ui.netlife.G4S.view.aktualisMaster", {
	 
	onBeforeRendering: function(){ // binding model synchronisation
			
        this.getView().addDelegate({ onBeforeShow: function(evt) {
        	 sap.ui.getCore().getModel().refresh(true);
        	 sap.ui.getCore().getModel().updateBindings(true);
 			 sap.ui.getCore().getModel().forceNoCache(true);	        	 
        }});
		sap.ui.getCore().getModel().setDefaultCountMode("none");
		window.globalMaster = this;
		this.getView().addDelegate({ onAfterShow: function(evt) {
			sap.ui.getCore().getModel().updateBindings(true);
			sap.ui.getCore().getModel().forceNoCache(true);
			globalMaster.getView().byId("bevetALI").setCounter(10);			
			globalMaster.getView().byId("aktualisALI").setCounter(0);
			globalMaster.getView().byId("leadSikeresLezartALI").setCounter(0);
			globalMaster.getView().byId("leadSikertelenLezartALI").setCounter(0);
			globalMaster.getView().byId("felfuggSzallALI").setCounter(0);
			globalMaster.getView().byId("utanvetALI").setCounter(0);
		
		var depo = 0;
		var bevet = 0;
		var paramurl = "$filter=Today eq '1'";
		var response;
		
		globalMaster.getView().getModel().read("/Address", null, paramurl, true, function(response){
			globalMaster.getAddress(response);
		});
		
		}})
	},
	
	getAddress: function(response) {

		var leadas = globalMaster.getView().byId("bevetALI").getCounter();
		var lezartLeadas = globalMaster.getView().byId("aktualisALI").getCounter();
		var lezartFelvetel = globalMaster.getView().byId("leadSikeresLezartALI").getCounter();
		var felvetel = globalMaster.getView().byId("leadSikertelenLezartALI").getCounter();
		var bevet = globalMaster.getView().byId("felfuggSzallALI").getCounter();

		for(var i = 0; i < response.results.length; i++){
				if(response.results[i].PicType == 'D' && (response.results[i].DelStatus == '999' || response.results[i].DelStatus == '555' || response.results[i].DelStatus == '111')){
					leadas++;
				}
				if(response.results[i].PicType == 'D' && !(response.results[i].DelStatus == '999' || response.results[i].DelStatus == '555' || response.results[i].DelStatus == '111')){
					lezartLeadas++;
				}
				if(response.results[i].PicType == 'U' && (response.results[i].DelStatus == '999' || response.results[i].DelStatus == '555' || response.results[i].DelStatus == '111')){
					felvetel++;
				}
				if(response.results[i].PicType == 'U' && !(response.results[i].DelStatus == '999' || response.results[i].DelStatus == '555' || response.results[i].DelStatus == '111')){
					lezartFelvetel++;
				}
				if(response.results[i].DelStatus == '999' ){
					aktualis++;
				}
		}
		
		globalMaster.getView().byId("bevetALI").setCounter(leadas);
		globalMaster.getView().byId("aktualisALI").setCounter(lezartLeadas);
		globalMaster.getView().byId("leadSikeresLezartALI").setCounter(felvetel);
		globalMaster.getView().byId("leadSikertelenLezartALI").setCounter(lezartFelvetel);
		globalMaster.getView().byId("felfuggSzallALI").setCounter(aktualis);
		
	},
	 
	handleListItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("aktualis", context);
	},

	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},
	
	handleBevetelezesPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("bevetALI").getCounter() >= 1){
			this.nav.to("bevetMaster", context);
		}
	},
	
	handleAktualisPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		//if(globalMaster.getView().byId("aktualisALI").getCounter() >= 1){
			this.nav.to("aktualisMaster", context);
		//}
	},
	
	handleLezartLeadasSikeresPress : function (evt) {
		var context = evt.getSource().getBindingContext();
//		if(globalMaster.getView().byId("leadSikeresLezartALI").getCounter() >= 1){
			this.nav.to("leadSikeresLezartMaster", context);
//		}
	},
	
	handleLezartLeadasSikerestelenPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("leadSikertelenLezartALI").getCounter() >= 1){
			this.nav.to("leadSikertelenLezartMaster", context);
		}
	},
	
	handleFelfuggSzall : function(evt){
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("felfuggSzallALI").getCounter() >= 1){
			this.nav.to("felfuggSzallMaster", context);
		}
	},
	
	handleUtanvetPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("utanvet", context);
	},

	handleListSelect : function(evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("leadasDetail", context);
	},

	handleGroup : function(evt) {

		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("TPostalCode" === key || "To" === key || "TStreet" === key) {
			sap.ui.netlife.G4S.util.Grouper.bundle = this.getView().getModel("i18n").getResourceBundle();
			var grouper = sap.ui.netlife.G4S.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, false, grouper));
		}

		// update binding
		var list = this.getView().byId("list");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},
	
	handleSearch : function (evt) {
		
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("BPId", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
		
		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
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

  handleSearchPressed: function(oEvent) {
    var sQuery = oEvent.getParameter("query");
    if(sQuery == "") {
      return;
    }

    // create Overlay only once
    if (!this._overlay) {
      this._overlay = sap.ui.xmlfragment(
        "sap.ui.netlife.G4S.view.bevetMaster",
        this
      );
      this.getView().addDependent(this._overlay);
    }

    // mock data
    var aResultData = [];
    for(var i = 0; i < 10; i++) {
      aResultData.push({
                title:(i + 1) + ". " + sQuery,
                text:"Lorem ipsum sit dolem"
              });
    }
    var oData = {
            searchFieldContent: sQuery,
            resultData: aResultData
          };
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData(oData);
    this._overlay.setModel(oModel);

    // set reference to shell and open overlay
    this._overlay.setShell(this.getView().byId("myShell"));
    this._overlay.open();
  }

});