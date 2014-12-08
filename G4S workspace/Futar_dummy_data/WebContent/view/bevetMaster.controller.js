jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.ui.demo.myFiori.util.Grouper");
sap.ui.controller("sap.ui.demo.myFiori.view.bevetMaster", {
	

	/*handleListItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetDetail", context);
	},*/

	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
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

	scan: function (evt) {
		var foundItems = 0;
        var view = this.getView();
        window.globalVariable = view;
        window.globalThis = this;
        window.globalFoundItems = 0;
        asd = this.getView();
        //var scanner = cordova.require("cordova/plugin/BarcodeScanner");
        window.scanner = cordova.require("cordova/plugin/BarcodeScanner");
       // while(foundItems != 5){
        scanner.scan(this.loopScan, function(fail) {
            alert("encoding failed: " + fail);
        });
        //}
    
    },
	 loopScan: function (result) {
			var foundItems = 0;
			var allItems = 0;
			//var view = this.getView();
			for(var i = 0; i < 3; i++){
				if(globalVariable.getModel().getProperty("/Item/" + i + "/ProductId") === result.text){
					globalVariable.getModel().setProperty("/Item/" + i + "/PickupStatus", 'A');
					foundItems++;
					}         		
		    }        	
			if (foundItems == 0){ 
				sap.m.MessageToast.show("Not Confirmed");
			
			}
			
			else if (foundItems != 0){ 
				sap.m.MessageToast.show("Confirmed");
				
			}
			
			for(var a = 0; a < 3; a++){
				if(globalVariable.getModel().getProperty("/Item/" + a + "/PickupStatus") === 'A'){
					globalFoundItems++;
				}
			}
			if(globalFoundItems != 3 & result.text != ""){
				//var scanner = cordova.require("cordova/plugin/BarcodeScanner");
				scanner.scan(globalThis.loopScan, function(fail){ alert(fail);});
			}
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