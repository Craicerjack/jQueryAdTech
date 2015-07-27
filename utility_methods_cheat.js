Type Functions:
$.isArray(obj)                      --> Boolean     //determine if object is an array
$.isFunction(obj)                   --> Boolean     //determine if object is a function
$.isEmptyObject(obj)                --> Boolean     //determine if object is an empty object
$.isPlainObject(obj)                --> Boolean     //determine if object is plain=created with new or {}
$.isXmlDoc(doc)                     --> Boolean     //determine if doc is xml or node in xml
$.isNumeric(number)                 --> Boolean     //determine is object is a numeric
$.isWindow(window)                  --> Boolean     //determines if object is window or frame
$.type(object)                      --> Boolean, number, string, function, array, date, regexp, object, undefined, null

Collection Functions:
$.makeArray                         --> turn jQuery wrapped collection into an array of DOM nodes
$.inArray                           --> index of item in array  //returns -1 or index - optional param to indicate start index
$.unique                            --> filter down to unique set of elements
$.merge                             --> combine collections or arrays
$.map                               --> Tranform a collection   //$(selector).map - $.map
$.grep                              --> Filter a collection     //Invert param - filter function receives a DOM object - Returns a JavaScript Array

Misc Functions:
$.getScript(url, successCallback)   -->Retrieve and execite remote JS   //url and optional callback - gets and immediately executes - Only use with JS example in manip.js
$.holdReady(true);                  -->Hold the document ready from firing until you are ready //wait for asset to download document.ready() blocked until $.holdReady(false);
$.pushStack()                       -->Push new set of DOM objects onto the jQuery stack
$.each()                            -->Use on: *array  *$(selector) *JavaScript object  //$.each(collection, callback(index, element){}); - $(selector).each(callback(index, element){});
$.parseJSON()                       -->turn a JSON string into a JavaScript object
$.extend()                          -->copy members from a source object to a target object //multiple source objects can be used. var source1 = {}; var source2 = {}; var target = {}; $.extend(target, source1, source2);
$.sub()                             -->creates a copy of jQuery for safe modification.
                                    -->//function myExtendedImplementation(){ my implementation } var sub = $.sub(); sub.extend = myExtendedImplementation;
$.proxy()                           -->set value of `this` in an eventHandler   $.proxy(eventHandler, context); -->eventHandler = function; context = the object we wish to use as this when function called.
