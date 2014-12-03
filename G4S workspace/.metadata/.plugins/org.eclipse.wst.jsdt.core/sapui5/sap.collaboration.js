
// ---- _global_ --------------------------------------------------------------------------

/**
 * 
 * Get the Mapping for the External Object
 * @param oOdataModel
 * @param oInternalObject
 * @param oPromise
 * @public
 * @memberOf _global_
 */
_global_.getExternalObjectMapping = function(oOdataModel,oInternalObject,oPromise) { return null; };


// ---- sap --------------------------------------------------------------------------


// ---- sap.collaboration --------------------------------------------------------------------------


// ---- sap.collaboration.AppType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.AppType.toString = function() { return ""; };

// ---- sap.collaboration.components --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.feed --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.feed.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the Feed Component.
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the Feed Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
 * @param {sap.collaboration.FeedType} feedType The type of feed to be displayed.
 * @param {string} [groupIds] A comma separated list of group IDs.
 * @param {JSON object} [object] A JSON object passed to the Feed component. 
 * It is required when the value of <tt>feedType</tt> is <tt>sap.collaboration.FeedType.object</tt> or <tt>sap.collaboration.FeedType.objectGroup</tt>.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * 		<ul>
 * 			<li><strong><tt>id</tt></strong>: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData URL containing the relative path to the object in the back-end.</li>
 * 			<li><strong><tt>type</tt></strong>: The type of the Business Object. It needs to be the OData meta data URL to the corresponding Entity Collection.</li>
 * 			<li><strong><tt>name?</tt></strong> (optional): The description of the Business Object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
 * 			<li><strong><tt>ui_url?</tt></strong> (optional): The URL to navigate to the same Business Object in the application.</li>
 * 		</ul>
 * @class Feed Component<br>
 * </p><p>
 * A Feed Component is a ui5 component that applications can use to render a <tt>sap.m.App</tt> that embeds the JAM Feed Widget.<br>
 * The Component class extends the base UI5 UIComponent class.<br>
 * This class defines the Reusable UI5 Component structure, i.e properties, aggregations and events, if any, and creates the UI5 controls to be displayed.
 * @public
 */
sap.collaboration.components.fiori.feed.Component = function(oDataServiceUrl,feedType,groupIds,object) {};
/**
 * 
 * Contract for passing the settings to the Component.
 * @public
 * @param {JSON Object} oSettings A JSON object containing the following attributes:
 * 		<ul>
 * 			<li><tt>{sap.ui.core.URI} oDataServiceUrl</tt>: The URL of the OData Service needed for the Feed Component.</li>
 * 			<li><tt>{sap.collaboration.FeedType} feedType</tt>: The type of feed to be displayed.</li>
 * 			<li><tt>{string} [groupIds?]</tt>: A comma separated list of Group IDs.</li>
 * 			<li><tt>{JSON object} object</tt>: The representation of a Business Object.</li>
 * 		</ul>
 */
sap.collaboration.components.fiori.feed.Component.prototype.setSettings = function(oSettings) { return null; };


// ---- sap.collaboration.components.fiori.feed.dialog --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.feed.dialog.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the Feed Dialog Component.
 * @since version 1.16
 * @constructor
 * @param {object} businessObject A JSON object passed to the Feed Dialog Component.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * <ul>
 * 	<li><tt>{string} appContext</tt>: The application context.  Example: "CRM", "CB", "SD", etc.</li>
 * 	<li><tt>{string} odataServicePath</tt>: The path to the OData Service and the Service name.  Example: "/sap/opu/odata/sap/APPLICATION_SRV".</li>
 * 	<li><tt>{string} collection</tt>: The name of the OData Collection. Example: "Account", "Opportunity", etc.</li>
 * 	<li><tt>{string} key</tt>: The key to identify a particular instance of the Business Object. It can be a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.</li>
 * 	<li><tt>{string} name</tt>: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123", "Account 123", etc.</li>
 * 	<li><tt>{string} ui_url</tt>: The URL to navigate to the same business object in the application.</li>
 * </ul>
 * @param {sap.ui.core.URI} [oDataServiceUrl] <b>[DEPRECATED]</b> The OData service URL needed for the Feed Dialog Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
 * @param {sap.collaboration.FeedType} [feedType] <b>[DEPRECATED]</b> The type of feed to be displayed.
 * @param {string} [groupIds] <b>[DEPRECATED]</b> A comma separated list of group IDs.
 * @param {object} [object] <b>[DEPRECATED]</b> A JSON object passed to the Feed Dialog Component. Use <b><tt>businessObject</tt></b> instead.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * 		<ul>
 * 			<li><tt>id</tt>: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData URL containing the relative path to the object in the back-end.</li>
 * 			<li><tt>type</tt>: the type of the business object. It can be any text or it can be the OData meta data URL to the object Entity Type.</li>
 * 			<li><tt>name</tt> (optional): the description of the business object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
 * 			<li><tt>ui_url</tt> (optional): the URL to navigate to the same business object in the application.</li>
 * 		</ul>
 * Note: The object is passed by reference, which means that the attributes will be modified in the original object, for example, when the URLs contained in the id and type attributes are mapped (via OData call).
 * @class Feed Dialog Component
 * </p><p>
 * A Feed Dialog Component is a ui5 component that applications can use to render the feed widget view in a dialog 
 * in order to discuss information in SAP JAM by adding and replying to feed posts related to a specific Business Object.
 * @extends sap.ui.core.UIComponent
 * @public
 */
sap.collaboration.components.fiori.feed.dialog.Component = function(businessObject,oDataServiceUrl,feedType,groupIds,object) {};
/**
 * 
 * Open the Feed Dialog.
 * @public
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.open = function() { return null; };

/**
 * 
 * Contract for passing the settings to the Component.
 * @public
 * @param {object} oSettings A JSON object containing the following attributes:
 * 		<ul>
 * 			<li><tt>{object} businessObject</tt>: the representation of a business object.</li>
 * 			<li><tt>{sap.collaboration.FeedType} <b>[DEPRECATED]</b> feedType</tt>: the type of feed to be displayed.</li>
 * 			<li><tt>{string} <b>[DEPRECATED]</b> [groupIds?]</tt>: a comma separated list of group IDs.</li>
 * 			<li><tt>{object} <b>[DEPRECATED]</b> object</tt>: the representation of a business object. Use <tt>businessObject</tt> instead</li>
 * 		</ul>
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setSettings = function(oSettings) { return null; };


// ---- sap.collaboration.components.fiori.notification --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.notification.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the notification component
 * @since version 1.18
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
 * @param {sap.ui.core.int} [numberOfNotifications] This is the maximum number of notifications to be displayed. The default value is 10.
 * @param {sap.ui.core.int} [transitionInterval] This is the amount of time in seconds a notification is displayed before the next notification is displayed. The default value is 10.
 * @param {sap.ui.core.int} [refreshInterval] This is the amount of time in seconds before calling the backend to update the notifications. The default value is 300.
 * @param {sap.ui.core.URI} notificationsTargetUrl When a user clicks on the component, a new browser tab will open at this URL.
 * @class Notification Component
 * </p><p>
 * A Notification Component is a ui5 component that displays a SAP Jam member's latest notifications.
 * </p><p>
 * This component refreshes itself when the number of seconds specified in the <tt>refreshInterval</tt> parameter elapses.
 * When refreshing, the backend is called to obtain the latest notifications.
 * @public
 */
sap.collaboration.components.fiori.notification.Component = function(oDataServiceUrl,numberOfNotifications,transitionInterval,refreshInterval,notificationsTargetUrl) {};

// ---- sap.collaboration.components.fiori.sharing --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.sharing.attachment --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.sharing.attachment.Attachment --------------------------------------------------------------------------

/**
 * 
 * <p>This constructor must be called in the following way:</p> 
 * <p>new Attachment("name", "mimeType", "url")</p>
 * <p>name, mimeType, and url are only place holders and can be any string.</p>
 * @since version 1.20
 * @constructor
 * @param {string} name: The file's name.
 * @param {string} mimeType: The file's mime type.
 * @param {string} url: A url that points to the file.
 * @class Attachment
 * </p><p>
 * Attachment objects represent files.
 * @public
 */
sap.collaboration.components.fiori.sharing.attachment.Attachment = function(name:,mimeType:,url:) {};

// ---- sap.collaboration.components.fiori.sharing.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the share component
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
 * @param {JSON object} [object] A JSON object passed to the share component. This object contains the following properties:
 * 		<ul>
 *  			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a URL that navigates back to the same object in the application</li>
 *  			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
 * 			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
 * 		</ul>
 * @param {JSON object} [externalObject]  A Business Object such as an Opportunity, Sales Order, Account, etc. from the back-end that will be shared as a Featured External Object in a Group in Jam.
 * <code>
 * <ul>
 * 	<li>{string} appContext: The application context. Example: "CRM", "SD", etc.</li>
 * 	<li>{string} odataServicePath: The relative path to the OData Service.  Example: "/sap/opu/odata/sap/ODATA_SRV"</li>
 * 	<li>{string} collection: The name of the OData Collection. Example: "Account", "Opportunity", etc.</li>
 * 	<li>{string} key: The key to identify a particular instance of the Business Object. It can be a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.</li>
 * 	<li>{string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123", "Account 123", etc.</li>
 * </ul>
 * </code>
 * These attributes are not enforced by the UI (missing or incorrect values are not validated), but they are required to make the integration work.
 * These attributes also should be mapped in the Back-end System and Jam in order to make the External Object work.
 * <br><b>Note:</b> the externalObject is dependent on object.id, therefore, the object.id must also be passed to the Share Component. See the parameter "object" for more information.
 * @param {object} [attachments] When you want to provide the user with the option to share file attachments, then the following properties need to be specified:
 * <ul>
 *   <li>attachmentsArray: An array of {@link sap.collaboration.components.fiori.sharing.attachment.Attachment} objects. This array offers users a list of files they can attach.</li>
 * </ul>
 * @class Share Component
 * </p><p>
 * A Share Component is a ui5 component that applications 
 * can use to share information to SAP Jam
 * @public
 */
sap.collaboration.components.fiori.sharing.Component = function(oDataServiceUrl,object,externalObject,attachments) {};
/**
 * 
 * Setter for the Component settings.
 * @param {JSON Object} oSettings A JSON object used to set the component settings, this object should contains the same 
 * properties used in the constructor. 
 * @public
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setSettings = function(oSettings) { return null; };

/**
 * 
 * Shares the data to Jam group
 * @public
 */
sap.collaboration.components.fiori.sharing.Component.prototype.shareToJam = function() { return null; };


// ---- sap.collaboration.components.fiori.sharing.dialog --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.sharing.dialog.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the share dialog component
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] DEPRECATED The OData service URL will no longer be taken into account.
 * @param {object} [object] A JSON object passed to the share component. This object contains the following properties:
 * 		<ul>
 * 			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a URL that navigates back to the same object in the application</li>
 * 			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
 * 			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
 * 		</ul>
 * @param {object} [externalObject]  A Business Object such as an Opportunity, Sales Order, Account, etc. from the back-end that will be shared as a Featured External Object in a Group in Jam.
 * <code>
 * <ul>
 * 	<li>{string} appContext: The application context. Example: "CRM", "SD", etc.</li>
 * 	<li>{string} odataServicePath: The relative path to the OData Service.  Example: "/sap/opu/odata/sap/ODATA_SRV"</li>
 * 	<li>{string} collection: The name of the OData Collection. Example: "Account", "Opportunity", etc.</li>
 * 	<li>{string} key: The key to identify a particular instance of the Business Object. It can be a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.</li>
 * 	<li>{string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123", "Account 123", etc.</li>
 * </ul>
 * </code>
 * These attributes are not enforced by the UI (missing or incorrect values are not validated), but they are required to make the integration work.
 * These attributes also should be mapped in the Back-end System and Jam in order to make the External Object work.
 * <br><b>Note:</b> the externalObject is dependent on object.id, therefore, the object.id must also be passed to the Share Component. See the parameter "object" for more information.
 * @param {object} [attachments] When you want to provide the user with the option to share file attachments, then the following properties need to be specified:
 * <ul>
 *   <li>attachmentsArray: An array of {@link sap.collaboration.components.fiori.sharing.attachment.Attachment} objects. This array offers users a list of files they can attach.</li>
 * </ul>
 * @class Share Dialog Component
 * </p><p>
 * A Share Dialog Component is a ui5 component that applications 
 * can use to render the share component in a dialog and then can 
 * be used to share information to SAP Jam
 * @public
 */
sap.collaboration.components.fiori.sharing.dialog.Component = function(oDataServiceUrl,object,externalObject,attachments) {};
/**
 * 
 * Opens the share component dialog
 * @public
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.open = function() { return null; };

/**
 * 
 * Setter for the Component settings.
 * @param {object} oSettings A JSON object used to set the component settings, this object should contains the same 
 * properties used in the constructor. 
 * @public
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.setSettings = function(oSettings) { return null; };


// ---- sap.collaboration.FeedType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.FeedType.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.collaboration.AppType --------------------------------------------------------------------------

/**
 * 
 * Fiori Split App
 * @public
 * @memberOf sap.collaboration.AppType
 */
sap.collaboration.AppType.split = null;

/**
 * 
 * SAP Jam Feed Widget Wrapper
 * @public
 * @memberOf sap.collaboration.AppType
 */
sap.collaboration.AppType.widget = null;


// ---- sap.collaboration.FeedType --------------------------------------------------------------------------

/**
 * 
 * Company feed type
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.company = null;

/**
 * 
 * Follows feed type
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.follows = null;

/**
 * 
 * Group feed type
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.group = null;

/**
 * 
 * Oject feed type
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.object = null;

/**
 * 
 * Object group feed type
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.objectGroup = null;

