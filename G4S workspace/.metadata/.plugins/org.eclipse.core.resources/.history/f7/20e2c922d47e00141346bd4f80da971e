jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("jSignature");
sap.ui.controller("sap.ui.demo.myFiori.view.szallitasiDetail", {
	

	handleNavButtonPress : function(evt) {
		this.nav.back("szallitasiMaster");
	},
	
	onSelect: function(evt){
		if(this.getView().byId("grpA02").getSelected() === true){
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("otherText").setVisible(false);
		}
		
		if(this.getView().byId("grpA01").getSelected() === true){
			this.getView().byId("grpB").setVisible(false);
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
//	scan : function scannerLoop(evt) {
//
//		var a = evt.getSource().getBindingContext();
//		var oData = oModel.getProperty(a.sPath);
//		var bundle = this.getView().getModel("i18n").getResourceBundle();
//		var foundItems = 0;
//		console.log('scanning');

		//var scanner = cordova.require("cordova/plugin/BarcodeScanner");

//		scanner.scan(function(result) {
//
//			//		            alert("We got a barcode\n" + 
//			//		            "Result: " + result.text + "\n" + 
//			//		            "Format: " + result.format + "\n" + 
//			//		            "Cancelled: " + result.cancelled);
//			var data = oModel.getProperty(a.sPath + "/Items");
//			for ( var i = 0; i < data.length; i++) {
//				if (oModel.getProperty(a.sPath + "/Items" + "/" + i
//						+ "/ProductID") === result.text) {
//					//alert(result.text);
//					sap.m.MessageToast.show("Confirmed");
//					oModel.setProperty(a.sPath + "/Items" + "/" + i
//							+ "/Pick up status", 'K');
//					foundItems++;
//				}
//
//				//else sap.m.MessageToast.show("Not Confirmed");	
//			}
//			if (foundItems != data.length)
//				scannerLoop();
//
//			/*
//			if (args.format == "QR_CODE") {
//			    window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
//			}
//			 */
//
//		}, function(error) {
//			console.log("Scanning failed: ", error);
//		});

	//},
	
	/*close : function(evt) {
		var a = evt.getSource().getBindingContext();
		var myView = this.getView();
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		var data = sap.ui.getCore().getModel().getProperty(a.sPath + "/DelStatus");
		if (data != '111' || data != '999') {
			sap.m.MessageToast.show("Már le van zárva!");
		} else {
		sap.m.MessageBox.confirm(bundle.getText("CloseDialogMsg"), function(
				oAction) {			
			if (sap.m.MessageBox.Action.OK === oAction){
				if(myView.byId("grpB10").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Comment", myView.byId("otherText").getValue());
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "10");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB01").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "1");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB02").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "2");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB03").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "3");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB04").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "4");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB05").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "5");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB06").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "6");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB07").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "7");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB08").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "8");					
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpB09").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "9");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				else if (myView.byId("grpA01").getSelected() === true){
					sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", "222");
					//sap.ui.getCore().getModel().setProperty(a.sPath + "/Active", null);
					sap.ui.getCore().getModel().setProperty(a.sPath + "/Signature", $("#signature").jSignature("getData","svgbase64"));
					sap.ui.getCore().getModel().setProperty(a.sPath + "/COD_Collected", this.getView.byId("uv01").getSelected());
					sap.ui.getCore().getModel().submitChanges();
					sap.ui.getCore().getModel().updateBindings(true);
					sap.ui.getCore().getModel().refresh(true);
					sap.m.MessageToast.show("Lezárva");
				}
				
				else {
					sap.m.MessageToast.show("Válassz státuszt!");
				}

			}
		},
		   
		   bundle.getText("CloseDialogTitle")
			);
		}
		 },*/
		

	
	activate: function(evt){
		var a = evt.getSource().getBindingContext();
		var context = evt.getSource().getBindingContext();
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		var myself = this;
		var isActive = 0;
		var amIActive = false;
		if(sap.ui.getCore().getModel().getProperty(a.sPath + "/DelStatus") == "999"){
			amIActive = true;
		}
		for(i = 0; i < 1000; i++){
			if(sap.ui.getCore().getModel().getProperty("/Address(" + i + ")/DelStatus") == "999"){
				isActive++;
			}
		}
		if(isActive == 0 && amIActive == false){
		if(sap.ui.getCore().getModel().getProperty(a.sPath + "/DelStatus") == '111'){
		sap.m.MessageBox.confirm(bundle.getText("ActivateDialogMsg"), function(
				oAction) {			
			if (sap.m.MessageBox.Action.OK === oAction){
				sap.ui.getCore().getModel().setProperty(a.sPath + "/DelStatus", '999');
				sap.ui.getCore().getModel().submitChanges();
				sap.ui.getCore().getModel().updateBindings(true);
				sap.ui.getCore().getModel().forceNoCache(true);
				myself.nav.to("aktualis", context);
			}
		},
		   
		   bundle.getText("ActivateDialogTitle")
		);
	}
		else {
			sap.m.MessageToast.show("Szállítás lezárva, nem aktiválható!");
		}
		}
		else if (amIActive == false){
			sap.m.MessageToast.show("Van már aktív szállítás!");
		}
		
		if(amIActive == true){
			myself.nav.to("aktualis", context);
		}
		
	},
	
	signee: function(evt) {
		 var a = evt.getSource().getBindingContext();
	     var total = 0;
	     var myView = this.getView();
	     
        $("#signature").jSignature();
        $("#signature").jSignature("reset");
        var sigdata = sap.ui.getCore().getModel().getProperty(a.sPath + "/Signature");
        if(sigdata != null){
        $("#signature").jSignature("importData", sigdata);
        }
        if(this.getView().byId("idIconTabBarMulti").getSelectedKey() == "sig"){
        	this.getView().byId("cls").setVisible(false);
        	
        }
        else{
        	this.getView().byId("cls").setVisible(true);
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
    	
    	if(sap.ui.getCore().getModel().getProperty(a.sPath + "/DelStatus") == "111"){
    		myView.byId("setActive").setText("Folytat");
		}
		else{
			myView.byId("setActive").setText("Aktivál");
		}
    	
    	
    },
    
    clear: function(){
    	 $("#signature").jSignature("reset");
    	 
    },
    
    sync: function(evt){
		var a = evt.getSource().getBindingContext();
		var myView = this.getView();
		var model = sap.ui.getCore().getModel();
		//$("#signature").jSignature("disable");
        var sigdata = model.getProperty(a.sPath + "/Signature");
        if(sigdata != null){
        $("#signature").jSignature("importData", sigdata);
        }
		
		if(model.getProperty(a.sPath + "/DelStatus") == '222'){
			this.getView().byId("grpA01").setSelected(true);
			this.getView().byId("grpB").setVisible(false);
		}
		else if(model.getProperty(a.sPath + "/COD_Collected") == '1'){
			this.getView().byId("grpA01").setSelected(true);
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '1'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setSelected(true);
			this.getView().byId("grpB01").setVisible(true);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '2'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setSelected(true);
			this.getView().byId("grpB02").setVisible(true);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '3'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setSelected(true);
			this.getView().byId("grpB03").setVisible(true);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '4'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setSelected(true);
			this.getView().byId("grpB04").setVisible(true);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '5'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setSelected(true);
			this.getView().byId("grpB05").setVisible(true);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '6'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setSelected(true);
			this.getView().byId("grpB06").setVisible(true);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '7'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setSelected(true);
			this.getView().byId("grpB07").setVisible(true);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '8'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(true);
			this.getView().byId("grpB08").setSelected(true);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '9'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setSelected(true);
			this.getView().byId("grpB09").setVisible(true);
			this.getView().byId("grpB10").setVisible(false);
			this.getView().byId("otherText").setVisible(false);
			
		}
		
		else if(model.getProperty(a.sPath + "/DelStatus") == '10'){
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(true);
			this.getView().byId("grpB").setVisible(true);
			this.getView().byId("grpB01").setVisible(false);
			this.getView().byId("grpB02").setVisible(false);
			this.getView().byId("grpB03").setVisible(false);
			this.getView().byId("grpB04").setVisible(false);
			this.getView().byId("grpB05").setVisible(false);
			this.getView().byId("grpB06").setVisible(false);
			this.getView().byId("grpB07").setVisible(false);
			this.getView().byId("grpB08").setVisible(false);
			this.getView().byId("grpB09").setVisible(false);
			this.getView().byId("grpB10").setSelected(true);
			this.getView().byId("grpB10").setVisible(true);
			this.getView().byId("otherText").setVisible(true);
			this.getView().byId("otherText").setValue(model.getProperty(a.sPath + "/Comment"));
		}
		
		else{
			this.getView().byId("grpB").setVisible(false);
			this.getView().byId("otherText").setVisible(false);
			this.getView().byId("grpA01").setSelected(false);
			this.getView().byId("grpA02").setSelected(false);
				if(model.getProperty(a.sPath + "/DelStatus") == '999'){
					this.getView().byId("setActive").setText("Folytat");
				}
			this.getView().byId("setActive").setText("Aktivál");
		}

    },
    
	
	
});