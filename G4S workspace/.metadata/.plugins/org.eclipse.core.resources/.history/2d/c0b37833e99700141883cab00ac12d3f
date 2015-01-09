jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("jSignature");
jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.aktualis", {
	
	onBeforeRendering: function(){ // binding model synchronisation
		window.globalAktualis = this;
		
        this.getView().addDelegate({ onAfterShow: function(evt) {
        	var a = globalAktualis.getView().getBindingContext();
        	//globalAktualis.clear();
        	globalAktualis.getView().byId("idIconTabBarMulti").setSelectedKey("addr");
        	globalAktualis.getView().byId("idIconTabBarMulti").setExpanded(true);
		     var myView = globalAktualis.getView();   	
		     var model = sap.ui.getCore().getModel();
		     window.signeeCounter = 0;
		     myView.byId("takeOverName").setValue("");
		     myView.byId("grpA01").setSelected(false);
		     myView.byId("grpA02").setSelected(false);
		     myView.byId("otherText").setValue("");
		     myView.byId("newZIP").setValue("");
		     myView.byId("newCity").setValue("");
		     myView.byId("newDate").setValue("");		     
		     
        }});
       
	},	
	
	onInit: function(){
		 $("#signature").jSignature();
	},
	
	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},
	
	
	onSelect: function(evt){
		if(this.getView().byId("grpA02").getSelected() === true){
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("otherText").setVisible(false);
		}
		
		if(this.getView().byId("grpA01").getSelected() === true){
			this.getView().byId("grpB").setVisible(false);
			this.getView().byId("otherText").setVisible(true);
		}
		
	},
	
	onSelectOther: function(evt){
		if(this.getView().byId("grpB10").getSelected() === true){
			this.getView().byId("otherText").setVisible(true);
		}
		else {
			this.getView().byId("otherText").setVisible(false);
		}
	},
	
	close : function(evt) {
		var a = evt.getSource().getBindingContext();
		var myView = this.getView();
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		var data = sap.ui.getCore().getModel().getProperty(a.sPath + "/DelStatus");
		if (data != '111' && data != '999') { //999-as státusz: aktív, 111-es Még nincs kiszállítva
			sap.m.MessageToast.show("Már le van zárva!");
		} else {
		sap.m.MessageBox.confirm(bundle.getText("CloseDialogMsg"), function(
				oAction) {			
			if (sap.m.MessageBox.Action.OK === oAction){
				if(myView.byId("grpB10").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Comment", myView.byId("otherText").getValue());
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "10");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB01").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "1");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB02").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "2");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB03").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "3");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB04").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "4");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB05").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "5");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB06").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "6");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB07").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "7");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB08").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "8");					
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB09").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "9");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpA01").getSelected() === true){
					if(myView.byId("takeOverName").getValue().length > 4){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "222");
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData"));
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Recipient", myView.byId("takeOverName").getValue());
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Comment", myView.byId("otherText").getValue());
					/*if(myView.byId("uv01").getSelected() == true ){
						sap.ui.getCore().getModel().setProperty(a.sPath + "/COD_Collected", 1);
					}
					else sap.ui.getCore().getModel().setProperty(a.sPath + "/COD_Collected", 0);*/
					
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
					}
					else sap.m.MessageToast.show("Túl rövid átvevő név!");
				}
				
				else {
					sap.m.MessageToast.show("Válassz státuszt!");
				}
				if(myView.byId("newZIP").getValue() != '' && myView.byId("newCity").getValue() != '' && myView.byId("newStreet").getValue() != ''){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/TPostalCode", myView.byId("newZIP").getValue());
					sap.ui.getCore().getModel().setProperty(a.sPath + "/TCity", myView.byId("newCity").getValue());
					sap.ui.getCore().getModel().setProperty(a.sPath + "/TStreet", myView.byId("newStreet").getValue());
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
				}
				else if((myView.byId("newZIP").getValue() != '') && (myView.byId("newCity").getValue() == '' || myView.byId("newStreet").getValue() == '')){
					sap.m.MessageToast.show("Hiányzó címadat!");
				}
				else if((myView.byId("newCity").getValue() != '') && (myView.byId("newZIP").getValue() == '' || myView.byId("newStreet").getValue() == '')){
					sap.m.MessageToast.show("Hiányzó címadat!");
				}
				else if((myView.byId("newStreet").getValue() != '') && (myView.byId("newCity").getValue() == '' || myView.byId("newStreet").getValue() == '')){
					sap.m.MessageToast.show("Hiányzó címadat!");
				}
			}
		},
		   
		   bundle.getText("CloseDialogTitle")
			);
		}
	},
	
	suspend: function(evt){
		var a = evt.getSource().getBindingContext();
		var myView = this.getView();
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(bundle.getText("SuspendDialogMsg"), function(
				oAction) {			
			if (sap.m.MessageBox.Action.OK === oAction){
	
				sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "555");
				sap.ui.getCore().getModel().submitChanges();
				sap.ui.getCore().getModel().updateBindings(true);
				sap.ui.getCore().getModel().refresh(true);
				//this.nav.to("Master");
			}
		},
		   
		   bundle.getText("CloseDialogTitle")
			);
	},
	
	signee: function(evt) {
		if(signeeCounter === 0){
			$("#signature").jSignature();
			$("#signature").jSignature("reset");
			signeeCounter++;
		}
		
		 var a = evt.getSource().getBindingContext();
	     var total = 0;
	     var myView = this.getView();
	    	     
        if(this.getView().byId("idIconTabBarMulti").getSelectedKey() == "sig"){
        	this.getView().byId("cls").setVisible(false);
        	this.getView().byId("clr").setVisible(true);
        }
        else{
        	this.getView().byId("cls").setVisible(true);
        	this.getView().byId("clr").setVisible(false);
        }
        
        // totál utánvét összeg számítás
        sap.ui.getCore().getModel().read(a.sPath, null, {
			"$expand" : "Items"
		}, true, function(response) {
			for(var i = 0; i < response.Items.results.length; i++){
				total += sap.ui.getCore().getModel().getProperty("/Item(" + response.Items.results[i].Id + ")/Price");
				myView.byId("total_id").setNumber(total);
			}		
		});
   	
    
    },
    
    clear: function(){
    	 $("#signature").jSignature("reset");
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
			
			globalVariable.getModel().read("/Item", null, {
			}, true, function(response) {	
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
						
						for(var k = 0; k < 100; k++){
							
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
						}
						
						}
						else if(response.results[i].PickupStatus == 'A'){
							sap.m.MessageToast.show("Ez a csomag már fel van véve!");
						}
					}
					
				}
				
				
				if(globalFoundItems != allItems && result.text != ""){
					//var scanner = cordova.require("cordova/plugin/BarcodeScanner");
					scanner.scan(globalBevetMaster.loopScan, function(fail){ alert(fail);});
				}
				
					
			});
			
		},
	
	
});