jQuery.sap.require("sap.ui.netlife.G4S.util.Formatter");
jQuery.sap.require("sap.ui.netlife.G4S.util.Grouper");
jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("sap.ui.netlife.G4S.view.bevetMaster", {
	
	onBeforeRendering: function(){
		sap.ui.getCore().getModel().setDefaultCountMode("none");
		window.globalMaster = this;
		this.getView().addDelegate({ onAfterShow: function(evt) {
			sap.ui.getCore().getModel().updateBindings(true);
			sap.ui.getCore().getModel().forceNoCache(true);
			globalMaster.getView().byId("bevetALI").setCounter(23);			
			globalMaster.getView().byId("aktualisALI").setCounter(10);
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
	
	handleList2ItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetDetail", context);
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
		globalMaster.getView().byId("myShell").destroyContent();
		globalMaster.getView().byId("myShell").addContent(globalMaster.getView().byId("list2"));
			//globalMaster.getView().byId("myShell").addCurtainContent(globalMaster.getView().byId("list2"));
			//this.nav.to("aktualisMaster", context);
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
	
	/*handleSearch : function(evt) {
	
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("BPId",
					sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
	
		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
	*/
	/*	handleListSelect : function(evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("bevetDetail", context);
	},*/
	
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
	
	scan : function(evt) {
		var a = evt.getSource().getBindingContext();
	    window.globalVariable = this.getView();
	    window.globalBevetMaster = this;
	    window.globalFoundItems = 0;    
		window.scanner = cordova.require("cordova/plugin/BarcodeScanner");
	    scanner.scan(this.loopScan, function(fail) {
	        alert("encoding failed: " + fail);
	    });
	    
	},
		loopScan: function(result){
			var foundItems = 0;
			var allItems = 0;
			var closedItems = 0;
			var paramurl = "$filter=Today eq '1'";
			
			globalVariable.getModel().read("/Item", null, paramurl, true, function(response) {	
				for(var i = 0; i < response.results.length; i++){
					allItems = response.results.length;
					if(response.results[i].PickupStatus == 'A'){
						closedItems++;
					}
					if(response.results[i].ProductId === result.text){
						globalFoundItems++;
						if(response.results[i].PickupStatus != 'A'){
							globalVariable.getModel().setProperty("/Item(" + response.results[i].Id + ")/PickupStatus", 'A');
							globalVariable.getModel().submitChanges();
							globalVariable.getModel().updateBindings(true);
							globalVariable.getModel().forceNoCache(true);
						sap.m.MessageToast.show("Csomag felvéve");
						
						/*for(var k = 0; k < 100; k++){
							
							globalVariable.getModel().read("/Address(" + k + ")/" + "Items", null, {
									}, true, function(response) {
										var itemCount = 0;
										for(var j = 0; j < response.results.length; j++){
											if(response.results[j].PickupStatus == 'A'){
												itemCount++;
											}
											if(itemCount == response.results.length){
												globalVariable.getModel().setProperty("/Address(" + k + ")/SzallitasStatus", 'R');
												globalVariable.getModel().submitChanges();
												globalVariable.getModel().updateBindings(true);
											}
										}
										
									});
						}*/
						//var startOfIndex = 0;
						var lengthOfAddresses = 0;
						sap.ui.getCore().getModel().read("/Address", null, paramurl, true, function(response) {
							lengthOfAddresses = response.results.length;
							//startOfIndex = response.results[0].Id;
							for(var i = 0; i <  lengthOfAddresses ; i++){
								sap.ui.getCore().getModel().read("/Address(" + response.results[i].Id + ")" , null, {
									"$expand" : "Items"
								}, true, function(response) {
									var itemCount = 0;
									for(var z = 0; z < response.Items.results.length; z++){
										if(response.Items.results[z].PickupStatus === 'A'){
											itemCount++;
										}
										if(itemCount == response.Items.results.length){
											var b = response.Id;
											var m = sap.ui.getCore().getModel();
											//sap.ui.getCore().getModel().update("/Address(" + response.Id + ")/SzallitasStatus", 'R'); 
											var asd = sap.ui.getCore().getModel().getProperty("/Address(" + response.Id + ")/SzallitasStatus");
											sap.ui.getCore().getModel().setProperty("/Address(" + response.Id + ")/SzallitasStatus", 'R');
											sap.ui.getCore().getModel().submitChanges();
											sap.ui.getCore().getModel().updateBindings(true);
										}
									}
								});
									}
							
						});
						
						}
						else if(response.results[i].PickupStatus == 'A'){
							sap.m.MessageToast.show("Ez a csomag már fel van véve!");
						}
						else{
							sap.m.MessageToast.show("Nincs ilyen csomag");
						}
					}
					
				}
				
				if(globalFoundItems != allItems && result.text != ""){
					//var scanner = cordova.require("cordova/plugin/BarcodeScanner");
					scanner.scan(globalBevetMaster.loopScan, function(fail){ alert(fail);});
				}
					
			});
	
	
	
	},
	
	handleSwitchOrientation: function(oEvent) {
	    var sOrientation = this.getView().byId("mySplitContainer").getOrientation();
	    if(sOrientation == "Vertical") {
	      sOrientation = "Horizontal";
	    }
	    else {
	      sOrientation = "Vertical";
	    }
	    this.getView().byId("mySplitContainer").setOrientation(sOrientation);
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
		if ("SzallitasStatus" === key) {
			sap.ui.netlife.G4S.util.Grouper.bundle = this.getView().getModel("i18n").getResourceBundle();
			var grouper = sap.ui.netlife.G4S.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, false, grouper));
		}
	
		// update binding
		var list = this.getView().byId("list");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},
	
	  onInit: function() {
	    var oData = {logo: jQuery.sap.getModulePath("sap.ui.core", '/') + "mimes/logo/sap_50x26.png"};
	    //var oModel = new sap.ui.model.json.JSONModel();
	    //oModel.setData(oData);
	    var url = "http://office.netlife.hu:8181/futarfioriodataprovider/courierdata.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(url, true);
	    this.getView().setModel(oModel);
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