#Guidelines for Overriding Built-In jQuery Functions
1. Only extend and increase functionality (never reduce or change functionality)
2. Use a new utility function or plugin instead.

IFFY - Immediately-Invoked Function Expression/ Self_Executing anonymous function

''' javascript
// By wrapping a function in parens we have created a function expression
// By following them with another set of parens we are invoking that function expression
// Because of closures all code within ths will be in a different scope to other code
(function($) {
    $.fn.myPlugin = function() {
        return this;
    }
})(jQuery);
'''