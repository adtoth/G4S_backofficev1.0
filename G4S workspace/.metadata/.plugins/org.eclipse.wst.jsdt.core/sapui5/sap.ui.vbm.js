
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.vbm --------------------------------------------------------------------------


// ---- sap.ui.vbm.AnalyticMap --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new AnalyticMap.
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
 * <li>{@link #getRegions regions} : sap.ui.vbm.Region[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.AnalyticMap#event:regionClick regionClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.AnalyticMap#event:regionContextMenu regionContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VBI#constructor sap.ui.vbm.VBI}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The AnalyticMap control.
 * @extends sap.ui.vbm.VBI
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.AnalyticMap = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click or a tap on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The regions code.
 * @public
 */
sap.ui.vbm.AnalyticMap.prototype.regionClick = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The regions code.
 * @public
 */
sap.ui.vbm.AnalyticMap.prototype.regionContextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Adds some region <code>oRegion</code> 
 * to the aggregation named <code>regions</code>.
 * @param {sap.ui.vbm.Region}
 *            oRegion the region to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.addRegion = function(oRegion) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'regionClick' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click or a tap on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'regionContextMenu' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code>.<br/> itself.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Destroys all the regions in the aggregation 
 * named <code>regions</code>.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.destroyRegions = function() { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'regionClick' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionClick = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'regionContextMenu' event of this <code>sap.ui.vbm.AnalyticMap</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.AnalyticMap with name <code>sClassName</code> 
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
sap.ui.vbm.AnalyticMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event regionClick to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The regions code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionClick = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Fire event regionContextMenu to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The regions code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionContextMenu = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Getter for aggregation <code>regions</code>.<br/>
 * Region properties that are different from the defaults. It is possible to specify the tooltip or color for regions. A region code must match the GeoJSON id2 identifier.
 * @return {sap.ui.vbm.Region[]}
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.getRegions = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Region</code> in the aggregation named <code>regions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Region}
 *            oRegion the region whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.indexOfRegion = function(oRegion) { return 0; };

/**
 * 
 * Inserts a region into the aggregation named <code>regions</code>.
 * @param {sap.ui.vbm.Region}
 *          oRegion the region to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the region should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the region is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the region is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.AnalyticMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.insertRegion = function(oRegion,iIndex) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>regions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Region[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.removeAllRegions = function() { return new Array(); };

/**
 * 
 * Removes an region from the aggregation named <code>regions</code>.
 * @param {int | string | sap.ui.vbm.Region} vRegion the region to remove or its index or id
 * @return {sap.ui.vbm.Region} the removed region or null
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.removeRegion = function(vRegion) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Zoom to one ore more regions.
 * @param {string[]} aCodes
 *         Array of region codes. The region codes must match the geo json tags.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.AnalyticMap.prototype.zoomToRegions = function(aCodes) { return null; };


// ---- sap.ui.vbm.GeoMap --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GeoMap.
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
 * <li>{@link #getVos vos} <strong>(default aggregation)</strong> : sap.ui.core.Element[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VBI#constructor sap.ui.vbm.VBI}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Simple map with standard UI5 interface
 * @extends sap.ui.vbm.VBI
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.GeoMap = function(sId,mSettings) {};
/**
 * 
 * Adds some vo <code>oVo</code> 
 * to the aggregation named <code>vos</code>.
 * @param {sap.ui.core.Element}
 *            oVo the vo to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addVo = function(oVo) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Destroys all the vos in the aggregation 
 * named <code>vos</code>.
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyVos = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.GeoMap with name <code>sClassName</code> 
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
sap.ui.vbm.GeoMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>vos</code>.<br/>
 * Aggregation of visual object types.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for GeoMap.
 * @return {sap.ui.core.Element[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getVos = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>vos</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *            oVo the vo whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfVo = function(oVo) { return 0; };

/**
 * 
 * Inserts a vo into the aggregation named <code>vos</code>.
 * @param {sap.ui.core.Element}
 *          oVo the vo to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the vo should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the vo is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the vo is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.GeoMap} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertVo = function(oVo,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>vos</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllVos = function() { return new Array(); };

/**
 * 
 * Removes an vo from the aggregation named <code>vos</code>.
 * @param {int | string | sap.ui.core.Element} vVo the vo to remove or its index or id
 * @return {sap.ui.core.Element} the removed vo or null
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeVo = function(vVo) { return new sap.ui.core.Element(); };


// ---- sap.ui.vbm.Region --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Region.
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
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getCode code} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.Region#event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.Region#event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Region properties.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Region = function(sId,mSettings) {};
/**
 * 
 * The event is raised when there is a click action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The region code.
 * @public
 */
sap.ui.vbm.Region.prototype.click = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The region code.
 * @public
 */
sap.ui.vbm.Region.prototype.contextMenu = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'click' event of this <code>sap.ui.vbm.Region</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Region</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a click action on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Region</code>.<br/> itself.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contextMenu' event of this <code>sap.ui.vbm.Region</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.Region</code>.<br/> itself. 
 * </p><p>
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Region</code>.<br/> itself.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'click' event of this <code>sap.ui.vbm.Region</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contextMenu' event of this <code>sap.ui.vbm.Region</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Region with name <code>sClassName</code> 
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
sap.ui.vbm.Region.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event click to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The region code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Region.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Fire event contextMenu to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> The region code.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Region.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Getter for property <code>code</code>.
 * The region code.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>code</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getCode = function() { return ""; };

/**
 * 
 * Getter for property <code>color</code>.
 * The color, this must be provided in the rgba(r,g,b,a) format.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Setter for property <code>code</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCode  new value for property <code>code</code>
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setCode = function(sCode) { return new sap.ui.vbm.Region(); };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sColor  new value for property <code>color</code>
 * @return {sap.ui.vbm.Region} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setColor = function(sColor) { return new sap.ui.vbm.Region(); };


// ---- sap.ui.vbm.Spot --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Spot.
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
 * <li>{@link #getPosition position} : string</li></ul>
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
 * Aggregation element for the Spot container
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Spot = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Spot with name <code>sClassName</code> 
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
sap.ui.vbm.Spot.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the spot
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getPosition = function() { return ""; };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.vbm.Spot} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Spot(); };


// ---- sap.ui.vbm.Spots --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Spots.
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
 * <li>{@link #getSpots spots} <strong>(default aggregation)</strong> : sap.ui.vbm.Spot[]</li></ul>
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
 * Spots aggregation container
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.Spots = function(sId,mSettings) {};
/**
 * 
 * Adds some spot <code>oSpot</code> 
 * to the aggregation named <code>spots</code>.
 * @param {sap.ui.vbm.Spot}
 *            oSpot the spot to add; if empty, nothing is inserted
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addSpot = function(oSpot) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Destroys all the spots in the aggregation 
 * named <code>spots</code>.
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroySpots = function() { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.Spots with name <code>sClassName</code> 
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
sap.ui.vbm.Spots.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>spots</code>.<br/>
 * spot object aggregation
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Spots.
 * @return {sap.ui.vbm.Spot[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getSpots = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.vbm.Spot</code> in the aggregation named <code>spots</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Spot}
 *            oSpot the spot whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfSpot = function(oSpot) { return 0; };

/**
 * 
 * Inserts a spot into the aggregation named <code>spots</code>.
 * @param {sap.ui.vbm.Spot}
 *          oSpot the spot to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the spot should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the spot is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the spot is inserted at 
 *             the last position        
 * @return {sap.ui.vbm.Spots} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertSpot = function(oSpot,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>spots</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.vbm.Spot[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllSpots = function() { return new Array(); };

/**
 * 
 * Removes an spot from the aggregation named <code>spots</code>.
 * @param {int | string | sap.ui.vbm.Spot} vSpot the spot to remove or its index or id
 * @return {sap.ui.vbm.Spot} the removed spot or null
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeSpot = function(vSpot) { return new sap.ui.vbm.Spot(); };


// ---- sap.ui.vbm.VBI --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VBI.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '800px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '600px')</li>
 * <li>{@link #getConfig config} : object</li>
 * <li>{@link #getPlugin plugin} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.VBI#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:render render} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:zoom zoom} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:move move} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:openWindow openWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:closeWindow closeWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The VBI control.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VBI = function(sId,mSettings) {};
/**
 * 
 * The event is raised raised before a Visual Business window is closed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder for content.
 * @param {string} oControlEvent.getParameters.id ID of the window that is closed.
 * @public
 */
sap.ui.vbm.VBI.prototype.closeWindow = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. The canvas was moved.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 */
sap.ui.vbm.VBI.prototype.move = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised raised before a Visual Business window is opened.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder to render into.
 * @param {string} oControlEvent.getParameters.id ID of the window that is opened.
 * @public
 */
sap.ui.vbm.VBI.prototype.openWindow = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business overlay canvas.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 */
sap.ui.vbm.VBI.prototype.render = function(oControlEvent) { return null; };

/**
 * 
 * High level API. Submit event is raised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.data Json or xml string describing the delta state of visual business and the information about the event.
 * @public
 */
sap.ui.vbm.VBI.prototype.submit = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. The canvas is zoomed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into
 * @public
 */
sap.ui.vbm.VBI.prototype.zoom = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'closeWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * The event is raised raised before a Visual Business window is closed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachCloseWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. The canvas was moved.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachMove = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'openWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * The event is raised raised before a Visual Business window is opened.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachOpenWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business overlay canvas.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachRender = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * High level API. Submit event is raised.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. The canvas is zoomed.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachZoom = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'closeWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachCloseWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachMove = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'openWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachOpenWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachRender = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachZoom = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.VBI with name <code>sClassName</code> 
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
sap.ui.vbm.VBI.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event closeWindow to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'contentarea' of type <code>object</code> Div placeholder for content.</li>
 * <li>'id' of type <code>string</code> ID of the window that is closed.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireCloseWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event move to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireMove = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event openWindow to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'contentarea' of type <code>object</code> Div placeholder to render into.</li>
 * <li>'id' of type <code>string</code> ID of the window that is opened.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireOpenWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event render to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into. </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireRender = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event submit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'data' of type <code>string</code> Json or xml string describing the delta state of visual business and the information about the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireSubmit = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event zoom to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireZoom = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Getter for property <code>config</code>.
 * This is the model configuration. Usually the Visual Business application is provided by this property. Nevertheless the property can be used for data binding to the inner Visual Business data model.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>config</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getConfig = function() { return new Object(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Set the height of the control.
 * </p><p>
 * Default value is <code>600px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>plugin</code>.
 * When true, the plugin version of Visual Business should be used.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>plugin</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getPlugin = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Set the width of the control.
 * </p><p>
 * Default value is <code>800px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * High level load function. The function accepts a json string or an already parsed json object. This can be a Visual Business application, any delta operations on the application or other hierachical data that can be mapped by the Visual Business data provider to the inner Visual Business data context.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VBI.prototype.load = function() { return null; };

/**
 * 
 * Setter for property <code>config</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oConfig  new value for property <code>config</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setConfig = function(oConfig) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>600px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setHeight = function(sHeight) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>plugin</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPlugin  new value for property <code>plugin</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setPlugin = function(bPlugin) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>800px</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setWidth = function(sWidth) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Zoom to one or multiple geo positions.
 * </p><p>
 * This function works only for the main geo scene in the Visual Business control.
 * @param {float} fLon
 *         Longitude in degrees. This can be an array of longitude values.
 * @param {float} fLat
 *         Latitude in degrees. This can be an array of latitude values.
 * @param {int} iLod
 *         Level of detail, usually between 0 and 20. This will be limited by the map provider capabilities.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.vbm.VBI.prototype.zoomToGeoPosition = function(fLon,fLat,iLod) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------
