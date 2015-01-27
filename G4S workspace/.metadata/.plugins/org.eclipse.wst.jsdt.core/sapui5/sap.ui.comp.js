
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.comp --------------------------------------------------------------------------


// ---- sap.ui.comp.filterbar --------------------------------------------------------------------------


// ---- sap.ui.comp.filterbar.FilterBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new filterbar/FilterBar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getAdvancedMode advancedMode} : boolean (default: false)</li>
 * <li>{@link #getSimplifiedMode simplifiedMode} : boolean</li>
 * <li>{@link #getExpandAdvancedArea expandAdvancedArea} : boolean (default: true)</li>
 * <li>{@link #getSearchEnabled searchEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterItems filterItems} : sap.ui.comp.filterbar.FilterItem[]</li>
 * <li>{@link #getFilterGroupItems filterGroupItems} : sap.ui.comp.filterbar.FilterGroupItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:reset reset} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:beforeVariantSave beforeVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:afterVariantLoad afterVariantLoad} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.layout.Grid#constructor sap.ui.layout.Grid}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * FilterBar consist of two areas. The basic area which hosts the selection fields and the advanced area which hosts the filter fields.
 * Basic area consumes the first visible row and the advanced area is placed below.
 * The basic area fields are populated via the aggregation 'filterItems'. It also contains buttons like 'Reset' and 'Search'.
 * Advanced Area is populated via the aggregation 'filterGroupItems'. The advanced area is placed inside an expandable Pane.
 * @extends sap.ui.layout.Grid
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.filterbar.FilterBar = function(sId,mSettings) {};
/**
 * 
 * Fired after a variant was loaded and applied to the SmartFilterBar. The event could be used to adapt custom control with data from the variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.afterVariantLoad = function(oControlEvent) { return null; };

/**
 * 
 * Fired before a variant is saved. This event can be used to adapt the model of the smart filter bar, which will be saved as variant later on.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.beforeVariantSave = function(oControlEvent) { return null; };

/**
 * 
 * Event fired when the filter criteria has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.filterChange = function(oControlEvent) { return null; };

/**
 * 
 * this event is fired if the button 'Reset' is executed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.reset = function(oControlEvent) { return null; };

/**
 * 
 * this event is fired if the button 'Search' is executed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * add an FilterItem element to the advanced area
 * @public
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *            oFilterGroupItem
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterGroupItem = function(oFilterGroupItem) { return null; };

/**
 * 
 * add an FilterItem element to the basic area
 * @public
 * @param {sap.ui.comp.filterbar.FilterItem}
 *            oFilterItem
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterItem = function(oFilterItem) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterVariantLoad' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * Fired after a variant was loaded and applied to the SmartFilterBar. The event could be used to adapt custom control with data from the variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachAfterVariantLoad = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeVariantSave' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * Fired before a variant is saved. This event can be used to adapt the model of the smart filter bar, which will be saved as variant later on.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachBeforeVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'filterChange' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * Event fired when the filter criteria has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachFilterChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'reset' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * this event is fired if the button 'Reset' is executed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachReset = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * this event is fired if the button 'Search' is executed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * When the filterBar is started via navigation, we need to inform the variant management to reset an eventual previous selection
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.clearVariantSelection = function() { return null; };

/**
 * 
 * destroys the current control and all inner controls
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroy = function() { return null; };

/**
 * 
 * Destroys all the filterGroupItems in the aggregation 
 * named <code>filterGroupItems</code>.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroyFilterGroupItems = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Destroys all the filterItems in the aggregation 
 * named <code>filterItems</code>.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroyFilterItems = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterVariantLoad' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachAfterVariantLoad = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeVariantSave' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachBeforeVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'filterChange' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachFilterChange = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'reset' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachReset = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * retrieve the control based on the filteBarItem
 * @public
 * @param {sap.ui.comp.filterbar.Filter.FilterItem}
 *            oFilterItem from the aggregations
 * @returns {sap.ui.core.Control} the corresponding control. If no match is found null will returned.
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByFilterItem = function(oFilterItem) { return new sap.ui.core.Control(); };

/**
 * 
 * retrieve the control based on the name and group name
 * @public
 * @param {string}
 *            sName the control's name
 * @param {string}
 *            sGroupName is null for basic area
 * @returns {sap.ui.core.Control} the corresponding control. If no match is found null will returned. For filters in the advanced area the visibleInAdvancedArea
 *          flag is considered
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByName = function(sName,sGroupName) { return new sap.ui.core.Control(); };

/**
 * 
 * retrieve the mandatory filters
 * @public
 * @returns {array} of visible mandatory filters
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineMandatoryFilterItems = function() { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterVariantLoad to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireAfterVariantLoad = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Fire event beforeVariantSave to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireBeforeVariantSave = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Fire event filterChange to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireFilterChange = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * read the personalization, apply eventual variants and inform all registered parties about the initialization finish. In case a default variant exists,
 * trigger search
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireInitialise = function() { return null; };

/**
 * 
 * Fire event reset to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireReset = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Fire event search to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireSearch = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Getter for property <code>advancedMode</code>.
 * The advance mode overwrites the standard behaviour such that:
 * - the text 'Dynamic Selection' is replaced by 'Advanced Search'
 * - all filter fields are added to the advanced area
 * - the Reset button is hidden
 * - the add/remove filter button is hidden
 * - the advanced area is expanded
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>advancedMode</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAdvancedMode = function() { return false; };

/**
 * 
 * determine all known controls, regardless of their visibility
 * @public
 * @param {boolean}
 *            bConsiderOnlyVisibleFields based on this flag either all or just the visible items are returned
 * @returns {array} array of all/only visible items
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAllFilterItems = function(bConsiderOnlyVisibleFields) { return null; };

/**
 * 
 * Getter for property <code>expandAdvancedArea</code>.
 * describes whether the advanced area should be displayed collapsed or expanded
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expandAdvancedArea</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getExpandAdvancedArea = function() { return false; };

/**
 * 
 * Getter for aggregation <code>filterGroupItems</code>.<br/>
 * is used for the population of the advanced area with filter fields
 * @return {sap.ui.comp.filterbar.FilterGroupItem[]}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterGroupItems = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>filterItems</code>.<br/>
 * is used to populate the basic area with selection fields
 * @return {sap.ui.comp.filterbar.FilterItem[]}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>persistencyKey</code>.
 * The persistencyKey represents the key for storing the variant values and the fields belonging to the variants
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getPersistencyKey = function() { return ""; };

/**
 * 
 * Getter for property <code>searchEnabled</code>.
 * enables/disables the search button
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>searchEnabled</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getSearchEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>simplifiedMode</code>.
 * set the new behaviour: all fields (select and filters) are displaayed in one ui region. The initial display occurs in one line.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>simplifiedMode</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getSimplifiedMode = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.filterbar.FilterGroupItem</code> in the aggregation named <code>filterGroupItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *            oFilterGroupItem the filterGroupItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.indexOfFilterGroupItem = function(oFilterGroupItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.filterbar.FilterItem</code> in the aggregation named <code>filterItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.filterbar.FilterItem}
 *            oFilterItem the filterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.indexOfFilterItem = function(oFilterItem) { return 0; };

/**
 * 
 * Inserts a filterGroupItem into the aggregation named <code>filterGroupItems</code>.
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *          oFilterGroupItem the filterGroupItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterGroupItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterGroupItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterGroupItem is inserted at 
 *             the last position        
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.insertFilterGroupItem = function(oFilterGroupItem,iIndex) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Inserts a filterItem into the aggregation named <code>filterItems</code>.
 * @param {sap.ui.comp.filterbar.FilterItem}
 *          oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterItem is inserted at 
 *             the last position        
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.insertFilterItem = function(oFilterItem,iIndex) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * fCallBack for being able to participate in variant handling. This fCallBack will be executed, when ever a variant has to be applied. The fCallBack will
 * receive the corresponding data set, in Json notation, containing all relevant data as initially provided by the fCallBack for fetchData
 * @public
 * @param {function}
 *            fCallBack to be called, when a variant has to be applied
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerApplyData = function(fCallBack) { return null; };

/**
 * 
 * fCallBack for being able to participate in variant save handling. This fCallBack will be executed, whenever the variant save is triggered and has to provide,
 * in Json notation, all relevant fields and values. This data blob will be saved along with the current variant
 * @public
 * @param {function}
 *            fCallBack to be called, when a variant has to be applied
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerFetchData = function(fCallBack) { return null; };

/**
 * 
 * removes all entries in the aggregation GroupFilterItems
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilterGroupItems = function() { return null; };

/**
 * 
 * removes all entries in the aggregation FilterItems
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilterItems = function() { return null; };

/**
 * 
 * Removes an filterGroupItem from the aggregation named <code>filterGroupItems</code>.
 * @param {int | string | sap.ui.comp.filterbar.FilterGroupItem} vFilterGroupItem the filterGroupItem to remove or its index or id
 * @return {sap.ui.comp.filterbar.FilterGroupItem} the removed filterGroupItem or null
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeFilterGroupItem = function(vFilterGroupItem) { return new sap.ui.comp.filterbar.FilterGroupItem(); };

/**
 * 
 * Removes an filterItem from the aggregation named <code>filterItems</code>.
 * @param {int | string | sap.ui.comp.filterbar.FilterItem} vFilterItem the filterItem to remove or its index or id
 * @return {sap.ui.comp.filterbar.FilterItem} the removed filterItem or null
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeFilterItem = function(vFilterItem) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * rerender the filter area for the simplifiedMode
 * @public
 * @param {boolean}
 *            The parameter 'bShowLess' determine if the filters should be shown 'true' or hidden behind the 'ShowMore'-button 'false'
 */
sap.ui.comp.filterbar.FilterBar.prototype.rerenderFilters = function(The) { return null; };

/**
 * 
 * In advanced mode the text 'Dynamic Selection' is replaced by 'Advanced Search' all filter fields are added to the advanced area and the add/remove filter
 * button and the variant management buttons are hidden
 * @public
 * @param {boolean}
 *            bFlag - true or false / set-reset advanced mode
 */
sap.ui.comp.filterbar.FilterBar.prototype.setAdvancedMode = function(bFlag) { return null; };

/**
 * 
 * describes whether the advanced area should be displayed collapsed or expanded
 * @public
 * @param {boolean}
 *            bFlag sets/resets the advanced area to expanded/collapsed
 */
sap.ui.comp.filterbar.FilterBar.prototype.setExpandAdvancedArea = function(bFlag) { return null; };

/**
 * 
 * set the persistency key for
 * @public
 * @param {string}
 *            sPersistenceKey
 */
sap.ui.comp.filterbar.FilterBar.prototype.setPersistencyKey = function(sPersistenceKey) { return null; };

/**
 * 
 * sets the type of the Search-button to Emphasize. The state of the Search button will always be reset, once the event search is executed
 * @public
 * @param {boolean}
 *            bSetEmphasize sets the Emphasized or Default - type
 */
sap.ui.comp.filterbar.FilterBar.prototype.setSearchButtonEmphType = function(bSetEmphasize) { return null; };

/**
 * 
 * enables/disables the search button
 * @public
 * @param {boolean}
 *            bValue sets/resets the enable state of the search button
 */
sap.ui.comp.filterbar.FilterBar.prototype.setSearchEnabled = function(bValue) { return null; };


// ---- sap.ui.comp.filterbar.FilterGroupItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new filterbar/FilterGroupItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGroupTitle groupTitle} : string</li>
 * <li>{@link #getGroupName groupName} : string</li>
 * <li>{@link #getVisibleInAdvancedArea visibleInAdvancedArea} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.comp.filterbar.FilterItem#constructor sap.ui.comp.filterbar.FilterItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * representation for a filter field in the advanced area.
 * @extends sap.ui.comp.filterbar.FilterItem
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.filterbar.FilterGroupItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterGroupItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>groupName</code>.
 * the name of the group
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>groupName</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getGroupName = function() { return ""; };

/**
 * 
 * Getter for property <code>groupTitle</code>.
 * the title of the group
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>groupTitle</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getGroupTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>visibleInAdvancedArea</code>.
 * If set to true this field will be added to the advanced area (aka Dynamic Selection) by default.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>visibleInAdvancedArea</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getVisibleInAdvancedArea = function() { return false; };

/**
 * 
 * Setter for property <code>groupName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sGroupName  new value for property <code>groupName</code>
 * @return {sap.ui.comp.filterbar.FilterGroupItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setGroupName = function(sGroupName) { return new sap.ui.comp.filterbar.FilterGroupItem(); };

/**
 * 
 * setter for group title
 * @public
 * @param {string}
 *            sValue property
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setGroupTitle = function(sValue) { return null; };

/**
 * 
 * setter for group title
 * @public
 * @param {string}
 *            sValue property
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setVisibleInAdvancedArea = function(sValue) { return null; };


// ---- sap.ui.comp.filterbar.FilterItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new filterbar/FilterItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getMandatory mandatory} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getLabelTooltip labelTooltip} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControl control} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.filterbar.FilterItem#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * FilterItem represents a selection filed in the basic area of the FilterBar control
 * @extends sap.ui.core.Element
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.filterbar.FilterItem = function(sId,mSettings) {};
/**
 * 
 * Fired when the value of a property, for example vVisible, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 */
sap.ui.comp.filterbar.FilterItem.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/> itself. 
 * </p><p>
 * Fired when the value of a property, for example vVisible, has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/> itself.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * destroys this element
 * @public
 */
sap.ui.comp.filterbar.FilterItem.prototype.destroy = function() { return null; };

/**
 * 
 * Destroys the control in the aggregation 
 * named <code>control</code>.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.destroyControl = function() { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.filterbar.FilterItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'propertyName' of type <code>string</code> Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.fireChange = function(mArguments) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * Getter for aggregation <code>control</code>.<br/>
 * the control which will be placed into te basic area
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>label</code>.
 * the label of the control
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabel = function() { return ""; };

/**
 * 
 * retrieves the label control. Needed because of an eventual binding to the label
 * @public
 * @returns {sap.m.Label}
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabelControl = function() { return new sap.m.Label(); };

/**
 * 
 * Getter for property <code>labelTooltip</code>.
 * provide a tooltip for the item. The Tooltip will be assigned to the label.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>labelTooltip</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabelTooltip = function() { return ""; };

/**
 * 
 * Getter for property <code>mandatory</code>.
 * mandatory flag
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getMandatory = function() { return false; };

/**
 * 
 * Getter for property <code>name</code>.
 * the name of the field
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * visibility state of the FilterItem
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getVisible = function() { return false; };

/**
 * 
 * initialize the filter item
 * @public
 */
sap.ui.comp.filterbar.FilterItem.prototype.init = function() { return null; };

/**
 * 
 * Setter for the aggregated <code>control</code>.
 * @param {sap.ui.core.Control} oControl
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setControl = function(oControl) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * setter for label
 * @public
 * @param {string}
 *            sValue property
 */
sap.ui.comp.filterbar.FilterItem.prototype.setLabel = function(sValue) { return null; };

/**
 * 
 * setter for tooltip
 * @public
 * @param {string}
 *            sText property
 */
sap.ui.comp.filterbar.FilterItem.prototype.setLabelTooltip = function(sText) { return null; };

/**
 * 
 * setter for mandatory flag
 * @public
 * @param {string}
 *            bValue property
 */
sap.ui.comp.filterbar.FilterItem.prototype.setMandatory = function(bValue) { return null; };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setName = function(sName) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * setter for visible
 * @public
 * @param {boolean}
 *            bIsVisible property
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisible = function(bIsVisible) { return null; };


// ---- sap.ui.comp.odata --------------------------------------------------------------------------


// ---- sap.ui.comp.odata.MetadataAnalyser --------------------------------------------------------------------------

/**
 * 
 * Constructs a utility class to analyse the OData metadata document ($metadata), to resolve SAP-Annotations
 * @constructor
 * @public
 * @param {String}
 *            oResourceRootUri - The URL of the resource or ODataModel
 * 
 */
sap.ui.comp.odata.MetadataAnalyser = function(oResourceRootUri) {};
/**
 * 
 * Destroys the object
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.destroy = function() { return null; };

/**
 * 
 * Gets a an Array of the names of all possible filterable fields for the specified entity type
 * @param {String}
 *            sEntityTypeName - The entity type name as specified in the metadata document
 * @returns {Array} Array of names of overall filterable fields
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getAllFilterableFieldNamesByEntityTypeName = function(sEntityTypeName) { return null; };

/**
 * 
 * Gets a collection of all possible filterable fields for the specified entity name
 * @param {String}
 *            sEntitySetName - The entity name as specified in the metadata document
 * @returns {Array} Array of overall filterable fields
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getAllFilterableFieldsByEntitySetName = function(sEntitySetName) { return null; };

/**
 * 
 * Gets a collection of all possible filterable fields for the specified entity type
 * @param {String}
 *            sEntityTypeName - The entity type name as specified in the metadata document
 * @returns {Array} Array of overall filterable fields
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getAllFilterableFieldsByEntityTypeName = function(sEntityTypeName) { return null; };

/**
 * 
 * Gets the human readable text/description field's name from the specified Key field's name and entity name
 * @param {string|object}
 *            sKeyField - the name of the key field / oField - the field as present in the OData metadata
 * @param {string}
 *            sEntityName - the name of the entity (required if the name of the field is passed as the 1st param)
 * @returns {string} the description field name, if any
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getDescriptionFieldName = function(sKeyField,sEntityName) { return ""; };

/**
 * 
 * Gets the specified attribute (sap:annotation) value from the default entity container
 * @param {String}
 *            sAttribute - The name of the attribute (sap:annotation) on the entity container
 * @returns {String} The value of the specified attribute (if found)|null
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getEntityContainerAttribute = function(sAttribute) { return null; };

/**
 * 
 * @param sFullyQualifiedFieldName
 * @returns The field name without namespace and without entity
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getFieldNameByFullyQualifiedFieldName = function(sFullyQualifiedFieldName) { return null; };

/**
 * 
 * Gets a collection of fields for the specified entity name
 * @param {String}
 *            sEntitySetName - The entity name as specified in the metadata document
 * @returns {Array} Array of fields
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getFieldsByEntitySetName = function(sEntitySetName) { return null; };

/**
 * 
 * Gets a collection fields for the specified entity type
 * @param {String}
 *            sEntityTypeName - The entity type name as specified in the metadata document
 * @returns {Array} Array of fields
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getFieldsByEntityTypeName = function(sEntityTypeName) { return null; };

/**
 * 
 * Returns whether Search query is supported for this value help annotation
 * @param {object}
 *            oAnnotation - ValueHelpAnnotation
 * @returns {boolean} whether search query is supported
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getIsSearchSupported = function(oAnnotation) { return false; };

/**
 * 
 * Gets a collection of keys (field names) for the specified entity name
 * @param {String}
 *            sEntitySetName - The entity name as specified in the metadata document
 * @returns {Array} Array of key names
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getKeysByEntitySetName = function(sEntitySetName) { return null; };

/**
 * 
 * Gets a collection keys (field names) for the specified entity type
 * @param {String}
 *            sEntityTypeName - The entity type name as specified in the metadata document
 * @returns {Array} Array of key names
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getKeysByEntityTypeName = function(sEntityTypeName) { return null; };

/**
 * 
 * Returns the namespace from the Schema
 * @returns {string} the namespace
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getNamespace = function() { return ""; };

/**
 * 
 * Retrieves the ValueList Annotation for the specified property/target
 * @param {String}
 *            sPath the full path of the property/target (including the namespace)
 * @returns {Object} a Map of resolved ValueHelpList (if any) annotations
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getValueListAnnotation = function(sPath) { return null; };

/**
 * 
 * Removes the namespace from the specified string
 * @param sString
 * @returns String without namespace. If no namespace was found, the original string will be returned.
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.removeNamespace = function(sString) { return null; };


// ---- sap.ui.comp.providers --------------------------------------------------------------------------


// ---- sap.ui.comp.providers.BaseValueListProvider --------------------------------------------------------------------------

/**
 * 
 * Retrieves the data for a collection from the OData metadata to bind to a given control/aggregation
 * @constructor
 * @public
 * @param {object}
 *            mParams - map containing the control,aggregation,annotation and the oODataModel *
 * 
 */
sap.ui.comp.providers.BaseValueListProvider = function(mParams) {};
/**
 * 
 * Destroys the object
 * @public
 */
sap.ui.comp.providers.BaseValueListProvider.prototype.destroy = function() { return null; };


// ---- sap.ui.comp.providers.ValueHelpProvider --------------------------------------------------------------------------

/**
 * 
 * Retrieves the data for a collection from the OData metadata to bind to a given control/aggregation
 * @constructor
 * @public
 * @param {object}
 *            mParams - map containing the control,aggregation,annotation and the oODataModel
 * 
 */
sap.ui.comp.providers.ValueHelpProvider = function(mParams) {};
/**
 * 
 * Destroys the object
 * @public
 */
sap.ui.comp.providers.ValueHelpProvider.prototype.destroy = function() { return null; };


// ---- sap.ui.comp.providers.ValueListProvider --------------------------------------------------------------------------

/**
 * 
 * Retrieves the data for a collection from the OData metadata to bind to a given control/aggregation
 * @constructor
 * @public
 * @param {object}
 *            mParams - map containing the control,aggregation,annotation and the oODataModel
 * 
 */
sap.ui.comp.providers.ValueListProvider = function(mParams) {};
/**
 * 
 * Destroys the object
 * @public
 */
sap.ui.comp.providers.ValueListProvider.prototype.destroy = function() { return null; };


// ---- sap.ui.comp.smartfilterbar --------------------------------------------------------------------------


// ---- sap.ui.comp.smartfilterbar.AdditionalConfigurationHelper --------------------------------------------------------------------------

/**
 * 
 * @public
 * @constructor
 */
sap.ui.comp.smartfilterbar.AdditionalConfigurationHelper = function(aControlConfiguration,aGroupConfiguration) {};
/**
 * 
 * Returns all control configurations
 * @public
 */
sap.ui.comp.smartfilterbar.AdditionalConfigurationHelper.prototype.getControlConfiguration = function() { return null; };

/**
 * 
 * Returns the control configuration for a specified key. Returns undefined, if there is no configuration.
 * @public
 */
sap.ui.comp.smartfilterbar.AdditionalConfigurationHelper.prototype.getControlConfigurationByKey = function(sKey) { return null; };

/**
 * 
 * Returns all group configurations
 * @public
 */
sap.ui.comp.smartfilterbar.AdditionalConfigurationHelper.prototype.getGroupConfiguration = function() { return null; };


// ---- sap.ui.comp.smartfilterbar.ControlConfiguration --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smartfilterbar/ControlConfiguration.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getGroupId groupId} : string</li>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHasValueHelpDialog hasValueHelpDialog} : boolean (default: true)</li>
 * <li>{@link #getControlType controlType} : string (default: 'auto')</li>
 * <li>{@link #getFilterType filterType} : string (default: 'auto')</li>
 * <li>{@link #getIndex index} : any (default: undefined)</li>
 * <li>{@link #getHasTypeAhead hasTypeAhead} : boolean (default: true)</li>
 * <li>{@link #getMandatory mandatory} : string (default: 'auto')</li>
 * <li>{@link #getWidth width} : string</li>
 * <li>{@link #getVisibleInAdvancedArea visibleInAdvancedArea} : boolean (default: false)</li>
 * <li>{@link #getPreventInitialDataFetchInValueHelpDialog preventInitialDataFetchInValueHelpDialog} : boolean (default: true)</li>
 * <li>{@link #getDisplayBehaviour displayBehaviour} : string (default: 'auto')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDefaultFilterValues defaultFilterValues} : sap.ui.comp.smartfilterbar.SelectOption[]</li>
 * <li>{@link #getCustomControl customControl} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.smartfilterbar.ControlConfiguration#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A ControlConfiguration can be used to add additional configuration for filter fields in the SmartFilterBar, in order to overwrite the default settings from the OData metadata. For instance it is possible to change the label, index or control type of a filter field.
 * @extends sap.ui.core.Element
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartfilterbar.ControlConfiguration = function(sId,mSettings) {};
/**
 * 
 * Fired when the value of a property, for example isVisible, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Adds some defaultFilterValue <code>oDefaultFilterValue</code> 
 * to the aggregation named <code>defaultFilterValues</code>.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *            oDefaultFilterValue the defaultFilterValue to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.addDefaultFilterValue = function(oDefaultFilterValue) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/> itself. 
 * </p><p>
 * Fired when the value of a property, for example isVisible, has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/> itself.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Destroys the customControl in the aggregation 
 * named <code>customControl</code>.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.destroyCustomControl = function() { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Destroys all the defaultFilterValues in the aggregation 
 * named <code>defaultFilterValues</code>.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.destroyDefaultFilterValues = function() { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.ControlConfiguration with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'propertyName' of type <code>string</code> Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Getter for property <code>controlType</code>.
 * The SmartFilterBar calculates which kind of control will be used for a filter fields based on multiple OData Attributes and annotations. Using this property it is possible to overwrite the OData metadat. Possible values can be found here:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.CONTROLTYPE
 * </p><p>
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>controlType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getControlType = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>customControl</code>.<br/>
 * If a custom control is specified, the Smart Filter Bar will not create a control but use the custom control. Additional services like TypeAhead have to implemented manually.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getCustomControl = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>defaultFilterValues</code>.<br/>
 * Default value for a filter field.
 * @return {sap.ui.comp.smartfilterbar.SelectOption[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getDefaultFilterValues = function() { return new Array(); };

/**
 * 
 * Getter for property <code>displayBehaviour</code>.
 * The displayBehaviour specifies how the content should be displayed on certain controls.
 * Ex: DescriptionOnly for Combobox (DropDown text) , Description and ID for MultiInput (token text)
 * </p><p>
 * Possible values can be found here: sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR
 * </p><p>
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>displayBehaviour</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getDisplayBehaviour = function() { return ""; };

/**
 * 
 * Getter for property <code>filterType</code>.
 * The filter type specifies whether the filter fields is e.g. type single value, multi-value,or interval.
 * The filter type is being calculated by the martFilterBar based on the OData metadata. Using this property the filter type can be configured manually.
 * Possible value scan be found here: sap.ui.comp.smartfilterbar.ControlConfiguration.FILTERTYPE
 * </p><p>
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>filterType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getFilterType = function() { return ""; };

/**
 * 
 * Getter for property <code>groupId</code>.
 * The groupId can be used to move a field from one group to another. The groupId corresponds to the EntityName from the OData metadata. It is also possible to move a field from the advanced area to the basic area by specifying the groupId _BASIC.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>groupId</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getGroupId = function() { return ""; };

/**
 * 
 * Getter for property <code>hasTypeAhead</code>.
 * Property can be used to enable the TypeAhead service. TypeAhead does not work with all controls, e.g it does not work for DrodDownListbox
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>hasTypeAhead</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getHasTypeAhead = function() { return false; };

/**
 * 
 * Getter for property <code>hasValueHelpDialog</code>.
 * Specifies whether a value help dialog is available or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>hasValueHelpDialog</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getHasValueHelpDialog = function() { return false; };

/**
 * 
 * Getter for property <code>index</code>.
 * The zero based index can be used to specify the order of fields.
 * </p><p>
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>index</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getIndex = function() { return null; };

/**
 * 
 * Getter for property <code>key</code>.
 * The key property shall correspond to the field name from the OData service $metadata document.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>label</code>.
 * Using this property it is possible to overwrite the label of a filter field in the SmartFilterBar.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getLabel = function() { return ""; };

/**
 * 
 * Getter for property <code>mandatory</code>.
 * Property can be used to overwrite the mandatory state of a filter field.
 * Possible values: sap.ui.comp.smartfilterbar.ControlConfiguration.MANDATORY
 * Property can only be set during initialisation. Changes at runtime will be ignored.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getMandatory = function() { return ""; };

/**
 * 
 * Getter for property <code>preventInitialDataFetchInValueHelpDialog</code>.
 * In case there are value help annotations for this filter field, it is possible to specify whether the table in the value help dialog for this field will be filled initially. The default value is flase, which menas the table will be filled as the data fetch is not being prevented.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>preventInitialDataFetchInValueHelpDialog</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getPreventInitialDataFetchInValueHelpDialog = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Using this flag it is possible to hide fields from the OData metadata.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>visibleInAdvancedArea</code>.
 * If set to true this field will be added to the advanced area (aka. Dynamic Selection) by default.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>visibleInAdvancedArea</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getVisibleInAdvancedArea = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the filter field in a CSS compatible format.
 * The width can be set only once during initialisation. Changes at runtime will not be reflected.
 * The width will not be applied to custom controls.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getWidth = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.SelectOption</code> in the aggregation named <code>defaultFilterValues</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *            oDefaultFilterValue the defaultFilterValue whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.indexOfDefaultFilterValue = function(oDefaultFilterValue) { return 0; };

/**
 * 
 * Inserts a defaultFilterValue into the aggregation named <code>defaultFilterValues</code>.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *          oDefaultFilterValue the defaultFilterValue to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the defaultFilterValue should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the defaultFilterValue is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the defaultFilterValue is inserted at 
 *             the last position        
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.insertDefaultFilterValue = function(oDefaultFilterValue,iIndex) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>defaultFilterValues</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartfilterbar.SelectOption[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.removeAllDefaultFilterValues = function() { return new Array(); };

/**
 * 
 * Removes an defaultFilterValue from the aggregation named <code>defaultFilterValues</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.SelectOption} vDefaultFilterValue the defaultFilterValue to remove or its index or id
 * @return {sap.ui.comp.smartfilterbar.SelectOption} the removed defaultFilterValue or null
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.removeDefaultFilterValue = function(vDefaultFilterValue) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * 
 * Setter for property <code>controlType</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {string} sControlType  new value for property <code>controlType</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setControlType = function(sControlType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for the aggregated <code>customControl</code>.
 * @param {sap.ui.core.Control} oCustomControl
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setCustomControl = function(oCustomControl) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>displayBehaviour</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {string} sDisplayBehaviour  new value for property <code>displayBehaviour</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setDisplayBehaviour = function(sDisplayBehaviour) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>filterType</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {string} sFilterType  new value for property <code>filterType</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setFilterType = function(sFilterType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>groupId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sGroupId  new value for property <code>groupId</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setGroupId = function(sGroupId) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>hasTypeAhead</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bHasTypeAhead  new value for property <code>hasTypeAhead</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setHasTypeAhead = function(bHasTypeAhead) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>hasValueHelpDialog</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bHasValueHelpDialog  new value for property <code>hasValueHelpDialog</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setHasValueHelpDialog = function(bHasValueHelpDialog) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>index</code>.
 * </p><p>
 * Default value is <code>undefined</code> 
 * @param {any} oIndex  new value for property <code>index</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setIndex = function(oIndex) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setKey = function(sKey) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>label</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setLabel = function(sLabel) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>mandatory</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {string} sMandatory  new value for property <code>mandatory</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setMandatory = function(sMandatory) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>preventInitialDataFetchInValueHelpDialog</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bPreventInitialDataFetchInValueHelpDialog  new value for property <code>preventInitialDataFetchInValueHelpDialog</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setPreventInitialDataFetchInValueHelpDialog = function(bPreventInitialDataFetchInValueHelpDialog) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setVisible = function(bVisible) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>visibleInAdvancedArea</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bVisibleInAdvancedArea  new value for property <code>visibleInAdvancedArea</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setVisibleInAdvancedArea = function(bVisibleInAdvancedArea) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sWidth  new value for property <code>width</code>
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setWidth = function(sWidth) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };


// ---- sap.ui.comp.smartfilterbar.FilterProvider --------------------------------------------------------------------------

/**
 * 
 * Constructs a class to generate the view/datamodel metadata for the SmartFilterBar from the SAP-Annotations metadata
 * @constructor
 * @public
 * @param {object}
 *            mPropertyBag - PropertyBag having members model, serviceUrl, entityType, additionalConfiguration
 * 
 */
sap.ui.comp.smartfilterbar.FilterProvider = function(mPropertyBag) {};
/**
 * 
 * Destroys the object
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.destroy = function() { return null; };

/**
 * 
 * Returns the filled data currently set in the filter data model
 * @param {Array}
 *            aFieldNames - the names of the fields whose values should be returned (Ex: visible fields)
 * @returns {object} the json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getFilledFilterData = function(aFieldNames) { return new Object(); };

/**
 * 
 * Returns the filled data currently set in the filter data model as string
 * @param {Array}
 *            aFieldNames - the names of the fields whose values should be returned (Ex: visible fields)
 * @returns {string} the string json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getFilledFilterDataAsString = function(aFieldNames) { return ""; };

/**
 * 
 * Get the filterable fields
 * @returns {Array}
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getFilterBarViewMetadata = function() { return null; };

/**
 * 
 * Returns the data currently set in the filter data model
 * @returns {object} the json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getFilterData = function() { return new Object(); };

/**
 * 
 * Returns the data currently set in the filter data model as string
 * @returns {string} the string json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getFilterDataAsString = function() { return ""; };

/**
 * 
 * Returns an array of filters that can be used to restrict the query result from OData
 * @param {Array}
 *            aFieldNames - the names of the fields whose values should be returned (Ex: visible fields)
 * @returns {Array} array of filters if any
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getFilters = function(aFieldNames) { return null; };

/**
 * 
 * Get the model
 * @returns {Object}
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getModel = function() { return null; };

/**
 * 
 * Returns an parameter object which can be used to restrict the query result from OData. This function is required only for the basic search.
 * @returns {object} object containing OData query parameters
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.getParameters = function() { return new Object(); };

/**
 * 
 * Resets the model
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.reset = function() { return null; };

/**
 * 
 * Sets the data in the filter data model
 * @param {object}
 *            oJson - the json data in the filter bar
 * @param {boolean}
 *            bReplace - Replace existing filter data
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.setFilterData = function(oJson,bReplace) { return null; };

/**
 * 
 * Sets the data in the filter data model as string
 * @param {string}
 *            sJson - the json data in the filter bar
 * @param {boolean}
 *            bReplace - Replace existing filter data
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.setFilterDataAsString = function(sJson,bReplace) { return null; };


// ---- sap.ui.comp.smartfilterbar.GroupConfiguration --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smartfilterbar/GroupConfiguration.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getIndex index} : any (default: undefined)</li>
 * <li>{@link #getLabel label} : any (default: undefined)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.smartfilterbar.GroupConfiguration#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A GroupConfiguration can be used to add additional configurations for groups in the SmartFilterBar. A group in the SmartFilterBar is a group of filter fields in the advanced search.
 * @extends sap.ui.core.Element
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartfilterbar.GroupConfiguration = function(sId,mSettings) {};
/**
 * 
 * Fired when the value of a property, for example label, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/> itself. 
 * </p><p>
 * Fired when the value of a property, for example label, has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/> itself.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.GroupConfiguration with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'propertyName' of type <code>string</code> Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * 
 * Getter for property <code>index</code>.
 * Zero based integer index.
 * The index can be used to specify the order of groups. If no index is specified, the order like in the OData metadata will be used.
 * </p><p>
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>index</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getIndex = function() { return null; };

/**
 * 
 * Getter for property <code>key</code>.
 * The key property shall correspond to the name EntityTypeName from the OData service $metadata document.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>label</code>.
 * Using this property it is possible to overwrite the label of a group in the advanced area of the SmartFilterBar.
 * </p><p>
 * Default value is <code>undefined</code>
 * @return {any} the value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getLabel = function() { return null; };

/**
 * 
 * Setter for property <code>index</code>.
 * </p><p>
 * Default value is <code>undefined</code> 
 * @param {any} oIndex  new value for property <code>index</code>
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setIndex = function(oIndex) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setKey = function(sKey) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * 
 * Setter for property <code>label</code>.
 * </p><p>
 * Default value is <code>undefined</code> 
 * @param {any} oLabel  new value for property <code>label</code>
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setLabel = function(oLabel) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };


// ---- sap.ui.comp.smartfilterbar.SelectOption --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smartfilterbar/SelectOption.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSign sign} : string (default: 'I')</li>
 * <li>{@link #getOperator operator} : string (default: 'EQ')</li>
 * <li>{@link #getLow low} : string</li>
 * <li>{@link #getHigh high} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A Select Option can be used to specify default filter values for a control configuration of the SmartFilterBar.
 * @extends sap.ui.core.Element
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartfilterbar.SelectOption = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.SelectOption with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>high</code>.
 * The high value for a select option. The high value is only required for a few operators, e.g. BT (between).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>high</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getHigh = function() { return ""; };

/**
 * 
 * Getter for property <code>low</code>.
 * The low value for a select option.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>low</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getLow = function() { return ""; };

/**
 * 
 * Getter for property <code>operator</code>.
 * The operator for a select option. The default value is EQ "for equals". Possible values can be found here: sap.ui.comp.smartfilterbar.SelectOption.OPERATOR.
 * </p><p>
 * Default value is <code>EQ</code>
 * @return {string} the value of property <code>operator</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getOperator = function() { return ""; };

/**
 * 
 * Getter for property <code>sign</code>.
 * The sign for a Select Option. Possible values are I for include or E for exclude. Constants can be found here: sap.ui.comp.smartfilterbar.SelectOption.SIGN
 * </p><p>
 * Default value is <code>I</code>
 * @return {string} the value of property <code>sign</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getSign = function() { return ""; };

/**
 * 
 * Setter for property <code>high</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHigh  new value for property <code>high</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setHigh = function(sHigh) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * 
 * Setter for property <code>low</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLow  new value for property <code>low</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setLow = function(sLow) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * 
 * Setter for property <code>operator</code>.
 * </p><p>
 * Default value is <code>EQ</code> 
 * @param {string} sOperator  new value for property <code>operator</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setOperator = function(sOperator) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * 
 * Setter for property <code>sign</code>.
 * </p><p>
 * Default value is <code>I</code> 
 * @param {string} sSign  new value for property <code>sign</code>
 * @return {sap.ui.comp.smartfilterbar.SelectOption} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setSign = function(sSign) { return new sap.ui.comp.smartfilterbar.SelectOption(); };


// ---- sap.ui.comp.smartfilterbar.SmartFilterBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smartfilterbar/SmartFilterBar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEntityType entityType} : string</li>
 * <li>{@link #getResourceUri resourceUri} : string</li>
 * <li>{@link #getBasicSearchFieldName basicSearchFieldName} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControlConfiguration controlConfiguration} : sap.ui.comp.smartfilterbar.ControlConfiguration[]</li>
 * <li>{@link #getGroupConfiguration groupConfiguration} : sap.ui.comp.smartfilterbar.GroupConfiguration[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.smartfilterbar.SmartFilterBar#event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.comp.filterbar.FilterBar#constructor sap.ui.comp.filterbar.FilterBar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The SmartFilterBar uses the OData metadata of an entity type in order to create a FilterBar. It is automatically determined which fields will be used for the filter bar, if the fields support TypeAhead etc. Using control configurations and group configurations it is possible to configure the filter bar and adapt it according to your needs.
 * @extends sap.ui.comp.filterbar.FilterBar
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartfilterbar.SmartFilterBar = function(sId,mSettings) {};
/**
 * 
 * Event fired when the filter bar is initialized and its controls are created
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.initialise = function(oControlEvent) { return null; };

/**
 * 
 * Adds some controlConfiguration <code>oControlConfiguration</code> 
 * to the aggregation named <code>controlConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *            oControlConfiguration the controlConfiguration to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addControlConfiguration = function(oControlConfiguration) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Search for the filter field having the specified OData key and adds this filter field to the advanced area. If there is no corresponding field in the OData
 * metadata, this method has no effect.
 * @param {string}
 *            sKey - the key like specified in the OData metadata
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addFieldToAdvancedArea = function(sKey) { return null; };

/**
 * 
 * Adds some groupConfiguration <code>oGroupConfiguration</code> 
 * to the aggregation named <code>groupConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *            oGroupConfiguration the groupConfiguration to add; if empty, nothing is inserted
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addGroupConfiguration = function(oGroupConfiguration) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code>.<br/> itself. 
 * </p><p>
 * Event fired when the filter bar is initialized and its controls are created
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code>.<br/> itself.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Destroys the control
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroy = function() { return null; };

/**
 * 
 * Destroys all the controlConfiguration in the aggregation 
 * named <code>controlConfiguration</code>.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroyControlConfiguration = function() { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Destroys all the groupConfiguration in the aggregation 
 * named <code>groupConfiguration</code>.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroyGroupConfiguration = function() { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.SmartFilterBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * returns an JS Object containing all information from the additional configuration (controlConfiguration, groupConfiguration)
 * @returns {object}
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getAdditionalConfiguration = function() { return new Object(); };

/**
 * 
 * Returns an instance of the control for the basic search.
 * @returns {object} basic search control
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getBasicSearchControl = function() { return new Object(); };

/**
 * 
 * Getter for property <code>basicSearchFieldName</code>.
 * Name of the field used for the basic search. The OData value list annotation should contain sap:searchable="true" to enable basic search.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>basicSearchFieldName</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getBasicSearchFieldName = function() { return ""; };

/**
 * 
 * Returns the control (if any) with the specified key. (Property name in OData entity)
 * @param {string}
 *            sKey - the key as present in the OData property name/control configuration. Use just the property name as the key when getting a control from the
 *            basic area. Ex: "CompanyCode" & Use "EntityName/GroupName.FieldName" format to get controls from groups. Ex:"Account.CompanyCode"
 * @returns {object|sap.ui.Control} the control in the filter bar, if any
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getControlByKey = function(sKey) { return new Object(); };

/**
 * 
 * Getter for aggregation <code>controlConfiguration</code>.<br/>
 * Using control configurations you can add additional configuration to filter fields, for example set custom labels, change the order of fields, or change the filter field control type. Note: Changing the values here after the SmartFilter is initialised (initialise event was fired) shall have no effect.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getControlConfiguration = function() { return new Array(); };

/**
 * 
 * Getter for property <code>entityType</code>.
 * The OData entity type whose metadata shall be used to create the SmartFilterBar.
 * Note: Changing this value after the SmartFilter is initialised (initialise event was fired) shall have no effect.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>entityType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getEntityType = function() { return ""; };

/**
 * 
 * Returns the data currently set in the filter data model
 * @param {boolean}
 *            bAllFilterData - Also include empty/invisible fields filter data
 * @returns {object} the json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterData = function(bAllFilterData) { return new Object(); };

/**
 * 
 * Returns the data currently set in the filter data model as string
 * @param {boolean}
 *            bAllFilterData - Also include empty/invisible fields filter data
 * @returns {string} the string json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterDataAsString = function(bAllFilterData) { return ""; };

/**
 * 
 * Returns an array of filters that can be used to restrict the query result from OData - Returns the results for visible fields only
 * @returns {Array} array of filters
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilters = function() { return null; };

/**
 * 
 * Getter for aggregation <code>groupConfiguration</code>.<br/>
 * Provides the possibility to add additional configuration to groups. Groups are used to show fields in the advanced area of the SmartFilterBar. With additional configuration, you can for example set custom labels or change the order of groups.
 * Note: Changing the values here after the SmartFilter is initialised (initialise event was fired) shall have no effect.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getGroupConfiguration = function() { return new Array(); };

/**
 * 
 * Returns a parameter object that can be used to restrict the query result from OData in case of basic search
 * @returns {object} parameter object containing OData query parameters
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getParameters = function() { return new Object(); };

/**
 * 
 * Getter for property <code>resourceUri</code>.
 * Optional. The OData service URL. If it is not specified, the service URL from the OData model (this.getModel()) will be used.
 * Note: Changing this value after the SmartFilter is initialised (initialise event was fired) shall have no effect.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>resourceUri</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getResourceUri = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code> in the aggregation named <code>controlConfiguration</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *            oControlConfiguration the controlConfiguration whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.indexOfControlConfiguration = function(oControlConfiguration) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code> in the aggregation named <code>groupConfiguration</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *            oGroupConfiguration the groupConfiguration whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.indexOfGroupConfiguration = function(oGroupConfiguration) { return 0; };

/**
 * 
 * Inserts a controlConfiguration into the aggregation named <code>controlConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *          oControlConfiguration the controlConfiguration to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the controlConfiguration should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the controlConfiguration is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the controlConfiguration is inserted at 
 *             the last position        
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.insertControlConfiguration = function(oControlConfiguration,iIndex) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Inserts a groupConfiguration into the aggregation named <code>groupConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *          oGroupConfiguration the groupConfiguration to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the groupConfiguration should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the groupConfiguration is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the groupConfiguration is inserted at 
 *             the last position        
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.insertGroupConfiguration = function(oGroupConfiguration,iIndex) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>controlConfiguration</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeAllControlConfiguration = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>groupConfiguration</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeAllGroupConfiguration = function() { return new Array(); };

/**
 * 
 * Removes an controlConfiguration from the aggregation named <code>controlConfiguration</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.ControlConfiguration} vControlConfiguration the controlConfiguration to remove or its index or id
 * @return {sap.ui.comp.smartfilterbar.ControlConfiguration} the removed controlConfiguration or null
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeControlConfiguration = function(vControlConfiguration) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * 
 * Removes an groupConfiguration from the aggregation named <code>groupConfiguration</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.GroupConfiguration} vGroupConfiguration the groupConfiguration to remove or its index or id
 * @return {sap.ui.comp.smartfilterbar.GroupConfiguration} the removed groupConfiguration or null
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeGroupConfiguration = function(vGroupConfiguration) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * 
 * Setter for property <code>basicSearchFieldName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sBasicSearchFieldName  new value for property <code>basicSearchFieldName</code>
 * @return {sap.ui.comp.smartfilterbar.SmartFilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setBasicSearchFieldName = function(sBasicSearchFieldName) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * 
 * The entity type name from OData metadata, for which the filter bar shall be created
 * @param {string}
 *            sEntityTypeName
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setEntityType = function(sEntityTypeName) { return null; };

/**
 * 
 * Sets the data in the filter data model
 * @param {object}
 *            oJson - the json data in the filter bar *
 * @param {boolean}
 *            bReplace - Replace existing filter data
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterData = function(oJson,bReplace) { return null; };

/**
 * 
 * Sets the data in the filter data model as string
 * @param {string}
 *            sJson - the json data in the filter bar *
 * @param {boolean}
 *            bReplace - Replace existing filter data
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterDataAsString = function(sJson,bReplace) { return null; };

/**
 * 
 * Uses the provided resource URI to fetch the OData metadata instead of using the default ODataModel (getModel()). You should only set this if you intend to
 * get the metadata for the filter bar from elsewhere!
 * @param {string}
 *            sResourceUri - The URI of the oData service from which the metadata would be read
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setResourceUri = function(sResourceUri) { return null; };


// ---- sap.ui.comp.valuehelpdialog --------------------------------------------------------------------------


// ---- sap.ui.comp.valuehelpdialog.ItemsCollection --------------------------------------------------------------------------

/**
 * 
 * Constructs a class to map key/object pairs
 * @constructor
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ItemsCollection = function() {};
/**
 * 
 * add or overwrite a key in the map and the associated obj
 * @param {string}
 *            sKey - the key of the obj in the map
 * @param {object}
 *            obj - the obj which has to been stored in the map
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.add = function(sKey,obj) { return null; };

/**
 * 
 * returns the obj of the key on the map
 * @param {string}
 *            sKey - the key of the obj in the map
 * @returns {object} the object with the given key
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.getItem = function(sKey) { return new Object(); };

/**
 * 
 * returns an array of all keys in the map
 * @returns {array} the array of all the map keys
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.getItems = function() { return null; };

/**
 * 
 * returns an array of all objects in the map
 * @returns {array} the array of all the map objects
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.getModelData = function() { return null; };

/**
 * 
 * returns an array of all selected tokens in the map
 * @param {string}
 *            sDescriptionKey - the property name of the obj in the map which will be returned in the array
 * @param {string}
 *            sDisplayBehaviour - the behaviour/format of the token text (See: sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR)
 * @returns {array} array of objects with the given key and the text value
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.getSelectedItemsTokenArray = function(sDescriptionKey,sDisplayBehaviour) { return null; };

/**
 * 
 * removes the key in the map and the associated obj
 * @param {string}
 *            sKey - the key of the obj in the map
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.remove = function(sKey) { return null; };

/**
 * 
 * removes all the items
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.removeAll = function() { return null; };


// ---- sap.ui.comp.valuehelpdialog.ValueHelpDialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new valuehelpdialog/ValueHelpDialog.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getBasicSearchText basicSearchText} : string</li>
 * <li>{@link #getSupportMultiselect supportMultiselect} : boolean (default: true)</li>
 * <li>{@link #getSupportRanges supportRanges} : boolean (default: false)</li>
 * <li>{@link #getDescriptionKey descriptionKey} : string</li>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getSupportRangesOnly supportRangesOnly} : boolean (default: false)</li>
 * <li>{@link #getMaxIncludeRanges maxIncludeRanges} : string (default: '-1')</li>
 * <li>{@link #getMaxExcludeRanges maxExcludeRanges} : string (default: '-1')</li>
 * <li>{@link #getDisplayFormat displayFormat} : string</li>
 * <li>{@link #getTokenDisplayBehaviour tokenDisplayBehaviour} : string</li>
 * <li>{@link #getFilterMode filterMode} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterBar filterBar} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.valuehelpdialog.ValueHelpDialog#event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.valuehelpdialog.ValueHelpDialog#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The ValueHelpDialog Control can be used to implement an F4 value help for a multi-input field.
 * @extends sap.m.Dialog
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog = function(sId,mSettings) {};
/**
 * 
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.cancel = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired when the user clicks the OK button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.ok = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/> itself.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'ok' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired when the user clicks the OK button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/> itself.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Destroys the filterBar in the aggregation 
 * named <code>filterBar</code>.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.destroyFilterBar = function() { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'ok' event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.valuehelpdialog.ValueHelpDialog with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event cancel to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Fire event ok to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireOk = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Getter for property <code>basicSearchText</code>.
 * This property defines the value for the basic search field.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>basicSearchText</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getBasicSearchText = function() { return ""; };

/**
 * 
 * Getter for property <code>descriptionKey</code>.
 * This property defines the column/key name used for the token text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>descriptionKey</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getDescriptionKey = function() { return ""; };

/**
 * 
 * Getter for property <code>displayFormat</code>.
 * This represents the displayFormat of the Range Values. With the value "UpperCase" the entered value of the Range willbe converted to upperCase.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>displayFormat</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getDisplayFormat = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>filterBar</code>.<br/>
 * This allows a SmartFilterBar to be added to the ValueHelp dialog.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getFilterBar = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>filterMode</code>.
 * set the dialog into a FilterDialog mode, which only shows ranges and hide the tokens.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>filterMode</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getFilterMode = function() { return false; };

/**
 * 
 * Getter for property <code>key</code>.
 * This is the key property of the OData service for handling in the table and tokens
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>maxExcludeRanges</code>.
 * defines the max number of exclude ranges
 * </p><p>
 * Default value is <code>-1</code>
 * @return {string} the value of property <code>maxExcludeRanges</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getMaxExcludeRanges = function() { return ""; };

/**
 * 
 * Getter for property <code>maxIncludeRanges</code>.
 * defines the max number of include ranges.
 * </p><p>
 * Default value is <code>-1</code>
 * @return {string} the value of property <code>maxIncludeRanges</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getMaxIncludeRanges = function() { return ""; };

/**
 * 
 * Getter for property <code>supportMultiselect</code>.
 * This property enables multi-selection in a table.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>supportMultiselect</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportMultiselect = function() { return false; };

/**
 * 
 * Getter for property <code>supportRanges</code>.
 * This property enables the Ranges button on the dialog.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>supportRanges</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportRanges = function() { return false; };

/**
 * 
 * Getter for property <code>supportRangesOnly</code>.
 * When this property is set to true, the value help dialog only shows range tokens.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>supportRangesOnly</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportRangesOnly = function() { return false; };

/**
 * 
 * Getter for property <code>tokenDisplayBehaviour</code>.
 * This represents how the item token text should be displayed on the ValueHelpDialog.
 * Use one of the valid sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR const values.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>tokenDisplayBehaviour</code>
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getTokenDisplayBehaviour = function() { return ""; };

/**
 * 
 * Initialize the control
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.init = function() { return null; };

/**
 * 
 * opens the dialog when SupportRangesOnly is set to True we directly show the Ranges part
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.open = function() { return null; };

/**
 * 
 * Reset the table binding and change the table NoDataText to "Please press Search Button"
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.resetTableState = function() { return null; };

/**
 * 
 * sets the Basic search text. The value will be set into the basic search field of the Filterbar
 * @public
 * @param {string}
 *            sText the text for the basic search field
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setBasicSearchText = function(sText) { return null; };

/**
 * 
 * Setter for property <code>descriptionKey</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescriptionKey  new value for property <code>descriptionKey</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setDescriptionKey = function(sDescriptionKey) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Setter for property <code>displayFormat</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDisplayFormat  new value for property <code>displayFormat</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setDisplayFormat = function(sDisplayFormat) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * setter for the supported Exclude range operations array
 * @public
 * @param {array}
 *            array of Range operations [sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT, sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.EQ]
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setExcludeRangeOperations = function(array) { return null; };

/**
 * 
 * sets the FilterBar into the Value Help dialog.
 * @public
 * @param {FilterBar/SmartFilterBar}
 *            oControl
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setFilterBar = function(oControl) { return null; };

/**
 * 
 * Setter for property <code>filterMode</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFilterMode  new value for property <code>filterMode</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setFilterMode = function(bFilterMode) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * setter for the supported Include range operations array
 * @public
 * @param {array}
 *            array of Range operations [sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT, sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.EQ]
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setIncludeRangeOperations = function(array) { return null; };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setKey = function(sKey) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * setter for a keys array
 * @public
 * @param {array}
 *            array of strings with the keys
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setKeys = function(array) { return null; };

/**
 * 
 * Setter for property <code>maxExcludeRanges</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {string} sMaxExcludeRanges  new value for property <code>maxExcludeRanges</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setMaxExcludeRanges = function(sMaxExcludeRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * Setter for property <code>maxIncludeRanges</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {string} sMaxIncludeRanges  new value for property <code>maxIncludeRanges</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setMaxIncludeRanges = function(sMaxIncludeRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * setter for a RangeKeyFields array
 * @public
 * @param {array}
 *            array of Range KeyFields [{key: "CompanyCode", label: "ID"}, {key:"CompanyName", label : "Name"}]
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setRangeKeyFields = function(array) { return null; };

/**
 * 
 * sets the support for multiselection.
 * @public
 * @param {boolean}
 *            bEnabled enabled or disabled multiselection
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportMultiselect = function(bEnabled) { return null; };

/**
 * 
 * sets the support for ranges. When you disable ranges the dialog does not provide a "Define Condition" link in the header which opens the ranges UI in the
 * value help dialog.
 * @public
 * @param {boolean}
 *            bEnabled enabled or disabled ranges support
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportRanges = function(bEnabled) { return null; };

/**
 * 
 * Setter for property <code>supportRangesOnly</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSupportRangesOnly  new value for property <code>supportRangesOnly</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportRangesOnly = function(bSupportRangesOnly) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * sets the Title of the dialog. The value will be used for the different titles which we display on the dialog. The dialog title changes depending on the
 * content. Select: {sTitle} Define Conditions: {sTitle} Selected Items: {sTitle}
 * @public
 * @param {string}
 *            sTitle
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTitle = function(sTitle) { return null; };

/**
 * 
 * Setter for property <code>tokenDisplayBehaviour</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTokenDisplayBehaviour  new value for property <code>tokenDisplayBehaviour</code>
 * @return {sap.ui.comp.valuehelpdialog.ValueHelpDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTokenDisplayBehaviour = function(sTokenDisplayBehaviour) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * 
 * sets the array of tokens. The sap.mTokens will be added into the Dialog Tokenizer "Selected Items" or "Excluded Items". normal Tokens will added into the
 * Selected Items Tokenizer and selected in the table new sap.m.Token({key: "0001", text:"SAP A.G. (0001)"}); Tokens with the extra data "range" will be handled
 * as Range tokens or exclude Range tokens. new sap.m.Token({key: "i1", text: "ID: a..z"}).data("range", { "exclude": false, "operation":
 * sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT, "keyField": "CompanyCode", "value1": "a", "value2": "z"}); You the the Selected or Range tokens back
 * via the Ok event in the parameters
 * @public
 * @param {array}
 *            aTokens the complete list of tokens
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTokens = function(aTokens) { return null; };

/**
 * 
 * Change the table NoDataText to "No Data found!"
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.TableStateDataFilled = function() { return null; };

/**
 * 
 * Change the table NoDataText to "Please press Search Button"
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.TableStateSearchData = function() { return null; };

/**
 * 
 * updates the selection of rows in the table. should be called after a binding update of the table.
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.update = function() { return null; };


// ---- sap.ui.comp.valuehelpdialog.ValueHelpService --------------------------------------------------------------------------

/**
 * 
 * </p><p>
 * OData bases Value Help Service which internal uses the ValueHelpDialog. Please do not use! deprecated!!!
 * @deprecated
 * @constructor
 * @this sap.ui.comp.valuehelpdialog.ValueHelpService
 * @public
 */
sap.ui.comp.valuehelpdialog.ValueHelpService = function(mParams) {};

// ---- sap.ui.comp.variants --------------------------------------------------------------------------


// ---- sap.ui.comp.variants.EditableVariantItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new variants/EditableVariantItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.InputListItem#constructor sap.m.InputListItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Edittable Variant List item for the Management Popup
 * @extends sap.m.InputListItem
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.variants.EditableVariantItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.comp.variants.EditableVariantItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.EditableVariantItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>key</code>.
 * Key of the List Item
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getKey = function() { return ""; };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setKey = function(sKey) { return new sap.ui.comp.variants.EditableVariantItem(); };


// ---- sap.ui.comp.variants.VariantManagement --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new variants/VariantManagement.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getInitialSelectionKey initialSelectionKey} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDefaultVariantKey defaultVariantKey} : string</li>
 * <li>{@link #getSelectionKey selectionKey} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.variants.VariantManagement#event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.variants.VariantManagement#event:manage manage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.variants.VariantManagement#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The variant management control can be used to manage variants, such as filter bar variants or table variants.
 * @extends sap.ui.core.Control
 * @version 1.24.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.variants.VariantManagement = function(sId,mSettings) {};
/**
 * 
 * Event fired if users apply changes to variants in the manage variants dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.variants.VariantManagement.prototype.manage = function(oControlEvent) { return null; };

/**
 * 
 * Event fired if the save variant dialog is closed with ok for a variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.variants.VariantManagement.prototype.save = function(oControlEvent) { return null; };

/**
 * 
 * Event fired if a new variant is selected.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.variants.VariantManagement.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addItem = function(oItem) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'manage' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself. 
 * </p><p>
 * Event fired if users apply changes to variants in the manage variants dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachManage = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'save' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself. 
 * </p><p>
 * Event fired if the save variant dialog is closed with ok for a variant.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself. 
 * </p><p>
 * Event fired if a new variant is selected.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Removes the current variant selection and resets to default value.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.variants.VariantManagement.prototype.clearVariantSelection = function() { return null; };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'manage' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachManage = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'save' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachSave = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.comp.variants.VariantManagement</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.variants.VariantManagement with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantManagement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event manage to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireManage = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Fire event save to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireSave = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireSelect = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Getter for property <code>defaultVariantKey</code>.
 * Provides a string value to set the default variant. Used for the save dialog. Has no effect on the selected variant.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>defaultVariantKey</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getDefaultVariantKey = function() { return ""; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Enables or disables the control.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>initialSelectionKey</code>.
 * Provides a string value to set the initially selected variant.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>initialSelectionKey</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getInitialSelectionKey = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation for items displayed by the variant management control.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for variants/VariantManagement.
 * @return {sap.ui.core.Item[]}
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionKey</code>.
 * The key of the currently selected item. Returns null if the default item ist selected.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>selectionKey</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getSelectionKey = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Shows or hides the control.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * 
 * Setter for property <code>defaultVariantKey</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDefaultVariantKey  new value for property <code>defaultVariantKey</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setDefaultVariantKey = function(sDefaultVariantKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setEnabled = function(bEnabled) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Setter for property <code>initialSelectionKey</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sInitialSelectionKey  new value for property <code>initialSelectionKey</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setInitialSelectionKey = function(sInitialSelectionKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Setter for property <code>selectionKey</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSelectionKey  new value for property <code>selectionKey</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setSelectionKey = function(sSelectionKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setVisible = function(bVisible) { return new sap.ui.comp.variants.VariantManagement(); };

// ---- static fields of namespaces ---------------------------------------------------------------------
