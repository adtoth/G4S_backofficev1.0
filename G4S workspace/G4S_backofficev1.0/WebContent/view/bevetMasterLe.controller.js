jQuery.sap.require("sap.ui.netlife.G4S.util.Formatter");
jQuery.sap.require("sap.ui.netlife.G4S.util.Grouper");
jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("sap.ui.netlife.G4S.view.bevetMasterLe", {
	
	
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
					//if(response.results[i].PicType == 'D'){
						if(response.results[i].PickupStatus == 'A'){
							sumFelveve += response.results[i].Quantity;
						} else if(response.results[i].PickupStatus == 'M'){
							sumFelvetlen += response.results[i].Quantity;	
						}
					//}
				}
							
		});
		this.getView().byId("bevetNumText").setText(sumFelveve);
		this.getView().byId("bevetFelvetlenNumText").setText(sumFelvetlen);
		
		this.getView().byId("col1").setValue(sumFelvetlen);
		this.getView().byId("col2").setValue(sumFelveve);		
		this.getView().byId("chart").setTooltip("Felvéve: " + sumFelveve + "\n" + "Nincs felvéve: " + sumFelvetlen);
		/*
		var oModel = new sap.ui.model.json.JSONModel();
		var names = [
		             {firstname:"Jim1", lastname: "Dan1"},
		             {firstname:"Jim2", lastname: "Dan2"},
		             {firstname:"Jim3", lastname: "Dan3"},
		            ]; 
	    this.getView().byId("packageTable").setModel(oModel);
	    
		/*
		var dimension = new sap.viz.ui5.data.MeasureDefinition();
		var dimension2 = new sap.viz.ui5.data.DimensionDefinition();
		
		dimension.setName("FelvettCsomagok");
		dimension.bindProperty("value", sumFelveve);
		
		dimension2.setName("FelvetlenCsomagok");
		dimension2.bindProperty("value", sumFelvetlen);
		
		//globalMaster.getView().byId("dataSet").bindData("/Courier");
		//globalMaster.getView().byId("dataSet").addMeasure(dimension);
		//globalMaster.getView().byId("dataSet").addDimension(dimension2);
		
		
		
		/*
		  var oModel = new sap.ui.model.json.JSONModel({
		      "Products":[
		                 {
		                 "label": "felvettCsomagok",
		                 "quantity": sumFelvetlen,
		                 },
		                 {
		                 "label": "osszesCsomag",
		                 "quantity": 500,
		                 }
		                 ]
		  });
		  globalMaster.getView().byId("dataSet").setData("/Courier");
		  globalMaster.getView().byId("dimension1").setValue("quantity");
		  globalMaster.getView().byId("dimension2").setValue("label");
		  
		/*
		var oVizFrame = this.getView().byId("idVizFrameStackedColumn");
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
	            dimensions: [{
	                name: "Year",
	                value: 'sap'
	            }],
	            measures: [
	                {
	                    name: 'Revenue', 
	                    value: '{Id}' 
	                }
	            ],
	            data: {
	                path: "/Courier"
	            }
	         });

	    oVizFrame.setDataset(oDataset);
	    oVizFrame.setModel(globalMaster.getView().getModel());
		
	    var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid' : "primaryValues",
            'type' : "Measure",
            'values' : ["Revenue"]
        }), feedAxisLabels = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid' : "axisLabels",
            'type' : "Dimension",
            'values' : ["Year"]
        }), feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid' : "regionColor",
            'type' : "Dimension",
            'values' : ["City"]
        });

    oVizFrame.setVizProperties({
          valueAxis : {
            label : {
                   formatString : 'u'
            }
          },
      legend : {
        title: {visible : false}
      },
      
          title: {
              visible: true,
              text: 'Revenue by City and Year'
          }
  });
    
    
    oVizFrame.addFeed(feedPrimaryValues);
    oVizFrame.addFeed(feedAxisLabels);
        oVizFrame.addFeed(feedColor);
//    oPopOver.connect(oVizFrame.getVizUid());
	
	*/
	},
	 
	onDialogCloseButton: function (oEvent) {
		var sType = oEvent.getSource().data("dialogType");
		this[sType].close();
    },
	
	onStdDialogPress: function (oEvent) {
	    this.openDialog('Std');
	},
	
	openDialog: function (sType) {
	    if (!this[sType]) {
	      this[sType] = sap.ui.xmlfragment(
	        "sap.m.sample.Dialog." + sType + "Dialog",
	        this // associate controller with the fragment
	      );
	      this.getView().addDependent(this[sType]);
	    }

	    this[sType].bindElement("/ProductCollection/0");
	    // toggle compact style
	    jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this[sType]);
	    this[sType].open();
	  },
		
   openDialog: function (sType) {
	    if (!this[sType]) {
	      this[sType] = sap.ui.xmlfragment(
	        "sap.ui.netlife.G4S.view." + sType + "Dialog",
	        this // associate controller with the fragment
	      );
	      this.getView().addDependent(this[sType]);
	    }
	    /*
	    sap.ui.getCore().getModel().read("/Address(1)", null , {}, false, function(response){
			globalMaster.getView().byId("tPostalCode").setText("asd");
			var felirat = response.TPostalCode;
		});*/
	    //itt kell majd bebindolni a megfelelő Address-t
	    this[sType].bindElement("/Address(1)");
	    // toggle compact style
	    jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this[sType]);
	    this[sType].open();
    },

    handleRowPressed: function (oEvent) {
      var context = oEvent.getSource().getBindingContext();
      //alert(context.sPath);
      this.openDialog('Std');
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