jQuery.sap.require("sap.ui.netlife.G4S.util.Formatter");
sap.ui.controller("sap.ui.netlife.G4S.view.Master", {

	/*onInit: function(){
		document.addEventListener("backbutton", this.yourCallbackFunction, false);
	},
	yourCallbackFunction: function(){
		alert("back");
	},*/
	onBeforeRendering: function(){
		sap.ui.getCore().getModel().setDefaultCountMode("none");
		window.globalMaster = this;
		this.getView().addDelegate({ onAfterShow: function(evt) {
			sap.ui.getCore().getModel().updateBindings(true);
			sap.ui.getCore().getModel().forceNoCache(true);
			globalMaster.getView().byId("bevetTile").setNumber(0);			
			globalMaster.getView().byId("aktualisTile").setNumber(0);
			globalMaster.getView().byId("leadSikeresLezartTile").setNumber(0);
			globalMaster.getView().byId("leadSikertelenLezartTile").setNumber(0);
			globalMaster.getView().byId("felfuggSzallTile").setNumber(0);
			globalMaster.getView().byId("utanvetTile").setNumber(0);
			
			var depo = 0;
			var bevet = 0;
			var paramurl = "$filter=Today eq '1'";
			var response;
			
			globalMaster.getView().getModel().read("/Address", null, paramurl, true, function(response){
				globalMaster.getAddress(response);
			});
			
			globalMaster.getView().getModel().read("/Item", null, paramurl, true, function(response) {	
				for(var i = 0; i < response.results.length; i++){
						if(response.results[i].PickupStatus == 'M'){
							bevet++;
						}
					
				}
				globalMaster.getView().byId("bevetTile").setNumber(bevet);
				
				var lengthOfAddresses = 0;
				//var startOfIndex = 0;
				sap.ui.getCore().getModel().read("/Address", null, paramurl, true, function(response) {
					lengthOfAddresses = response.results.length;
					//startOfIndex = response.results[0].Id;
					for(var i = 0; i < lengthOfAddresses ; i++){
						sap.ui.getCore().getModel().read("/Address(" + response.results[i].Id + ")" , null, {
							"$expand" : "Items"
						}, true, function(response) {
							if((response.DelStatus != "222" && response.PicType == "D") || (response.DelStatus == "222" && response.PicType == "U")){
								for(var i = 0; i < response.Items.results.length; i++){
									depo++;
									globalMaster.getView().byId("depoTile").setNumber(depo);
								}
								
							}
							
						});								
					}					
				});
			});
        }});
	},
	
	getAddress: function(response) {

			var leadas = globalMaster.getView().byId("bevetTile").getNumber();
			var lezartLeadas = globalMaster.getView().byId("aktualisTile").getNumber();
			var lezartFelvetel = globalMaster.getView().byId("leadSikeresLezartTile").getNumber();
			var felvetel = globalMaster.getView().byId("leadSikertelenLezartTile").getNumber();
			var bevet = globalMaster.getView().byId("felfuggSzallTile").getNumber();

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
		
		globalMaster.getView().byId("bevetTile").setNumber(leadas);
		globalMaster.getView().byId("aktualisTile").setNumber(lezartLeadas);
		globalMaster.getView().byId("leadSikeresLezartTile").setNumber(felvetel);
		globalMaster.getView().byId("leadSikertelenLezartTile").setNumber(lezartFelvetel);
		globalMaster.getView().byId("felfuggSzallTile").setNumber(aktualis);
		
	},
	
	handleBevetelezesPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("bevetTile").getNumber() >= 1){
			this.nav.to("bevetMaster", context);
		}
	},
	
	handleAktualisPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("aktualisTile").getNumber() >= 1){
			this.nav.to("aktualisMaster", context);
		}
	},
	
	handleLezartLeadasSikeresPress : function (evt) {
		var context = evt.getSource().getBindingContext();
//		if(globalMaster.getView().byId("leadSikeresLezartTile").getNumber() >= 1){
			this.nav.to("leadSikeresLezartMaster", context);
//		}
	},
	
	handleLezartLeadasSikerestelenPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("leadSikertelenLezartTile").getNumber() >= 1){
			this.nav.to("leadSikertelenLezartMaster", context);
		}
	},
	
	handleFelfuggSzall : function(evt){
		var context = evt.getSource().getBindingContext();
		if(globalMaster.getView().byId("felfuggSzallTile").getNumber() >= 1){
			this.nav.to("felfuggSzallMaster", context);
		}
	},
	
	handleUtanvetPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("utanvet", context);
	},
	
   /*handlePhonePress: function(){
	   var b = this.getView().byId("phoneLink").getHref();
	   document.location.href = b;
	},*/

	handlePosPress: function(){
		navigator.geolocation.getCurrentPosition(function onSuccess(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude; 
			alert('Latitude: '          + position.coords.latitude          + '\n' +
			          'Longitude: '         + position.coords.longitude         + '\n' +
			          'Altitude: '          + position.coords.altitude          + '\n' +
			          'Accuracy: '          + position.coords.accuracy          + '\n' +
			          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			          'Heading: '           + position.coords.heading           + '\n' +
			          'Speed: '             + position.coords.speed             + '\n' +
			          'Timestamp: '         + position.timestamp                + '\n');
		});
	},

});