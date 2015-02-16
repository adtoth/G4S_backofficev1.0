
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
 * <li>{@link #getExpandAdvancedArea expandAdvancedArea} : boolean (default: true)</li>
 * <li>{@link #getSearchEnabled searchEnabled} : boolean (default: true)</li>
 * <li>{@link #getFilterBarExpanded filterBarExpanded} : boolean (default: true)</li>
 * <li>{@link #getConsiderGroupTitle considerGroupTitle} : boolean (default: false)</li>
 * <li>{@link #getShowClearButton showClearButton} : boolean (default: false)</li>
 * <li>{@link #getShowRestoreButton showRestoreButton} : boolean (default: true)</li>
 * <li>{@link #getShowGoButton showGoButton} : boolean (default: true)</li></ul>
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
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:clear clear} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.filterbar.FilterBar#event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.layout.Grid#constructor sap.ui.layout.Grid}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The FilterBar control displays filters in a user-friendly manner to populate values for a query. The FilterBar consists of a row containing the variant management control, the related buttons, and an area underneath displaying the filters.
 * The filters are arranged in a logical row that is divided depending on the space available and the width of the filters.
 * The area containing the filters can be hidden or shown using the HideFilterBar/ShowFilterBar button. The 'Go' button triggers the search event, and the 'Filters' button shows the filter dialog. In this dialog, the user has full control over the filter bar. The filters in this dialog are displayed in one column and organized in groups. The filter items of the filterItems aggregation are grouped in the 'Basic' group . Each filter can be marked as visible in the filter bar by selecting 'Add to Filter Bar'. In addition, the items in the 'filterGroupItems' aggregation can be marked as a part of the current variant.
 * The variant management control will be displayed above the filters.
 * The FilterBar also supports a different UI layout when used inside a value help dialog. In this case the FilterBar consists of two logical areas, one containing the general search button and in the s.c. 'Advanced Search' area.
 * The 'Advanced Search' is a collapsible area displaying the advanced filters in two columns.
 * @extends sap.ui.layout.Grid
 * @version 1.26.4
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
 * Event fired if the Clear button is executed. The intention is to clear every filter.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.clear = function(oControlEvent) { return null; };

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
 * Event fired when the filter bar is initialized and its controls are created
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.initialise = function(oControlEvent) { return null; };

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
 * @param {sap.ui.comp.filterbar.FilterGroupItem} oFilterGroupItem group filter item
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterGroupItem = function(oFilterGroupItem) { return null; };

/**
 * 
 * add an FilterItem element to the basic area
 * @public
 * @param {sap.ui.comp.filterbar.FilterItem} oFilterItem filter item
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
 * Attach event handler <code>fnFunction</code> to the 'clear' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * Event fired if the Clear button is executed. The intention is to clear every filter.
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
sap.ui.comp.filterbar.FilterBar.prototype.attachClear = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

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
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/> itself. 
 * </p><p>
 * Event fired when the filter bar is initialized and its controls are created
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
sap.ui.comp.filterbar.FilterBar.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

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
 * Detach event handler <code>fnFunction</code> from the 'clear' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
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
sap.ui.comp.filterbar.FilterBar.prototype.detachClear = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

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
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.filterbar.FilterBar</code>.<br/>
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
sap.ui.comp.filterbar.FilterBar.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

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
 * @param {sap.ui.comp.filterbar.Filter.FilterItem} oFilterItem from the aggregations
 * @returns {sap.ui.core.Control} the corresponding control. If no match is found null will returned.
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByFilterItem = function(oFilterItem) { return new sap.ui.core.Control(); };

/**
 * 
 * retrieve the control based on the name and group name
 * @public
 * @param {string} sName the control's name
 * @param {string} sGroupName is null for basic area
 * @returns {sap.ui.core.Control} the corresponding control. If no match is found null will returned. For filters in the advanced area the
 *          visibleInAdvancedArea flag is considered
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
 * Fire event beforeVariantSave to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireBeforeVariantSave = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Fire event clear to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireClear = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * read the personalization, apply eventual variants and inform all registered parties about the initialization finish. In case a default variant
 * exists, trigger search
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
 * The advance mode overwrites the standard behavior such that:
 * - the text 'Dynamic Selection' is replaced by 'Advanced Search'
 * - all filter fields are added to the advanced area
 * - the Restore button is hidden
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
 * @param {boolean} bConsiderOnlyVisibleFields based on this flag either all or just the visible/partOfCurrentVariant items are returned
 * @returns {array} array of all/only visible/partOfCurrentVariant items
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAllFilterItems = function(bConsiderOnlyVisibleFields) { return null; };

/**
 * 
 * Getter for property <code>considerGroupTitle</code>.
 * If this property is set, then the label for filters with a filter group title will be enhanced with the group title.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>considerGroupTitle</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getConsiderGroupTitle = function() { return false; };

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
 * Getter for property <code>filterBarExpanded</code>.
 * allow to display the FilterBar in expanded /collapsed mode
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>filterBarExpanded</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterBarExpanded = function() { return false; };

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
 * Getter for property <code>showClearButton</code>.
 * indicates if the 'Clear' button should be shown.
 * Has to be set during filter bar initialization.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showClearButton</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowClearButton = function() { return false; };

/**
 * 
 * Getter for property <code>showGoButton</code>.
 * indicates if the 'Go' button should be shown in the filter bar.
 * Has to be set during FilterBar initialization.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGoButton</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowGoButton = function() { return false; };

/**
 * 
 * Getter for property <code>showRestoreButton</code>.
 * indicates if the 'Restore' button should be shown.
 * Has to be set during filter bar initialization.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showRestoreButton</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowRestoreButton = function() { return false; };

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
 * fCallBack for being able to participate in variant handling. This fCallBack will be executed, when ever a variant has to be applied. The fCallBack
 * will receive the corresponding data set, in Json notation, containing all relevant data as initially provided by the fCallBack for fetchData
 * @public
 * @param {function} fCallBack to be called, when a variant has to be applied
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerApplyData = function(fCallBack) { return null; };

/**
 * 
 * fCallBack for being able to participate in variant save handling. This fCallBack will be executed, whenever the variant save is triggered and has
 * to provide, in Json notation, all relevant fields and values. This data blob will be saved along with the current variant
 * @public
 * @param {function} fCallBack to be called, when a variant has to be applied
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerFetchData = function(fCallBack) { return null; };

/**
 * 
 * fCallBack for being able to participate in variant save handling. This fCallBack will be executed, whenever the variant save is triggered and has
 * to provide, in Json notation, all relevant fields and values. This data blob will be saved along with the current variant
 * @public
 * @param {function} fCallBack to be called, when a variant has to be applied
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerGetFiltersWithValues = function(fCallBack) { return null; };

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
 * adapt the visibility for all filter containers according to their property settings
 * @public
 */
sap.ui.comp.filterbar.FilterBar.prototype.rerenderFilters = function() { return null; };

/**
 * 
 * In advanced mode the text 'Dynamic Selection' is replaced by 'Advanced Search' all filter fields are added to the advanced area and the add/remove
 * filter button and the variant management buttons are hidden
 * @public
 * @param {boolean} bFlag - true or false / set-reset advanced mode
 */
sap.ui.comp.filterbar.FilterBar.prototype.setAdvancedMode = function(bFlag) { return null; };

/**
 * 
 * Setter for property <code>considerGroupTitle</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bConsiderGroupTitle  new value for property <code>considerGroupTitle</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setConsiderGroupTitle = function(bConsiderGroupTitle) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * describes whether the advanced area should be displayed collapsed or expanded
 * @public
 * @param {boolean} bFlag sets/resets the advanced area to expanded/collapsed
 */
sap.ui.comp.filterbar.FilterBar.prototype.setExpandAdvancedArea = function(bFlag) { return null; };

/**
 * 
 * set the persistency key for
 * @public
 * @param {string} sPersistenceKey id for persistency
 */
sap.ui.comp.filterbar.FilterBar.prototype.setPersistencyKey = function(sPersistenceKey) { return null; };

/**
 * 
 * sets the type of the Search-button to Emphasize. The state of the Search button will always be reset, once the event search is executed
 * @public
 * @param {boolean} bSetEmphasize sets the Emphasized or Default - type
 */
sap.ui.comp.filterbar.FilterBar.prototype.setSearchButtonEmphType = function(bSetEmphasize) { return null; };

/**
 * 
 * enables/disables the search button
 * @public
 * @param {boolean} bValue sets/resets the enable state of the search button
 */
sap.ui.comp.filterbar.FilterBar.prototype.setSearchEnabled = function(bValue) { return null; };

/**
 * 
 * Setter for property <code>showClearButton</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowClearButton  new value for property <code>showClearButton</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowClearButton = function(bShowClearButton) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Setter for property <code>showGoButton</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowGoButton  new value for property <code>showGoButton</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowGoButton = function(bShowGoButton) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * 
 * Setter for property <code>showRestoreButton</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowRestoreButton  new value for property <code>showRestoreButton</code>
 * @return {sap.ui.comp.filterbar.FilterBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowRestoreButton = function(bShowRestoreButton) { return new sap.ui.comp.filterbar.FilterBar(); };


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
 * representation for a filter field in the advanced area. Has the same semantical meaning as the new visible in filter bar property.
 * @extends sap.ui.comp.filterbar.FilterItem
 * @version 1.26.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.filterbar.FilterGroupItem = function(sId,mSettings) {};
/**
 * 
 * destroys this element
 * @public
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.destroy = function() { return null; };

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
 * getter for controlling the filters visibility in the filter bar. This property is deprecated, please use 'visibleInFilterBar' The successor of this property
 * is 'visibleInFilterBar'.
 * @public
 * @returns {boolean} bValue property
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
 * setter for controlling the filters visibility in the filter bar. This property is deprecated, please use 'visibleInFilterBar' The successor of this property
 * is 'visibleInFilterBar'.
 * @public
 * @param {boolean}
 *            bValue property
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setVisibleInAdvancedArea = function(bValue) { return null; };


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
 * <li>{@link #getLabelTooltip labelTooltip} : string</li>
 * <li>{@link #getPartOfCurrentVariant partOfCurrentVariant} : boolean (default: false)</li>
 * <li>{@link #getVisibleInFilterBar visibleInFilterBar} : boolean</li></ul>
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
 * @version 1.26.4
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
 * @returns {sap.m.Label} the label control
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
 * Getter for property <code>partOfCurrentVariant</code>.
 * Determines if a filter is part of the currently selected variant. This property is ONLY used internally and must not be used by the filter bar consumers.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>partOfCurrentVariant</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getPartOfCurrentVariant = function() { return false; };

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
 * Getter for property <code>visibleInFilterBar</code>.
 * Controls the visibility of a filter item in the FilterBar
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>visibleInFilterBar</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getVisibleInFilterBar = function() { return false; };

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
 * Setter for property <code>partOfCurrentVariant</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPartOfCurrentVariant  new value for property <code>partOfCurrentVariant</code>
 * @return {sap.ui.comp.filterbar.FilterItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setPartOfCurrentVariant = function(bPartOfCurrentVariant) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * 
 * setter for visible
 * @public
 * @param {boolean}
 *            bIsVisible property
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisible = function(bIsVisible) { return null; };

/**
 * 
 * setter for visible in filter bar
 * @public
 * @param {boolean}
 *            bIsVisible property
 * @param {boolean}
 *            bTriggerWithoutChangeNotification if set, the change notification will not be fired
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisibleInFilterBar = function(bIsVisible,bTriggerWithoutChangeNotification) { return null; };


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
 * Retrieves an array of FieldGroup Annotation for the specified target entity type
 * @param {String}
 *            sPath the entity type name -or- the full path of the entity type (including the namespace)
 * @returns {Object} the resolved array of FieldGroup annotations (if any)
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getFieldGroupAnnotation = function(sPath) { return null; };

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
 * Retrieves the LineItem Annotation for the specified target entity type
 * @param {String}
 *            sPath the full path of the entity type (including the namespace)
 * @returns {Object} the resolved LineItem annotation object (if any)
 * @public
 */
sap.ui.comp.odata.MetadataAnalyser.prototype.getLineItemAnnotation = function(sPath) { return null; };

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


// ---- sap.ui.comp.personalization --------------------------------------------------------------------------


// ---- sap.ui.comp.providers --------------------------------------------------------------------------


// ---- sap.ui.comp.providers.BaseValueListProvider --------------------------------------------------------------------------

/**
 * 
 * Retrieves the data for a collection from the OData metadata to bind to a given control/aggregation
 * @constructor
 * @experimental This module is only for internal/experimental use!
 * @public
 * @param {object}
 *            mParams - map containing the control,aggregation,annotation and the oODataModel *
 * 
 */
sap.ui.comp.providers.BaseValueListProvider = function(mParams) {};

// ---- sap.ui.comp.providers.TableProvider --------------------------------------------------------------------------

/**
 * 
 * Constructs a class to generate the view/data model metadata for the SmartTable from the SAP-Annotations metadata
 * @constructor
 * @experimental This module is only for internal/experimental use!
 * @public
 * @param {object} mPropertyBag - PropertyBag having members model, entitySet
 * 
 */
sap.ui.comp.providers.TableProvider = function(mPropertyBag) {};
/**
 * 
 * Destroys the object
 * @public
 */
sap.ui.comp.providers.TableProvider.prototype.destroy = function() { return null; };

/**
 * 
 * Returns a flag indicating whether date handling with UTC is enabled for the table.
 * @returns {boolean}
 * @public
 */
sap.ui.comp.providers.TableProvider.prototype.getIsUTCDateHandlingEnabled = function() { return false; };

/**
 * 
 * Returns a flag indicating whether excel export is supported by this table (OData service).
 * @returns {boolean}
 * @public
 */
sap.ui.comp.providers.TableProvider.prototype.getSupportsExcelExport = function() { return false; };

/**
 * 
 * Get the fields that can be added as Columns
 * @returns {Array}
 * @public
 */
sap.ui.comp.providers.TableProvider.prototype.getTableViewMetadata = function() { return null; };


// ---- sap.ui.comp.providers.ValueHelpProvider --------------------------------------------------------------------------

/**
 * 
 * Retrieves the data for a collection from the OData metadata to bind to a given control/aggregation
 * @constructor
 * @experimental This module is only for internal/experimental use!
 * @public
 * @param {object}
 *            mParams - map containing the control,aggregation,annotation and the oODataModel
 * 
 */
sap.ui.comp.providers.ValueHelpProvider = function(mParams) {};

// ---- sap.ui.comp.providers.ValueListProvider --------------------------------------------------------------------------

/**
 * 
 * Retrieves the data for a collection from the OData metadata to bind to a given control/aggregation
 * @constructor
 * @experimental This module is only for internal/experimental use!
 * @public
 * @param {object}
 *            mParams - map containing the control,aggregation,annotation and the oODataModel
 * 
 */
sap.ui.comp.providers.ValueListProvider = function(mParams) {};

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
 * @version 1.26.4
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
 * @experimental This module is only for internal/experimental use!
 * @public
 * @param {object}
 *            mPropertyBag - PropertyBag having members model, serviceUrl, entityType, additionalConfiguration
 * 
 */
sap.ui.comp.smartfilterbar.FilterProvider = function(mPropertyBag) {};
/**
 * 
 * Clears the model
 * @public
 */
sap.ui.comp.smartfilterbar.FilterProvider.prototype.clear = function() { return null; };

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
 * @version 1.26.4
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
 * @version 1.26.4
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
 * <ul></ul>
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
 * @version 1.26.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartfilterbar.SmartFilterBar = function(sId,mSettings) {};
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
 * Search for the filter field having the specified OData key and adds this filter field to the advanced area. If there is no corresponding field in
 * the OData metadata, this method has no effect.
 * @param {string} sKey - the key like specified in the OData metadata
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
 * Will be called from the smart variant control, as a request to apply the variant
 * @param {string} oVariant json object
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.applyVariant = function(oVariant) { return null; };

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
 * Will be called from the smart variant control, as a request to determine the content of
 * @returns {object} json object
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.fetchVariant = function() { return new Object(); };

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
 * @param {string} sKey - the key as present in the OData property name/control configuration. Use just the property name as the key when getting a
 *        control from the basic area. Ex: "CompanyCode" & Use "EntityName/GroupName.FieldName" format to get controls from groups.
 *        Ex:"Account.CompanyCode"
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
 * @param {boolean} bAllFilterData - Also include empty/invisible fields filter data
 * @returns {object} the json data in the filter bar
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterData = function(bAllFilterData) { return new Object(); };

/**
 * 
 * Returns the data currently set in the filter data model as string
 * @param {boolean} bAllFilterData - Also include empty/invisible fields filter data
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
 * @param {string} sEntityTypeName
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setEntityType = function(sEntityTypeName) { return null; };

/**
 * 
 * Sets the data in the filter data model
 * @param {object} oJson - the json data in the filter bar *
 * @param {boolean} bReplace - Replace existing filter data
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterData = function(oJson,bReplace) { return null; };

/**
 * 
 * Sets the data in the filter data model as string
 * @param {string} sJson - the json data in the filter bar *
 * @param {boolean} bReplace - Replace existing filter data
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterDataAsString = function(sJson,bReplace) { return null; };

/**
 * 
 * Uses the provided resource URI to fetch the OData metadata instead of using the default ODataModel (getModel()). You should only set this if you
 * intend to get the metadata for the filter bar from elsewhere!
 * @param {string} sResourceUri - The URI of the oData service from which the metadata would be read
 * @public
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setResourceUri = function(sResourceUri) { return null; };


// ---- sap.ui.comp.smarttable --------------------------------------------------------------------------


// ---- sap.ui.comp.smarttable.SmartTable --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smarttable/SmartTable.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getSmartFilterId smartFilterId} : string</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getTableType tableType} : sap.ui.comp.smarttable.TableType</li>
 * <li>{@link #getUseVariantManagement useVariantManagement} : boolean (default: true)</li>
 * <li>{@link #getUseExportToExcel useExportToExcel} : boolean (default: true)</li>
 * <li>{@link #getUseTablePersonalisation useTablePersonalisation} : boolean (default: true)</li>
 * <li>{@link #getShowRowCount showRowCount} : boolean (default: true)</li>
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getToolbarStyleClass toolbarStyleClass} : string</li>
 * <li>{@link #getEnableCustomFilter enableCustomFilter} : boolean (default: true)</li>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getUseOnlyOneSolidToolbar useOnlyOneSolidToolbar} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomToolbar customToolbar} : sap.m.Toolbar</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.smarttable.SmartTable#event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.smarttable.SmartTable#event:beforeRebindTable beforeRebindTable} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.VBox#constructor sap.m.VBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The SmartTable control creates a table based on OData metadata and the configuration specified. The entitySet attribute must be specified to use the control. This attribute is used to fetch fields from OData metadata, from which columns will be generated. Note that this attribute is not dynamic and cannot be changed once the control has been initialized! It can also be used to fetch the actual table data based on the tableType attribute. This control will render a standard, analytical, or responsive table.
 * @extends sap.m.VBox
 * @version 1.26.4
 * @constructor
 * @public
 * @experimental Since version 1.25. 
 * The SmartTable will be productised soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smarttable.SmartTable = function(sId,mSettings) {};
/**
 * 
 * Event fired just before the binding is being done
 * </p><p>
 * Parameters:
 * @param {object} [bindingParams] the bindingParams object contains filters, sorters and other binding related information for the table.
 * @param {boolean} [bindingParams.preventTableBind] can be set to true by the listener to prevent binding from being done
 * @param {object} [bindingParams.filters] the combined filter array containing a set of sap.ui.model.Filter instances from SmartTable and SmartFilter - can be modified by users to influence filtering
 * @param {object} [bindingParams.sorter] an array containing a set of sap.ui.model.Sorter instances from SmartTable (personalisation) - can be modified by users to influence sorting
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.smarttable.SmartTable.prototype.beforeRebindTable = function(bindingParams,oControlEvent) { return null; };

/**
 * 
 * Event fired once the control has been initialized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.smarttable.SmartTable.prototype.initialise = function(oControlEvent) { return null; };

/**
 * 
 * Interface function for SmartVariantManagment control, sets the current variant
 * @param {Object}
 *            oVariantJSON - the variants json
 * @public
 */
sap.ui.comp.smarttable.SmartTable.prototype.applyVariant = function(oVariantJSON) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeRebindTable' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself. 
 * </p><p>
 * Event fired just before the binding is being done
 * </p><p>
 * Parameters:
 * @param {object} [bindingParams] the bindingParams object contains filters, sorters and other binding related information for the table.
 * @param {boolean} [bindingParams.preventTableBind] can be set to true by the listener to prevent binding from being done
 * @param {object} [bindingParams.filters] the combined filter array containing a set of sap.ui.model.Filter instances from SmartTable and SmartFilter - can be modified by users to influence filtering
 * @param {object} [bindingParams.sorter] an array containing a set of sap.ui.model.Sorter instances from SmartTable (personalisation) - can be modified by users to influence sorting
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachBeforeRebindTable = function(bindingParams,oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself. 
 * </p><p>
 * Event fired once the control has been initialized.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/> itself.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Destroys the customToolbar in the aggregation 
 * named <code>customToolbar</code>.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.destroyCustomToolbar = function() { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeRebindTable' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachBeforeRebindTable = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smarttable.SmartTable</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Cleans up the control
 * @public
 */
sap.ui.comp.smarttable.SmartTable.prototype.exit = function() { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.smarttable.SmartTable with name <code>sClassName</code> 
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
sap.ui.comp.smarttable.SmartTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Interface function for SmartVariantManagment control, returns the current used variant data
 * @public
 * @returns {json} The currently set variant
 */
sap.ui.comp.smarttable.SmartTable.prototype.fetchVariant = function() { return null; };

/**
 * 
 * Fire event beforeRebindTable to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireBeforeRebindTable = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Getter for aggregation <code>customToolbar</code>.<br/>
 * An additional toolbar that can be added by the users, which can contain further custom buttons, controls, etc.
 * @return {sap.m.Toolbar}
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getCustomToolbar = function() { return new sap.m.Toolbar(); };

/**
 * 
 * Getter for property <code>enableCustomFilter</code>.
 * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableCustomFilter</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEnableCustomFilter = function() { return false; };

/**
 * 
 * Getter for property <code>entitySet</code>.
 * The entity set name from which to fetch data and generate the columns.
 * </p><p>
 * Note that this is not a dynamic UI5 property
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>entitySet</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEntitySet = function() { return ""; };

/**
 * 
 * Getter for property <code>header</code>.
 * Specifies header text that is shown in table
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>header</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getHeader = function() { return ""; };

/**
 * 
 * Getter for property <code>ignoredFields</code>.
 * CSV of fields that must be ignored in the OData metadata, by the SmartTable
 * </p><p>
 * Note that No validation will be done here, please ensure you do not add spaces or special characters here!
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>ignoredFields</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getIgnoredFields = function() { return ""; };

/**
 * 
 * Getter for property <code>persistencyKey</code>.
 * Key used to save personalization data.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getPersistencyKey = function() { return ""; };

/**
 * 
 * Getter for property <code>showRowCount</code>.
 * If the showRowCount attribute is set to true number of rows is shown along with the header text.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showRowCount</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getShowRowCount = function() { return false; };

/**
 * 
 * Getter for property <code>smartFilterId</code>.
 * ID of the corresponding SmartFilter control;
 * When specified, the SmartTable searches for the SmartFilter (also in the closest parent View) and attaches to the relevant events of the SmartFilter; to fetch data, show overlay etc.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>smartFilterId</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getSmartFilterId = function() { return ""; };

/**
 * 
 * returns the internally used table object
 * @public
 * @returns {object} the table
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTable = function() { return new Object(); };

/**
 * 
 * Getter for property <code>tableType</code>.
 * tableType attribute can be used to specify the type of table to create in the SmartFilter. For available options, see type.
 * </p><p>
 * Note that if you add a table to the content of the SmartTable in the view; this property has no effect!
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.comp.smarttable.TableType} the value of property <code>tableType</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTableType = function() { return new sap.ui.comp.smarttable.TableType(); };

/**
 * 
 * Getter for property <code>toolbarStyleClass</code>.
 * a style class which is defined for the toolbar of the table
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>toolbarStyleClass</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getToolbarStyleClass = function() { return ""; };

/**
 * 
 * Getter for property <code>useExportToExcel</code>.
 * The useExportToExcel attribute can be set to true or false depending on whether you want to export data to MS Excel®.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useExportToExcel</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseExportToExcel = function() { return false; };

/**
 * 
 * Getter for property <code>useOnlyOneSolidToolbar</code>.
 * if true, items of standard toolbar and custom toolbar will be merged into one toolbar. The combined toolbar will have a solid style.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>useOnlyOneSolidToolbar</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseOnlyOneSolidToolbar = function() { return false; };

/**
 * 
 * Getter for property <code>useTablePersonalisation</code>.
 * The useTablePersonalisation attribute can be set to true or false depending on whether you want to define personalized table settings.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useTablePersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseTablePersonalisation = function() { return false; };

/**
 * 
 * Getter for property <code>useVariantManagement</code>.
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>useVariantManagement</code>
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseVariantManagement = function() { return false; };

/**
 * 
 * This can be used to trigger binding on the table used in the SmartTable
 * @protected
 */
sap.ui.comp.smarttable.SmartTable.prototype.rebindTable = function() { return null; };

/**
 * 
 * Setter for the aggregated <code>customToolbar</code>.
 * @param {sap.m.Toolbar} oCustomToolbar
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setCustomToolbar = function(oCustomToolbar) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>enableCustomFilter</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableCustomFilter  new value for property <code>enableCustomFilter</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEnableCustomFilter = function(bEnableCustomFilter) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * The entity set name from OData metadata, with which the table should be bound to
 * @param {string}
 *            sEntitySetName The entity set
 * @public
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEntitySet = function(sEntitySetName) { return null; };

/**
 * 
 * Setter for property <code>header</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHeader  new value for property <code>header</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setHeader = function(sHeader) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>ignoredFields</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIgnoredFields  new value for property <code>ignoredFields</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>persistencyKey</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPersistencyKey  new value for property <code>persistencyKey</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setPersistencyKey = function(sPersistencyKey) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>showRowCount</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowRowCount  new value for property <code>showRowCount</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setShowRowCount = function(bShowRowCount) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>smartFilterId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSmartFilterId  new value for property <code>smartFilterId</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setSmartFilterId = function(sSmartFilterId) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>tableType</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.comp.smarttable.TableType} oTableType  new value for property <code>tableType</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setTableType = function(oTableType) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>toolbarStyleClass</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sToolbarStyleClass  new value for property <code>toolbarStyleClass</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setToolbarStyleClass = function(sToolbarStyleClass) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>useExportToExcel</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bUseExportToExcel  new value for property <code>useExportToExcel</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseExportToExcel = function(bUseExportToExcel) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>useOnlyOneSolidToolbar</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bUseOnlyOneSolidToolbar  new value for property <code>useOnlyOneSolidToolbar</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseOnlyOneSolidToolbar = function(bUseOnlyOneSolidToolbar) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>useTablePersonalisation</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bUseTablePersonalisation  new value for property <code>useTablePersonalisation</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseTablePersonalisation = function(bUseTablePersonalisation) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * Setter for property <code>useVariantManagement</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bUseVariantManagement  new value for property <code>useVariantManagement</code>
 * @return {sap.ui.comp.smarttable.SmartTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseVariantManagement = function(bUseVariantManagement) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * 
 * This can be called once data is received to update table header (count) and toolbar buttons(e.g. Excel Export) enabled state
 * @public
 */
sap.ui.comp.smarttable.SmartTable.prototype.updateTableHeaderState = function() { return null; };


// ---- sap.ui.comp.smarttable.TableType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smarttable.TableType.toString = function() { return ""; };

// ---- sap.ui.comp.smartvariants --------------------------------------------------------------------------


// ---- sap.ui.comp.smartvariants.PersonalizableInfo --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smartvariants/PersonalizableInfo.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getDataSource dataSource} : string</li>
 * <li>{@link #getKeyName keyName} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getControl control} : string | sap.ui.core.Control</li></ul>
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
 * Describes the control associated with the smart variant control.
 * @extends sap.ui.core.Element
 * @version 1.26.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartvariants.PersonalizableInfo = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.comp.smartvariants.PersonalizableInfo with name <code>sClassName</code> 
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
sap.ui.comp.smartvariants.PersonalizableInfo.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Contains the control that can be personalized.
 * @return {string} Id of the element which is the current target of the <code>control</code> association, or null
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getControl = function() { return ""; };

/**
 * 
 * Getter for property <code>dataSource</code>.
 * Name of the data service
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>dataSource</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getDataSource = function() { return ""; };

/**
 * 
 * Getter for property <code>keyName</code>.
 * Defines the property name of the controller containing the stableId.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>keyName</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getKeyName = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Describes the type of variant management.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getType = function() { return ""; };

/**
 * 
 * Contains the control that can be personalized.
 * @param {string | sap.ui.core.Control} vControl 
 *    Id of an element which becomes the new target of this <code>control</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setControl = function(vControl) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * 
 * Setter for property <code>dataSource</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDataSource  new value for property <code>dataSource</code>
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setDataSource = function(sDataSource) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * 
 * Setter for property <code>keyName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKeyName  new value for property <code>keyName</code>
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setKeyName = function(sKeyName) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setType = function(sType) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };


// ---- sap.ui.comp.smartvariants.SmartVariantManagement --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new smartvariants/SmartVariantManagement.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPersonalizableControls personalizableControls} : sap.ui.comp.smartvariants.PersonalizableInfo[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.smartvariants.SmartVariantManagement#event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.comp.variants.VariantManagement#constructor sap.ui.comp.variants.VariantManagement}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * SmartVariantManagement is a specialization of the VariantManagementControl and communicates with the flexibility layer to manage the variants.
 * @extends sap.ui.comp.variants.VariantManagement
 * @version 1.26.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.smartvariants.SmartVariantManagement = function(sId,mSettings) {};
/**
 * 
 * Once the the SmartVariantControl has been initialized, and especially after retrieving the variants from the backend system, the registered consumers receive the information that this phase has been completed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.initialise = function(oControlEvent) { return null; };

/**
 * 
 * all controls interested and relying on variant handling have to be registered by this association
 * @public
 * @param {sap.ui.comp/smartvariants/PersonalizableInfo}
 *            oCurrentControlInfo control providing the required aggregation for flex-layer
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.addPersonalizableControl = function(oCurrentControlInfo) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'initialise' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/> itself. 
 * </p><p>
 * Once the the SmartVariantControl has been initialized, and especially after retrieving the variants from the backend system, the registered consumers receive the information that this phase has been completed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/> itself.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * 
 * Destroys all the personalizableControls in the aggregation 
 * named <code>personalizableControls</code>.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.destroyPersonalizableControls = function() { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'initialise' event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * 
 * Destroys the control
 * @public
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.exit = function() { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.smartvariants.SmartVariantManagement with name <code>sClassName</code> 
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
sap.ui.comp.smartvariants.SmartVariantManagement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event initialise to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * 
 * is called by the variant management control, when managing the variants
 * @public
 * @param {object}
 *            oVariantInfo describes the variants, which will be deleted/renamed
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireManage = function(oVariantInfo) { return null; };

/**
 * 
 * is called by the variant management control, when saving a variant
 * @public
 * @param {object}
 *            oVariantInfo describes the variant to be saved
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireSave = function(oVariantInfo) { return null; };

/**
 * 
 * is called by the variant management control, when a variant was selected
 * @public
 * @param {object}
 *            oVariantInfo describes the selected variant
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireSelect = function(oVariantInfo) { return null; };

/**
 * 
 * Getter for aggregation <code>personalizableControls</code>.<br/>
 * All controls that are interested and rely on variant handling have to be registered by this aggregation
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo[]}
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getPersonalizableControls = function() { return new Array(); };

/**
 * 
 * all controls interested and relying on variant handling have to be registered by this association
 * @public
 * @param {sap.ui.core.Control}
 *            oControl current control
 * @param {string}
 *            sKey the variant key
 * @returns {object} json object representing the content of the variant
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getVariantContent = function(oControl,sKey) { return new Object(); };

/**
 * 
 * retrieve the list of known variants via access to VM
 * @public
 * @params {function} fCallBack
 * @returns {array} list of variants
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getVariantsInfo = function(fCallBack) { return null; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.smartvariants.PersonalizableInfo</code> in the aggregation named <code>personalizableControls</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo}
 *            oPersonalizableControl the personalizableControl whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.indexOfPersonalizableControl = function(oPersonalizableControl) { return 0; };

/**
 * 
 * first function to be called. will initialize the flex layer, by retrieving the list of variants Once the initialization is completed the control for
 * personalization will be informed via the event "initialise"
 * @public
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.initialise = function() { return null; };

/**
 * 
 * Inserts a personalizableControl into the aggregation named <code>personalizableControls</code>.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo}
 *          oPersonalizableControl the personalizableControl to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the personalizableControl should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the personalizableControl is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the personalizableControl is inserted at 
 *             the last position        
 * @return {sap.ui.comp.smartvariants.SmartVariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.insertPersonalizableControl = function(oPersonalizableControl,iIndex) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>personalizableControls</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.removeAllPersonalizableControls = function() { return new Array(); };

/**
 * 
 * Removes an personalizableControl from the aggregation named <code>personalizableControls</code>.
 * @param {int | string | sap.ui.comp.smartvariants.PersonalizableInfo} vPersonalizableControl the personalizableControl to remove or its index or id
 * @return {sap.ui.comp.smartvariants.PersonalizableInfo} the removed personalizableControl or null
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.removePersonalizableControl = function(vPersonalizableControl) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };


// ---- sap.ui.comp.transport --------------------------------------------------------------------------


// ---- sap.ui.comp.transport.TransportDialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new transport/TransportDialog.
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
 * <li>{@link #getPkg pkg} : string</li>
 * <li>{@link #getTransports transports} : any</li>
 * <li>{@link #getLrepObject lrepObject} : any</li>
 * <li>{@link #getHidePackage hidePackage} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.comp.transport.TransportDialog#event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.comp.transport.TransportDialog#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.
 * @extends sap.m.Dialog
 * @version 1.26.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.transport.TransportDialog = function(sId,mSettings) {};
/**
 * 
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.transport.TransportDialog.prototype.cancel = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired when the user clicks the OK button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.comp.transport.TransportDialog.prototype.ok = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.transport.TransportDialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.transport.TransportDialog</code>.<br/> itself.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'ok' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.comp.transport.TransportDialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired when the user clicks the OK button on the dialog.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.transport.TransportDialog</code>.<br/> itself.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'ok' event of this <code>sap.ui.comp.transport.TransportDialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * 
 * Creates a new subclass of class sap.ui.comp.transport.TransportDialog with name <code>sClassName</code> 
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
sap.ui.comp.transport.TransportDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event cancel to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * 
 * Fire event ok to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.comp.transport.TransportDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.fireOk = function(mArguments) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * 
 * Getter for property <code>hidePackage</code>.
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>hidePackage</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getHidePackage = function() { return false; };

/**
 * 
 * Getter for property <code>lrepObject</code>.
 * The LREP object for which as transport request has to be selected
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>lrepObject</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getLrepObject = function() { return null; };

/**
 * 
 * Getter for property <code>pkg</code>.
 * An ABAP package that can be used as default for the ABAP package selection.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>pkg</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getPkg = function() { return ""; };

/**
 * 
 * Getter for property <code>transports</code>.
 * The set of ABAP transport requests that can be selected by a user.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>transports</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getTransports = function() { return null; };

/**
 * 
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * @param {boolean}
 *            bHide if set to <code>true</code>, the package selection is hidden.
 * @public
 */
sap.ui.comp.transport.TransportDialog.prototype.setHidePackage = function(bHide) { return null; };

/**
 * 
 * The LREP object for which as transport request has to be selected. 
 * The property can only be set once and afterwards it cannot be changed.
 * @param {object}
 *            oObject an LREP object for which as transport request has to be selected. The object has the attributes name, namespace and type.
 * @public
 */
sap.ui.comp.transport.TransportDialog.prototype.setLrepObject = function(oObject) { return null; };

/**
 * 
 * An ABAP package that can be used as default for the ABAP package selection.
 * The property can only be set once and afterwards it cannot be changed.
 * @param {string}
 *            sPackage an ABAP package that can be used as default for the ABAP package selection.
 * @public
 */
sap.ui.comp.transport.TransportDialog.prototype.setPkg = function(sPackage) { return null; };

/**
 * 
 * The set of ABAP transport requests that can be selected by a user.
 * @param {array}
 *            aSelection the set of ABAP transport requests that can be selected by a user.
 * @public          
 */
sap.ui.comp.transport.TransportDialog.prototype.setTransports = function(aSelection) { return null; };


// ---- sap.ui.comp.valuehelpdialog --------------------------------------------------------------------------


// ---- sap.ui.comp.valuehelpdialog._ValueHelpService --------------------------------------------------------------------------

/**
 * 
 * </p><p>
 * OData bases Value Help Service which internal uses the ValueHelpDialog. Please do not use! deprecated!!!
 * @deprecated
 * @constructor
 * @this sap.ui.comp.valuehelpdialog._ValueHelpService
 * @public
 */
sap.ui.comp.valuehelpdialog._ValueHelpService = function(mParams) {};

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
 *            sKey - the property name of the obj in the map which will be used for the Display Key in the tokens returned  in the array
 * @param {string}
 *            sDescriptionKey - the property name of the obj in the map which will be returned in the array
 * @param {string}
 *            sDisplayBehaviour - the behaviour/format of the token text (See: sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR)
 * @returns {array} array of objects with the given key and the text value
 * @public
 */
sap.ui.comp.valuehelpdialog.ItemsCollection.prototype.getSelectedItemsTokenArray = function(sKey,sDescriptionKey,sDisplayBehaviour) { return null; };

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
 * @version 1.26.4
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
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getGlobal global} : boolean</li>
 * <li>{@link #getLifecyclePackage lifecyclePackage} : string</li>
 * <li>{@link #getLifecycleTransportId lifecycleTransportId} : string</li>
 * <li>{@link #getNamespace namespace} : string</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li>
 * <li>{@link #getAccessOptions accessOptions} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ColumnListItem#constructor sap.m.ColumnListItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Editable Variant List item for the Management Popup
 * @extends sap.m.ColumnListItem
 * @version 1.26.4
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
 * Getter for property <code>accessOptions</code>.
 * Flags for a variant to indicate why it might be read-only
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>accessOptions</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getAccessOptions = function() { return ""; };

/**
 * 
 * Getter for property <code>global</code>.
 * Indicator if a variant is visible for all users.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>global</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getGlobal = function() { return false; };

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
 * Getter for property <code>lifecyclePackage</code>.
 * ABAP Package the variant is assigned. Used for transport functionality
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>lifecyclePackage</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLifecyclePackage = function() { return ""; };

/**
 * 
 * Getter for property <code>lifecycleTransportId</code>.
 * Identifier of the transport object the variant is assigned to.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>lifecycleTransportId</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLifecycleTransportId = function() { return ""; };

/**
 * 
 * Getter for property <code>namespace</code>.
 * Variant namespace
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>namespace</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getNamespace = function() { return ""; };

/**
 * 
 * Getter for property <code>readOnly</code>.
 * Indication if variant can be changed
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>readOnly</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getReadOnly = function() { return false; };

/**
 * 
 * Setter for property <code>accessOptions</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAccessOptions  new value for property <code>accessOptions</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setAccessOptions = function(sAccessOptions) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * 
 * Setter for property <code>global</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bGlobal  new value for property <code>global</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setGlobal = function(bGlobal) { return new sap.ui.comp.variants.EditableVariantItem(); };

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

/**
 * 
 * Setter for property <code>lifecyclePackage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLifecyclePackage  new value for property <code>lifecyclePackage</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLifecyclePackage = function(sLifecyclePackage) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * 
 * Setter for property <code>lifecycleTransportId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLifecycleTransportId  new value for property <code>lifecycleTransportId</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLifecycleTransportId = function(sLifecycleTransportId) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * 
 * Setter for property <code>namespace</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNamespace  new value for property <code>namespace</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setNamespace = function(sNamespace) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * 
 * Setter for property <code>readOnly</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bReadOnly  new value for property <code>readOnly</code>
 * @return {sap.ui.comp.variants.EditableVariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setReadOnly = function(bReadOnly) { return new sap.ui.comp.variants.EditableVariantItem(); };


// ---- sap.ui.comp.variants.VariantItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new variants/VariantItem.
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
 * <li>{@link #getExecuteOnSelection executeOnSelection} : boolean (default: false)</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li>
 * <li>{@link #getLifecycleTransportId lifecycleTransportId} : string</li>
 * <li>{@link #getGlobal global} : boolean</li>
 * <li>{@link #getLifecyclePackage lifecyclePackage} : string</li>
 * <li>{@link #getNamespace namespace} : string</li>
 * <li>{@link #getAccessOptions accessOptions} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * VariantItem for VariantManagement item collection
 * @extends sap.ui.core.Item
 * @version 1.26.4
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.comp.variants.VariantItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.comp.variants.VariantItem with name <code>sClassName</code> 
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
sap.ui.comp.variants.VariantItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>accessOptions</code>.
 * Flags for a variant to indicate why it might be read-only
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>accessOptions</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getAccessOptions = function() { return ""; };

/**
 * 
 * Getter for property <code>executeOnSelection</code>.
 * Attribute for usage in Smart Filter Bar
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>executeOnSelection</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getExecuteOnSelection = function() { return false; };

/**
 * 
 * Getter for property <code>global</code>.
 * Indicator if a variant is visible for all users.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>global</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getGlobal = function() { return false; };

/**
 * 
 * Getter for property <code>lifecyclePackage</code>.
 * ABAP Package the variant is assigned. Used for transport functionality.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>lifecyclePackage</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLifecyclePackage = function() { return ""; };

/**
 * 
 * Getter for property <code>lifecycleTransportId</code>.
 * Identifier of the transport object the variant is assigned to.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>lifecycleTransportId</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLifecycleTransportId = function() { return ""; };

/**
 * 
 * Getter for property <code>namespace</code>.
 * Variant namespace
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>namespace</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getNamespace = function() { return ""; };

/**
 * 
 * Getter for property <code>readOnly</code>.
 * Is the user allowed to change the item's data
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>readOnly</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getReadOnly = function() { return false; };

/**
 * 
 * Setter for property <code>accessOptions</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAccessOptions  new value for property <code>accessOptions</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setAccessOptions = function(sAccessOptions) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * 
 * Setter for property <code>executeOnSelection</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bExecuteOnSelection  new value for property <code>executeOnSelection</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setExecuteOnSelection = function(bExecuteOnSelection) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * 
 * Setter for property <code>global</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bGlobal  new value for property <code>global</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setGlobal = function(bGlobal) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * 
 * Setter for property <code>lifecyclePackage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLifecyclePackage  new value for property <code>lifecyclePackage</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLifecyclePackage = function(sLifecyclePackage) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * 
 * Setter for property <code>lifecycleTransportId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLifecycleTransportId  new value for property <code>lifecycleTransportId</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLifecycleTransportId = function(sLifecycleTransportId) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * 
 * Setter for property <code>namespace</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNamespace  new value for property <code>namespace</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setNamespace = function(sNamespace) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * 
 * Setter for property <code>readOnly</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bReadOnly  new value for property <code>readOnly</code>
 * @return {sap.ui.comp.variants.VariantItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setReadOnly = function(bReadOnly) { return new sap.ui.comp.variants.VariantItem(); };


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
 * <li>{@link #getDefaultVariantKey defaultVariantKey} : string</li>
 * <li>{@link #getSelectionKey selectionKey} : string</li>
 * <li>{@link #getShowCreateTile showCreateTile} : boolean (default: false)</li>
 * <li>{@link #getShowExecuteOnSelection showExecuteOnSelection} : boolean (default: false)</li>
 * <li>{@link #getShowShare showShare} : boolean (default: false)</li>
 * <li>{@link #getLifecycleSupport lifecycleSupport} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.core.Item[]</li>
 * <li>{@link #getVariantItems variantItems} : sap.ui.comp.variants.VariantItem[]</li></ul>
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
 * @version 1.26.4
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
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addItem = function(oItem) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Adds some variantItem <code>oVariantItem</code> 
 * to the aggregation named <code>variantItems</code>.
 * @param {sap.ui.comp.variants.VariantItem}
 *            oVariantItem the variantItem to add; if empty, nothing is inserted
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addVariantItem = function(oVariantItem) { return new sap.ui.comp.variants.VariantManagement(); };

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
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Destroys all the variantItems in the aggregation 
 * named <code>variantItems</code>.
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyVariantItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

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
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>lifecycleSupport</code>.
 * Enables the lifecycle support for VariantItems.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>lifecycleSupport</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getLifecycleSupport = function() { return false; };

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
 * Getter for property <code>showCreateTile</code>.
 * Indicates that a Create Tile is visible in the Create dialog.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showCreateTile</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowCreateTile = function() { return false; };

/**
 * 
 * Getter for property <code>showExecuteOnSelection</code>.
 * Indicates that Execute on Selection is visible in the Create and in the Management Dialog
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showExecuteOnSelection</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowExecuteOnSelection = function() { return false; };

/**
 * 
 * Getter for property <code>showShare</code>.
 * Indicates that a share function is available in Variant Management
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showShare</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowShare = function() { return false; };

/**
 * 
 * Getter for aggregation <code>variantItems</code>.<br/>
 * Main aggregation for variant items displayed by the Variant Management control
 * @return {sap.ui.comp.variants.VariantItem[]}
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getVariantItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.comp.variants.VariantItem</code> in the aggregation named <code>variantItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.variants.VariantItem}
 *            oVariantItem the variantItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfVariantItem = function(oVariantItem) { return 0; };

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
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Inserts a variantItem into the aggregation named <code>variantItems</code>.
 * @param {sap.ui.comp.variants.VariantItem}
 *          oVariantItem the variantItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the variantItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the variantItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the variantItem is inserted at 
 *             the last position        
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertVariantItem = function(oVariantItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>variantItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.comp.variants.VariantItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllVariantItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @deprecated Since version 1.26.00. 
 * Additional information needed for each item. New Collection variantItems introduced.
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * 
 * Removes an variantItem from the aggregation named <code>variantItems</code>.
 * @param {int | string | sap.ui.comp.variants.VariantItem} vVariantItem the variantItem to remove or its index or id
 * @return {sap.ui.comp.variants.VariantItem} the removed variantItem or null
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeVariantItem = function(vVariantItem) { return new sap.ui.comp.variants.VariantItem(); };

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
 * Setter for property <code>lifecycleSupport</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLifecycleSupport  new value for property <code>lifecycleSupport</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setLifecycleSupport = function(bLifecycleSupport) { return new sap.ui.comp.variants.VariantManagement(); };

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
 * Setter for property <code>showCreateTile</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowCreateTile  new value for property <code>showCreateTile</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowCreateTile = function(bShowCreateTile) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Setter for property <code>showExecuteOnSelection</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowExecuteOnSelection  new value for property <code>showExecuteOnSelection</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowExecuteOnSelection = function(bShowExecuteOnSelection) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * 
 * Setter for property <code>showShare</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowShare  new value for property <code>showShare</code>
 * @return {sap.ui.comp.variants.VariantManagement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowShare = function(bShowShare) { return new sap.ui.comp.variants.VariantManagement(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.comp.smarttable.TableType --------------------------------------------------------------------------

/**
 * 
 * An analytical table (sap.ui.table.AnalyticalTable) control shall be created as the content of the SmartTable, if no table already exists
 * @public
 * @memberOf sap.ui.comp.smarttable.TableType
 */
sap.ui.comp.smarttable.TableType.AnalyticalTable = null;

/**
 * 
 * A responsive table (sap.m.Table) control that can be used on mobile devices shall be created as the content of the SmartTable, if no table already exists
 * @public
 * @memberOf sap.ui.comp.smarttable.TableType
 */
sap.ui.comp.smarttable.TableType.ResponsiveTable = null;

/**
 * 
 * A table (sap.ui.table.Table) control shall be created as the content of the SmartTable, if no table already exists (default)
 * @public
 * @memberOf sap.ui.comp.smarttable.TableType
 */
sap.ui.comp.smarttable.TableType.Table = null;

/**
 * 
 * A tree table (sap.ui.table.TreeTable) control shall be created as the content of the SmartTable, if no table already exists (TODO)
 * @public
 * @memberOf sap.ui.comp.smarttable.TableType
 */
sap.ui.comp.smarttable.TableType.TreeTable = null;

