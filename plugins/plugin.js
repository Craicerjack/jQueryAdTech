// if making calls to window, document in you plugin pass it in with jQuery
// This allows it to be minified when minification takes place
// once something is a parameter it can be minified.
// PROTECTING $ AND MINIFICATION OPTIMIZATIONS
(function($, window, document) {
    $.fn.myPlugin = function() {
        window.location = "examplelocation.html";
        return this;
    }
})(jQuery, window, document);


// ensure undefined === undefined by passing it in the function definition but not the call
// this will mean when accessing it as a parameter it will remain undefined.
(function($, undefined) {
    $.fn.myPlugin = function() {
        return this;
    }
})(jQuery);

// ###################################################################################################
// MAINTAIN CHAINABILITY
// always return this to maintain chainability
// 3 ways to maintain chainability
// return this;     return this.each();     return this.pushStack();
(function($, undefined) {
    $.fn.myPlugin = function() {
        return this;
    }
})(jQuery);

// ###################################################################################################
// PARAMETERS
// instead of passing in mulitiple parameters which can be hard to keep track of
// pass in an options object
// NO
.myPlugin(requiredParameter, optionalParameter1, optionalParameter2, optionalParameter3);

// YES - like most plugins do.
var options = { parameter1: "value1", parameter2: "value2", parameter3: "value3" };
.myPlugin(options);

//EXAMPLE
// 1 - set defaults     2 - create new settings object      3 - extend settings object by defaults and options
// because of how extend works settings will be defined by defaults first and then any defined in options will overwrite them.
(function($) {
    $.fn.myPlugin = function(options) {
        var defaults = {
            optional1: "default1",
            optional2: "default2",
            optional3: "default3"
        };
        var settings = {};
        $.extend(settings, defaults, options);
        return this;
    }
})(jQuery);


// move deaults outside origin object creation to allow user access.
(function($) {
    $.fn.myPlugin = function(options) {
        var settings = {};
        $.extend(settings, this.myPlugin.defaults, options);
        return this;
    }

    $.fn.myPlugin.defaults = {
        optional1: "default1",
        optional2: "default2",
        optional3: "default3"
    };
})(jQuery);


// ###################################################################################################
// NAMESPACES
// for a plugin with multiple methods
// instead of having to do myPlugin.methodName();
// using this pattern we can do myPlugin('methodName');
EXAMPLE IN EMPHASIZE.JS


// ###################################################################################################
// RETURNING SINGLE VALUES
EXAMPLE in single.js


// ###################################################################################################
// MAINTAINING STATE
EXAMPLE IN STATE.JS

// Use closures to maintain plugin level state
// Use .data() to maintain node-level state


