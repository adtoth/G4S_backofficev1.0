jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.ui.demo.myFiori.util.Grouper");
sap.ui.controller("sap.ui.demo.myFiori.view.bevetMaster", {
	

	handleListItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetDetail", context);
	},

	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},

	handleSearch : function(evt) {

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

	handleListSelect : function(evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("bevetDetail", context);
	},

	handleGroup : function(evt) {

		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("LifecycleStatus" === key) {
			sap.ui.demo.myFiori.util.Grouper.bundle = this.getView().getModel(
					"i18n").getResourceBundle();
			var grouper = sap.ui.demo.myFiori.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, true, grouper));
		}

		// update binding
		var list = this.getView().byId("list");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},

	scan : function(evt) {
		var a = evt.getSource().getBindingContext();
		
		var foundItems = 0;
		var scanner = cordova.require("cordova/plugin/BarcodeScanner");
		var found = 0;
		var closedItems = 0;
		scanner.scan(function(result) {
			
			sap.ui.getCore().getModel().read("/Item", null, {
			}, true, function(response) {	
				for(var i = 0; i < response.results.length; i++){
					if(response.results[i].PickupStatus == 'A'){
						closedItems++;
					}
					if(response.results[i].ProductId === result.text){
						found++;
						if(response.results[i].PickupStatus != 'A'){
						sap.ui.getCore().getModel().setProperty("/Item(" + response.results[i].Id + ")/PickupStatus", 'A');
						sap.ui.getCore().getModel().submitChanges();
						sap.ui.getCore().getModel().updateBindings(true);
						sap.ui.getCore().getModel().forceNoCache(true);
						sap.m.MessageToast.show("Csomag felvéve");
						}
						else if(response.results[i].PickupStatus == 'A'){
							sap.m.MessageToast.show("Ez a csomag már fel van véve!");
						}
					}
					
				}
				
				if(found == 0) {
					sap.m.MessageToast.show("Nincs ilyen azonosítójú csomag");
				}
				
/*				if(closedItems == response.Items.results.length){
					sap.ui.getCore().getModel().setProperty(
							a.sPath + "/SzallitasStatus", 'R');
					sap.m.MessageToast.show("Lezárva");
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().forceNoCache(true);
				}*/
					
			});


		});

	},
	
	scan_debug : function(evt) {
			sap.ui.getCore().getModel().read("/Item", null, {
			}, true, function(response) {	
				for(var i = 0; i < response.results.length; i++){
					if(response.results[i].PickupStatus == 'A'){
						closedItems++;
					}
					if(response.results[i].ProductId === result.text){
						found++;
						if(response.Items.results[i].PickupStatus != 'A'){
						sap.ui.getCore().getModel().setProperty("/Item(" + response.results[i].Id + ")/PickupStatus", 'A');
						sap.ui.getCore().getModel().submitChanges();
						sap.ui.getCore().getModel().updateBindings(true);
						sap.ui.getCore().getModel().forceNoCache(true);
						sap.m.MessageToast.show("Csomag felvéve");
						}
						else if(response.results[i].PickupStatus == 'A'){
							sap.m.MessageToast.show("Ez a csomag már fel van véve!");
						}
					}
					
				}
				
				if(found != 0) {
					sap.m.MessageToast.show("Nincs ilyen azonosítójú csomag");
				}
					
					
			});

	},
	
	handleGroup : function(evt) {

		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("SzallitasStatus" === key) {
			sap.ui.demo.myFiori.util.Grouper.bundle = this.getView().getModel("i18n").getResourceBundle();
			var grouper = sap.ui.demo.myFiori.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, false, grouper));
		}

		// update binding
		var list = this.getView().byId("list");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},

});