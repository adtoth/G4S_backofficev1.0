
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ca --------------------------------------------------------------------------


// ---- sap.ca.scfld --------------------------------------------------------------------------


// ---- sap.ca.scfld.md --------------------------------------------------------------------------


// ---- sap.ca.scfld.md.ApplicationFacade --------------------------------------------------------------------------

/**
 * 
 * @class llll This class represents a Master Detail App. It provides access to generic services.
 * Note that the App does not create an instance of this class on its own.
 * The App will get access to this instance in its implementation of &lt;identity&gt;.Configuration.getApplicationParameters(oApplicationFacade).
 * It is recommended that the app stores the reference to this instance in an appropriate variable .
 * @extends sap.ui.base.Object
 * @public
 */
sap.ca.scfld.md.ApplicationFacade = function() {};
/**
 * 
 * Deregisters a function that was previously registered with method "registerOnMasterListRefresh". The method
 * parameters have to be the same as during the registration
 * @param {function} fHandler The function that has to be called at a master list refresh
 * @param {object} oListener is the object that provides the handler function
 * @public
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.deRegisterOnMasterListRefresh = function(fHandler,oListener) { return null; };

/**
 * 
 * Retrieve a model stored in the global hashmap based on its name
 * @param {string} sName the string of the model to retrieve
 * @public
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.getApplicationModel = function(sName) { return null; };

/**
 * 
 * Return a specific ODataModel based on its name as defined in the configuration.</br>
 * Note that there is a special logic in case the specified name is <i>i18n</i>. In this case the
 * resource model for this App is returned.
 * @param {string} sName the name of the ODataModel to retrieve, or undefined for the default model
 * @returns {sap.ui.model.Model} the requested ODataModel. Actually this will be an
 * instance of <code>sap.ui.model.odata.ODataModel</code>. The only exception is, when <code>sName == 'i18n'</code>.
 * In this case it is an instance of <code>sap.ui.model.resource.ResourceModel</code>.  
 * @public
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.getODataModel = function(sName) { return new sap.ui.model.Model(); };

/**
 * 
 * Use this method to access the resource bundle of the App
 * @returns the resource bundle of this App
 * @public
 * @memberOf sap.ca.scfld.md.ApplicationFacade
 */
sap.ca.scfld.md.ApplicationFacade.prototype.getResourceBundle = function() { return null; };

/**
 * 
 * returns the scaffolding language model
 * @public
 * @returns {object} the scaffolding language model
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.getUiLibResourceModel = function() { return new Object(); };

/**
 * 
 * Utility function to determine if we are running the application against
 * some mock data
 * @returns {boolean} A flag depending on the <code>responderOn</code> uri
 *          parameter
 * @public
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.isMock = function() { return false; };

/**
 * 
 * Registers a function to be called directly after a refresh was performed on the Master List of a master-detail app.
 * The function will be called for all master list refreshes regardless if they were triggered manually by clicking
 * "refresh" or automatically during a back end search
 * @param  {function} fHandler The function that has to be called at a master list refresh
 * @param  {object} oListener is the object that provides the handler function
 * @public
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.registerOnMasterListRefresh = function(fHandler,oListener) { return null; };

/**
 * 
 * Store a sap.ui.model instance in a global hashmap for the application.
 * This is used to allow apps to share models between different views.
 * The models will not be assigned to the views automatically but can be retrieved and assigned manually.
 * This is mainly made to have dirty hacks like settings model on sap.ui.getCore() or reading data from the oSplitContainer
 * @param {string} sName The name for the model (must be non null)
 * @param {sap.ui.model.Model} oModel the model to store
 * @public
 * 
 */
sap.ca.scfld.md.ApplicationFacade.prototype.setApplicationModel = function(sName,oModel) { return null; };


// ---- sap.ca.scfld.md.ComponentBase --------------------------------------------------------------------------

/**
 * 
 * @class This is the base class for the Component.js class of Fiori apps. IT provides a simplified routing interface for inner app navigation
 * @extends sap.ui.core.UIComponent
 * @public
 */
sap.ca.scfld.md.ComponentBase = function() {};
/**
 * 
 * Creates the metadata Object of the app
 * @param {string} sAppType identifies the used template. Valid values are "MD" for Master/Detail and "FS" for full screen. This parameter is set automatically by the template and should not be changed manually
 * @param {object} oAppMeta a metadata object containing information about the app used by the shell and the Fiori scaffolding framework.
 * <p>The Object consists of the following attributes (additional attributes can be added):</p>
 * <ul>
 *   <li> <b>name</b> {string} Name of the application. Set automatically during the generation of the application</li>
 *   <li> <b>version</b> {string} Version of the applicationSet automatically during the generation of the application</li>
 *   <li> <b>library</b> Not sure... contains the artefact id. Set automatically during the generation of the application</li>
 *   <li> <b>includes</b> {list} Not sure... is a list</li>
 *   <li> <b>dependencies</b> {oject} JSON object containing two attributes:
 *     <ul>
 *      <li><b>libs</b> {list} not sure... list of libraries pre filled during creation of the app</li>
 *      <li><b>components</b> {list} not sure... list of? usually empty </li>
 *     </ul>
 *   </li>
 *   <li> <b>config</b> {object} not sure... probably obsolete don't use anymore</li>
 *   <li> <b>viewPath</b> {string} Location of the views. Used by the inner app navigation to automatically create views. Set automatically during the generation of the application</li>
 *   <li> <b>fullScreenPageRoutes</b> {object} -optional- This object contains one attribute for each route that leads to a full screen view. The structure
 *    of such an attribute is as follows:
 *     <ul>
 *       <li><b>&lt;nameOfRoute></b> {object} The attribute name is the same as the name of the route it describes</li>
 *       <ul>
 *         <li><b>pattern</b> {string} URL pattern used to recognize the route</li>
 *         <li><b>view</b> {string} Name of the view to which this route leads</li>
 *       </ul>
 *     </ul>
 *   <li> <b>masterPageRoutes</b> {object} -optional- This object contains one attribute for each route that leads to a master view in a master/detail scenario. Please note that currently scaffolding only supports one master view per app
 *     As a default a route named "master" is created leading to a view "S2". This route is defined internally by the scaffolding. If the master view is named differently the route "master" can be redefined here with a different target view. In case also the route name differs the application additionally has to redefine method getMasterRouteName of the master controller accordingly.
 *     masterPageRoutes is structured the same as fullScreenPageRoutes.
 *   </li>
 *   <li> <b>detailPageRoutes</b> {object} -optional- This object contains one attribute for each route that leads to a detail view in a master/detail scenario. detailPageRoutes is structured the same as fullScreenPageRoutes.
 *     As a default a route named "detail" is created leading to a view "S3". This is the route that the scaffolding uses to navigate to the detail view whenever an item of the master list is clicked or tapped. This route is defined internally by the scaffolding with the following values:
 *     "detail" : {
 *     "pattern" : "detail/{contextPath}",
 *     "view" : "S3",
 *     }
 *     If the application uses a different view name the route "detail" can be redefined here with a different target view. In case also the route name or/and the pattern differ the application additionally has to redefine the methods getDetailRouteName, getBindingContextPathFor, getDetailNavigationParameters of the master controller accordingly (see API description of ScfldMAsterController.js)
 *     masterPageRoutes is structured the same as fullScreenPageRoutes.
 *   </li>
 * <ul>
 * @public
 * 
 */
sap.ca.scfld.md.ComponentBase.prototype.createMetaData = function(sAppType,oAppMeta) { return null; };

/**
 * 
 * not yet documented
 * @public
 * 
 */
sap.ca.scfld.md.ComponentBase.prototype.exit = function() { return null; };

/**
 * 
 * not yet documented
 * @public
 * 
 */
sap.ca.scfld.md.ComponentBase.prototype.init = function() { return null; };

/**
 * 
 * This method defines if open dialogs shall automatically be closed by the inner app navigation.
 * @param {boolean} bCloseDialogs "true" dialogs are automatically closed, "false" dialogs stay open
 * @public
 * 
 */
sap.ca.scfld.md.ComponentBase.prototype.setRouterSetCloseDialogs = function(bCloseDialogs) { return null; };


// ---- sap.ca.scfld.md.ConfigurationBase --------------------------------------------------------------------------

/**
 * 
 * @class
 * @extends sap.ui.base.ManagedObject
 * @public
 */
sap.ca.scfld.md.ConfigurationBase = function() {};
/**
 * 
 * returns the language key of the empty views default text to be shown in cases where empty view is implicitly
 * displayed by the scaffolding
 * @public
 * 
 */
sap.ca.scfld.md.ConfigurationBase.prototype.getDefaultEmptyMessageKey = function() { return null; };

/**
 * 
 * returns the language key of the detail views title defined in the apps language model
 * Needs to be overwritten by the app in case the default key name doesn't match the apps title key
 * @public
 * 
 */
sap.ca.scfld.md.ConfigurationBase.prototype.getDetailTitleKey = function() { return null; };

/**
 * 
 * Getter for the list of parameters to be excluded from appending to the URL for the Services
 * Needs to be overwritten by the app if parameters need to be excluded from the service call 
 * @returns {array} the list of parameters to be excluded from appending to the URL for the Service
 * @public
 * 
 */
sap.ca.scfld.md.ConfigurationBase.prototype.getExcludedQueryStringParameters = function() { return null; };

/**
 * 
 * Specifies the list of attributes that identify a list item
 * Needs to be overwritten by the app
 * @returns {array} the list of attributes (strings) of a master list item that identify one entry.
 * @public
 * 
 */
sap.ca.scfld.md.ConfigurationBase.prototype.getMasterKeyAttributes = function() { return null; };

/**
 * 
 * Getter for the service list to be used as source for the Connection Manager
 * Needs to be overwritten by the app
 * @returns {object} the list of ODataModel to instantiate with their corresponding url / mock url
 * @public
 * 
 */
sap.ca.scfld.md.ConfigurationBase.prototype.getServiceList = function() { return new Object(); };

/**
 * 
 * @deprecated
 * This Method is deprecated. Use the corresponding method of ApplicationFacade instead.
 * @returns {boolean} true if the application runs on mock data, i.e. was started with URL parameter "responderOn=true"
 * @public
 * 
 */
sap.ca.scfld.md.ConfigurationBase.prototype.isMock = function() { return false; };

/**
 * 
 * Override this method when you want to store a reference to the <code>ApplicationFacade</code> in some place where you can
 * access it. Note that all controllers inheriting from the <code>ScfldMaster/BaseMaster/Detail/FullscreenController</code> automatically
 * possess an attribute <code>oApplicationFacade</code>. </br>
 * However, it may be useful to have access to the facade e.g. in a class providing formatters.
 * @param {Object} oApplicationFacade the application facade for this App
 * @public
 * @memberOf sap.ca.scfld.md.ConfigurationBase	
 */
sap.ca.scfld.md.ConfigurationBase.prototype.setApplicationFacade = function(oApplicationFacade) { return null; };


// ---- sap.ca.scfld.md.controller --------------------------------------------------------------------------


// ---- sap.ca.scfld.md.controller.BaseDetailController --------------------------------------------------------------------------

/**
 * 
 * @class
 * @extends sap.ui.core.mvc.Controller
 * @public
 */
sap.ca.scfld.md.controller.BaseDetailController = function() {};
/**
 * 
 * enables/disables the header/footer button based on the given id
 * @param {string} sId id of the button to be updated
 * @param {boolean} bEnabled set the button enabled/disabled
 * @public
 * 
 */
sap.ca.scfld.md.controller.BaseDetailController.prototype.setBtnEnabled = function(sId,bEnabled) { return null; };

/**
 * 
 * updates the header/footer button text based on the given id
 * @param {string} sId id of the button to be updated
 * @param {string} sText the new text for the button to be updated
 * @public
 * 
 */
sap.ca.scfld.md.controller.BaseDetailController.prototype.setBtnText = function(sId,sText) { return null; };

/**
 * 
 * sets the Details page header and footer.
 * @param {object} oOptions The following attributes are supported:
 * <p><b>Detail Page Header part:</b></p>
 * <ul>
 * <li>{string} <b>sI18NDetailTitle</b> you can provide the i18n-key for the title in the i18n-properties file of the App. </li>
 * <li>{string} <b>sDetailTitle</b> you can also set the title text directly. 
 * If both are not provided, the i18n-key DETAIL_TITLE will be taken.</li>
 * <li>{function} <b>onBack</b> provides your own back button behavior.</li>
 * <li>{object} <b>oUpDownOptions </b> in order to get the up-down buttons in the right upper header, please provide the following attributes:</li>
 * <ul>
 *     <li>iPosition -- the (0-based) index of the item currently displayed</li>
 *     <li>iCount -- the total number of items</li>
 *     <li>fSetPosition -- callback function that is called when a new item should be displayed. The (0-based) index of the new item is passed to this method</li>
 *     <li>sI18NDetailTitle -- key in your i18n-file which maps to a text with two placeholders (e.g. ' Order {0} of {1}') that is used as title on desktop and tablet ('Item {0} of {1}' is taken as default)</li>
 *     <li>sI18NPhoneTitle -- key in your i18n-file which maps to a text with two placeholders (e.g. ' Limit: {0} of {1}') that is used as title on phone ('{0} of {1}' is taken as default) </li>
 * </ul>
 * </ul>
 * <p><b>Detail Page Footer part:</b> -- there are several pre-defined buttons which you can use on the Footer bar if you provide the necessary attributes; 
 * there are also custom-defined buttons possible. In general, every button can have the following settings:</p>
 * <ul>
 *     <li><b>sId</b> -- an <i>optional</i> property to set an Id for the specific button. 
 *     This Id is meant to be used in the call of the setBtnEnables method.</li>
 *     <li><b>bDisabled</b> -- an <i>optional</i> property to set the button initially enabled/disabled</li>
 *     <li><b>sI18nBtnTxt</b> -- If the button doesn't have the fix predefined text, you can provide the key of the i18n text which is used as the text of the button</li>
 *     <li><b>onBtnPressed</b> -- callback function of the specific button</li>
 * </ul>
 * </p><p>
 * Here are the buttons/attributes allowed on the Detail Page Footer bar:
 * <ul>
 * <li>{object} <b>oEditBtn</b> the button for default/recommended action of the view - 
 * usually this would be the edit but also other usages are possible.</li>
 * <li>{object} <b>oPositiveAction</b> can be used as the positive button e.g. for Approve action in an approval scenario</li>
 * <li>{object} <b>oNegativeAction</b> can be used as the negative button e.g. for Reject action in an approval scenario</li>
 * <li>{array} <b>buttonList</b> list of buttons which can be defined additionally</li>
 * <li>{object} <b>oAddBookmarkSettings</b> describe the settings for the Add-Bookmark-button, which should have the same parameters 
 * provided for "sap.ushell.services.Bookmark" with 
 * the exception that attribute url can be left out, as it is set by the scaffolding. The bookmark button will 
 * be displayed even if there are no settings provided, but can be suppressed via property <b>bSuppressBookmarkButton</b> explicitly.</li>
 * <li>{boolean} <b>bSuppressBookmarkButton</b> can suppress the Bookmark button from the 'Share' menu.</li>
 * <li>{object} <b>oEmailSettings</b> provide settings for the Email functionality:</li>
 *    <ul>
 *        <li>sSubject -- Email subject part</li>
 *        <li>sRecepient -- Email address of the recipient</li>
 *        <li>fGetMailBody -- function to provide Email body text</li>
 *    </ul>
 * <li>{object} <b>oJamOptions</b> in order to configure the "Share in SAP Jam" button and the "Discuss in SAP Jam" button</li>
 *    <ul>
 *        <li>{object} oShareSettings settings for the "Share in SAP Jam" button, for further allowed settings please check "sap.collaboration.components.fiori.sharing.Component.setSettings" method</li>
 *        <li>{object} oDiscussSettings settings for the "Discuss in SAP Jam" button, for further allowed settings please check "sap.collaboration.components.fiori.feed.Component.setSettings" method</li>
 *    </ul>
 * <li>{array} <b>additionalShareButtonList</b> contains information about additional buttons in the share menu.</li>
 * </ul>
 * @public
 * 
 */
sap.ca.scfld.md.controller.BaseDetailController.prototype.setHeaderFooterOptions = function(oOptions) { return null; };


// ---- sap.ca.scfld.md.controller.BaseFullscreenController --------------------------------------------------------------------------

/**
 * 
 * @class
 * @extends sap.ui.core.mvc.Controller
 * @public
 */
sap.ca.scfld.md.controller.BaseFullscreenController = function() {};
/**
 * 
 * enables/disables the header/footer button based on the given id
 * @param {string} sId id of the button to be updated
 * @param {boolean} bEnabled set the button enabled/disabled
 * @public
 * 
 */
sap.ca.scfld.md.controller.BaseFullscreenController.prototype.setBtnEnabled = function(sId,bEnabled) { return null; };

/**
 * 
 * updates the header/footer button text based on the given id
 * @param {string} sId id of the button to be updated
 * @param {string} sText the new text for the button to be updated
 * @public
 * 
 */
sap.ca.scfld.md.controller.BaseFullscreenController.prototype.setBtnText = function(sId,sText) { return null; };

/**
 * 
 * sets the Fullscreen page header and footer.
 * @param {object} oOptions you can set the Fullscreen header and footer parts with the following attributes:
 * </p><p>
 * <p><b>Fullscreen Header part:</b></p>
 * <ul>
 * <li>{string} <b>sI18NFullscreenTitle</b> the i18n-key in the i18n-properties file of the App for the title.</li>
 * <li>{string} <b>sFullscreenTitle</b> alternatively, set the title text directly. 
 * If both are not provided, the i18n-key FULLSCREEN_TITLE as default will be taken.</li>
 * <li>{function} <b>onBack</b> "back" button press function, the history.back behavior is used as default if you don't provide your own back behavior. 
 * If you want to suppress the Back-button in the Fullscreen page, you can set the onBack attribute with value null.</li>
 * <li>{function} <b>onFacetFilter</b> callback function, if you need a FacetFilter button on the header. </li>
 * </ul>
 * <p><b>Fullscreen Footer part:</b> -- there are several pre-defined buttons which you can use on the Footer bar if you provide the necessary attributes; 
 * there are also custom-defined buttons possible. In general, every button can have the following settings:</p>
 * <ul>
 *     <li><b>sId</b> -- an <i>optional</i> property to set an Id for the specific button. 
 *     This Id is meant to be used in the call of the setBtnEnables method.</li>
 *     <li><b>bDisabled</b> -- an <i>optional</i> property to set the button initially enabled/disabled.</li>
 *     <li><b>sI18nBtnTxt</b> -- If the button doesn't have the fix predefined text, you can provide the key of the i18n text which is used as the text of the button.</li>
 *     <li><b>onBtnPressed</b> -- callback function of the specific button.</li>
 * </ul>
 * </p><p>
 * Here are the buttons/attributes allowed on the Fullscreen Footer bar:
 * <ul>
 * <li>{array} <b>aAdditionalSettingButtons</b> list of buttons which can be added to the TechnicalSettings-menu (e.g. About, Login Details and Logout). 
 * Every button should have the above listed meta information.</li>
 * <li>{object} <b>oFilterOptions</b> if you want to get the predefined filter button, besides above listed default button attributes, you can choose one of the following options:
 *     <ul>
 *        <li>{function} <b>onFilterPressed</b> provide the callback function if you only want to get notified if the filter button is pressed.</li>
 *        <li>In case of your filter criterion/item can be represented by simple text with key, you can provide the following settings:
 *              <ul>
 *                  <li><b>aFilterItems</b> -- an array includes the possible filter items with the following attributes:</li>
 *                      <ul><li><b>text</b> -- the text to be shown to the user;</li>
 *                      <li><b>key</b> -- the unique filter key value.</li></ul>
 *                  <li><b>sSelectedItemKey</b> -- the key value of the default/current selected filter item.</li>
 *                  <li><b>onFilterSelected</b> -- the callback function for the application, if a filter item is selected; 
 *                  the filter key will be provided.</li>
 *              </ul>
 *         </li>
 *     </ul>
 * </li>
 * <li>{object} <b>oGroupOptions</b> if you want to get the predefined group button, besides above listed default button attributes, you can choose one of the following options:
 *     <ul>
 *         <li>{function} <b>onGroupPressed</b> provide the callback function if you only want to get notified if the group button is pressed.</li>
 *         <li>In case of your group criterion/item can be represented by simple text with key, 
 *         you can provide the following settings:
 *              <ul>
 *                  <li><b>aGroupItems</b> -- an array includes the possible group items with the following attributes:</li>
 *                      <ul><li><b>text</b> -- the text to be shown to the user;</li>
 *                      <li><b>key</b> -- the unique group key value.</li></ul>
 *                  <li><b>sSelectedItemKey</b> -- the key value of the default/current selected group item.</li>
 *                  <li><b>onGroupSelected</b> -- the callback function for the application, if a group item is selected; 
 *                  the filter key will be provided.</li>
 *               </ul>
 *          </li>
 *     </ul>
 * </li>
 * <li>{object} <b>oSortOptions</b> if you want to get the predefined sort button, besides above listed default button attributes, you can choose one of the following options:
 *    <ul>
 *         <li>{function} <b>onSortPressed</b> provide the callback function if you only want to get notified if the sort button is pressed.</li>
 *         <li>In case of your sort criterion/item can be represented by simple text with key, 
 *         you can provide the following settings:
 *             <ul>
 *                 <li><b>aSortItems</b> -- an array includes the possible sort items with the following attributes:</li>
 *                     <ul><li><b>text</b> -- the text to be shown to the user;</li>
 *                         <li><b>key</b> -- the unique sort key value.</li></ul>
 *                 <li><b>sSelectedItemKey</b> -- the key value of the default/current selected sort item.</li>
 *                 <li><b>onSortSelected</b> -- the callback function for the application, if a sort item is selected; 
 *                 the filter key will be provided.</li>
 *             </ul>
 *         </li>
 *    </ul>
 * </li>
 * <li>{object} <b>oEditBtn</b> the button for default/recommended action of the view - 
 * usually this would be the edit but also other usages are possible.</li>
 * <li>{object} <b>oPositiveAction</b> can be used as the positive button e.g. for Approve action in an approval scenario.</li>
 * <li>{object} <b>oNegativeAction</b> can be used as the negative button e.g. for Reject action in an approval scenario.</li>
 * <li>{array} <b>buttonList</b> list of buttons which can be defined additionally.</li>
 * <li>{object} <b>oAddBookmarkSettings</b> describe the settings for the Add-Bookmark-button, which should have the same parameters 
 * provided for "sap.ushell.services.Bookmark" with 
 * the exception that attribute url can be left out, as it is set by the scaffolding. The bookmark button will 
 * be displayed even if there are no settings provided, but can be suppressed via property <b>bSuppressBookmarkButton</b> explicitly.</li>
 * <li>{boolean} <b>bSuppressBookmarkButton</b> can suppress the Bookmark button from the 'Share' menu.</li>
 * <li>{object} <b>oEmailSettings</b> provide settings for the Email functionality:
 *    <ul>
 *        <li><b>sSubject</b> -- Email subject part;</li>
 *        <li><b>sRecepient</b> -- Email address of the recipient:</li>
 *        <li><b>fGetMailBody</b> -- function to provide Email body text.</li>
 *    </ul>
 * </li>
 * <li>{object} <b>oJamOptions</b> in order to configure the "Share in SAP Jam" button and the "Discuss in SAP Jam" button:
 *    <ul>
 *        <li>{object} <b>oShareSettings</b> -- settings for the "Share in SAP Jam" button, for further allowed settings please check "sap.collaboration.components.fiori.sharing.Component.setSettings" method;</li>
 *        <li>{object} <b>oDiscussSettings</b> -- settings for the "Discuss in SAP Jam" button, for further allowed settings please check "sap.collaboration.components.fiori.feed.Component.setSettings" method.</li>
 *    </ul>
 * </li>
 * <li>{array} <b>additionalShareButtonList</b> contains information about additional buttons in the share menu.</li>
 * </ul>
 * @public
 * 
 */
sap.ca.scfld.md.controller.BaseFullscreenController.prototype.setHeaderFooterOptions = function(oOptions) { return null; };


// ---- sap.ca.scfld.md.controller.BaseMasterController --------------------------------------------------------------------------

/**
 * 
 * @class Deprecated, use ScfldMasterController.js instead
 * @constructor
 * @extends sap.ui.core.mvc.Controller
 * @public
 */
sap.ca.scfld.md.controller.BaseMasterController = function() {};

// ---- sap.ca.scfld.md.controller.ScfldMasterController --------------------------------------------------------------------------

/**
 * 
 * @class This class shall be used as the base class for the master view controllers in master Detail scenarios
 * @constructor
 * @extends sap.ui.core.mvc.Controller
 * @public
 */
sap.ca.scfld.md.controller.ScfldMasterController = function() {};
/**
 * 
 * This method needs to be overridden in case backend search is active (see {@link isBackendSearch}). It
 * should modify the list binding such that it reflects the filter entered in the search field. Sample
 * coding: var oFilter = new sap.ui.model.Filter("MyField", sap.ui.model.FilterOperator.EQ, sFilterPattern);
 * var aFilters = [oFilter]; oBinding.filter(aFilters);
 * @param {string} sFilterPattern
 *          the content of the search field
 * @param {object} oBinding
 *          the context binding of the list items to be modified.
 * </p><p>
 * list binding needs to be updated with filter parameter -> this will trigger a new oData get automatically
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.applyBackendSearchPattern = function(sFilterPattern,oBinding) { return null; };

/**
 * 
 * @param {string} sContext
 *          contains the hash provided via bookmark navigation Deeplink navigation with backend search
 *          active: when navigating to the app via bookmark, the bookmarked item might not be part of the
 *          initially loaded list items (usually the case for scenarios where more items exist in the
 *          backend than shown at once in the list). The assumption in this case is that the backend search
 *          is active in order to be able to retrieve further list items. If the check on the initial list
 *          against the navigation context value gives no result, this method is being called. This method
 *          needs to be overridden by apps where this scenario applies; the app has then to take care about
 *          retrieving the correct item via backend search
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.applyFilterFromContext = function(sContext) { return null; };

/**
 * 
 * Can be overwritten to define a App specific frontend search. Note that in most cases it is more sensible
 * to override {@link applySearchPatternToListItem}
 * @param {string} sFilterPattern
 *          the content of the search field
 * @return the number of list items still visible
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.applySearchPattern = function(sFilterPattern) { return null; };

/**
 * 
 * Override this method when defining a custom frontend search. This method will be called for each list
 * item and decides whether it fulfills the search criteria.
 * @param {object} oItem
 *          the item to be tested
 * @param {string} sFilterPattern
 *          the search pattern
 * @returns {boolean} whether the item fulfills the search pattern
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.applySearchPatternToListItem = function(oItem,sFilterPattern) { return false; };

/**
 * 
 * This function is called when a client side search was done. If the search returns 0 hits 
 * an empty list is shown on the master page displaying the "noDataText" of the master List.
 * If the search returns one or more hits the function makes sure that the master list is visible and
 * the empty list is hidden
 * @param {int} iSearchHitCount Number of elements found during by the search
 * @param {object} oMasterList The master list
 * @param {object} oEmptyList The empty list to be displayed instead of the master list if the search returns no results
 * @param {string} sNoDataText If this parameter is provided it will be used as the noDataText during the search
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.evaluateClientSearchResult = function(iSearchHitCount,oMasterList,oEmptyList,sNoDataText) { return null; };

/**
 * 
 * Finds an item by the given contextPath
 * @param {string} sContextPath
 * @returns a listItem or null if it was not found
 * @protected
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.findItemByContextPath = function(sContextPath) { return null; };

/**
 * 
 * May be overwritten by the app: should create a Binding path from the arguments of the detail route, that matches a list item
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getBindingContextPathFor = function() { return null; };

/**
 * 
 * may be overwritten by the app: Should create the parameters necessary for injecting the values into the Detail route of the app.
 * @params : oListItem
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getDetailNavigationParameters = function() { return null; };

/**
 * 
 * Needs to be overwritten if the name of the route leading to the detail view differs from the default which is "detail"
 * @returns {string} the name of the detail route
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getDetailRouteName = function() { return ""; };

/**
 * 
 * This method is meant to be overridden by the app. It shall return an object describing the Master page header and
 * footer content. Return <code>null</code> if you want to define Master page header and footer on your own (default
 * behavior). Otherwise return an object with attributes determining the Master page header and footer. 
 * The following attributes are supported:
 * <p><b>Master Page Header part:</b></p>
 * <ul>
 * <li><b>sI18NMasterTitle</b> {string} The i18n-key for the title of the master page in the i18n-properties file of the App. 
 * Note that the corresponding text should possess a placeholder for the number of displayed items (e.g. <i>Purchase
 * Orders ({0})</i>)</li>
 * <li><b>sI18NSearchFieldPlaceholder</b> {string} The i18n-key for the placeholder text to be displayed in the search field.
 * Note that this attribute should only be used if you want to display a more specific text then default ("Search"). E.g. "Search for Purchase Order ...". Normally, this will
 * only be sensible, if backend search is enabled or the application defines a very specific frontend search.</li>
 * <li><b>onBack</b> {function} provides your own back function, if you want to overwrite the default history.back behavior. 
 * If you want to suppress the Back-button in the master page, you can set the onBack attribute with value null.</li>
 * </ul>
 * <p><b>Master Page Footer part:</b> -- there are several pre-defined buttons which you can use on the Footer bar if you provide the necessary attributes; 
 * there are also custom-defined buttons possible. In general, every button can have the following settings:</p>
 * <ul>
 *     <li><b>sId</b> -- an <i>optional</i> property to set an Id for the specific button. 
 *     This Id is meant to be used in the call of the setBtnEnables method.</li>
 *     <li><b>bDisabled</b> -- an <i>optional</i> property to set the button initially enabled/disabled</li>
 *     <li><b>sI18nBtnTxt</b> -- If the button doesn't have the fix predefined text, you can provide the key of the i18n text which is used as the text of the button</li>
 *     <li><b>onBtnPressed</b> -- callback function of the specific button</li>
 * </ul>
 * </p><p>
 * Here are the buttons/attributes allowed on the Master Page Footer bar:
 * <ul>
 * <li><b>aAdditionalSettingButtons </b> {array} list of buttons which can be added to the TechnicalSettings-menu (e.g. About, Login Details and Logout). 
 * Every button should have the above listed meta information.</li>
 * <li>If you want to get the predefined add button, you can choose one of the following attributes:
 *    <ul>
 *        <li><b>onAddPress</b> {function} you can provide this callback function if you just want to get notified if the add button is pressed</li>
 *        <li><b>oAddOptions</b> {object} you can provide all the default meta-information for the add button, so that you can change the status of the button in runtime.</li>
 *    </ul>
 * </li>
 * <li>If you want to get the predefined edit button, you can choose one of the following attributes:
 *    <ul>
 *        <li><b>onEditPress</b> {function} you can provide this callback function if you just want to get notified if the edit button is pressed</li>
 *        <li><b>oEditBtn</b> {object} you can provide all the default meta-information for the edit button, so that you can change the status of the button in runtime.</li>
 *    </ul>
 * </li>
 * <li><b>oFilterOptions</b> {object} if you want to get the predefined filter button, besides above listed default button attributes, you can choose one of the following options:
 *     <ul>
 *        <li><b>onFilterPressed</b> {function} provide the callback function if you only want to get notified if the filter button is pressed.</li>
 *        <li>In case of your filter criterion/item can be represented by simple text with key, you can provide the following settings:
 *              <ul>
 *                  <li><b>aFilterItems</b> -- an array includes the possible filter items with the following attributes:</li>
 *                      <ul><li><b>text</b> -- the text to be shown to the user;</li>
 *                      <li><b>key</b> -- the unique filter key value.</li></ul>
 *                  <li><b>sSelectedItemKey</b> -- the key value of the default/current selected filter item.</li>
 *                  <li><b>onFilterSelected</b> -- the callback function for the application, if a filter item is selected; 
 *                  the filter key will be provided.</li>
 *              </ul>
 *         </li>
 *     </ul>
 * </li>
 * <li><b>oGroupOptions</b> {object} if you want to get the predefined group button, besides above listed default button attributes, you can choose one of the following options:
 *     <ul>
 *         <li><b>onGroupPressed</b> {function} provide the callback function if you only want to get notified if the group button is pressed.</li>
 *         <li>In case of your group criterion/item can be represented by simple text with key, 
 *         you can provide the following settings:
 *              <ul>
 *                  <li><b>aGroupItems</b> -- an array includes the possible group items with the following attributes:</li>
 *                      <ul><li><b>text</b> -- the text to be shown to the user;</li>
 *                      <li><b>key</b> -- the unique group key value.</li></ul>
 *                  <li><b>sSelectedItemKey</b> -- the key value of the default/current selected group item.</li>
 *                  <li><b>onGroupSelected</b> -- the callback function for the application, if a group item is selected; 
 *                  the filter key will be provided.</li>
 *               </ul>
 *          </li>
 *     </ul>
 * </li>
 * <li><b>oSortOptions</b> {object} if you want to get the predefined sort button, besides above listed default button attributes, you can choose one of the following options:
 *    <ul>
 *         <li><b>onSortPressed</b> {function} provide the callback function if you only want to get notified if the sort button is pressed.</li>
 *         <li>In case of your sort criterion/item can be represented by simple text with key, 
 *         you can provide the following settings:
 *             <ul>
 *                 <li><b>aSortItems</b> -- an array includes the possible sort items with the following attributes:</li>
 *                     <ul><li><b>text</b> -- the text to be shown to the user;</li>
 *                         <li><b>key</b> -- the unique sort key value.</li></ul>
 *                 <li><b>sSelectedItemKey</b> -- the key value of the default/current selected sort item.</li>
 *                 <li><b>onSortSelected</b> -- the callback function for the application, if a sort item is selected; 
 *                 the filter key will be provided.</li>
 *             </ul>
 *         </li>
 *    </ul>
 * </li>
 * <li><b>oPositiveAction</b> {object} can be used as the positive button e.g. for Approve action in an approval scenario</li>
 * <li><b>oNegativeAction</b> {object} can be used as the negative button e.g. for Reject action in an approval scenario</li>
 * <li><b>buttonList</b> {array} list of buttons which can be defined additionally</li>
 * </ul>
 * @public
 * @returns {object} oConfig Null or configuration object for master header and footer
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getHeaderFooterOptions = function() { return new Object(); };

/**
 * 
 * Returns the list control of the master list
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getList = function() { return null; };

/**
 * 
 * Needs to be overwritten if the name of the route leading to the master view differs from the default which is "master"
 * @param {object} oEvent: the route matched event
 * @return {string} Name of the route leading to the master view 
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getMasterRouteName = function(oEvent:) { return ""; };

/**
 * 
 * Not yet documented
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getNoDataViewName = function() { return null; };

/**
 * 
 * Override this method if you have not used the standard way to include the page in the view.
 * @public
 * @memberOf sap.ca.scfld.md.controller.ScfldMasterController
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getPage = function() { return null; };

/**
 * 
 * returns the split container, that contains the master view
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.getSplitContainer = function() { return null; };

/**
 * 
 * determines whether search (triggered by search field) is performed on backend or frontend (frontend being
 * default behavior).
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.isBackendSearch = function() { return null; };

/**
 * 
 * May be overwritten to determine if the route is a detail route
 * @param {object} oEvent: the route matched event
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.isDetailRoute = function(oEvent:) { return null; };

/**
 * 
 * determines whether search is triggered with each change of the search field content (or only when the
 * user explicitly starts the search). Default implementation triggers search immediately, exactly when
 * backend search is disabled (see {@link isBackendSearch}. Override this method if you want 'live' search
 * on backend or explicit search on frontend.
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.isLiveSearch = function() { return null; };

/**
 * 
 * May be overwritten to determine if the route is a master route
 * @param {object} oEvent: the route matched event
 * @returns {boolean} true if the route of the route matched event is a master route
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.isMasterRoute = function(oEvent:) { return false; };

/**
 * 
 * Not yet documented - private?
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.navToEmptyView = function() { return null; };

/**
 * 
 * may be overwritten by the app - react on the case when an item was not found in the list after navigating
 * default implementation shows the empty view
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.noItemFoundForContext = function() { return null; };

/**
 * 
 * Can be overwritten by the app: where selection is not the default data load behavior
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.onDataLoaded = function() { return null; };

/**
 * 
 * triggers a re-computation to adjust the master footer bar 
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.refreshHeaderFooterForEditToggle = function() { return null; };

/**
 * 
 * when ever you bind a master list dynamically you have to call this method
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.registerMasterListBind = function() { return null; };

/**
 * 
 * when ever you bind a master list dynamically you have to call this method
 * @param {string} sModelName the name of the model that is bound dynamically.
 * This must be the same name as defined in configuration.js.
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.registerMasterListBinding = function(sModelName) { return null; };

/**
 * 
 * Selects and navigates to the first item of the List
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.selectFirstItem = function() { return null; };

/**
 * 
 * selects the last item that was hit by the detail route
 * @protected
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.selectItemMatchingTheLastNavigation = function() { return null; };

/**
 * 
 * enables/disables the header/footer button based on the given id
 * @param {string} sId id of the button to be updated
 * @param {boolean} bEnabled set the button enabled/disabled
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.setBtnEnabled = function(sId,bEnabled) { return null; };

/**
 * 
 * updates the header/footer button text based on the given id
 * @param {string} sId id of the button to be updated
 * @param {string} sText the new text for the button to be updated
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.setBtnText = function(sId,sText) { return null; };

/**
 * 
 * Maybe overridden.
 * Sets the list item and navigates to the corresponding hash.
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.setListItem = function() { return null; };

/**
 * 
 * displays the empty detail view with header and info text
 * @param {string} sViewTitle apps language model Key of the detail views title
 * @param {string} sLanguageKey scaffoldings language model Key of the emtpy page text
 * @param {string} sInfoText optional: instead of passing sLanguageKey, the text can directly be passed 
 * @public
 * 
 */
sap.ca.scfld.md.controller.ScfldMasterController.prototype.showEmptyView = function(sViewTitle,sLanguageKey,sInfoText) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------
