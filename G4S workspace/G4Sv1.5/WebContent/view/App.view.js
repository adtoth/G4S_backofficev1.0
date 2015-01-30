sap.ui.jsview("sap.ui.netlife.G4S.view.App", {

	getControllerName: function () {
		return "sap.ui.netlife.G4S.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();

		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.netlife.G4S.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the empty page
		var empty = sap.ui.xmlview("Empty", "sap.ui.netlife.G4S.view.Empty");
		this.app.addPage(empty, false);
		
		return this.app;
	}
});