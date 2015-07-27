//Adding utility functions to jQuery - Pattern
// (function($) {
//     $.myUtility = function(parameter) {

//     }
// })(jQuery);

$(document).ready(function() {

    $.log.group('my group');
    $.log('test');
    $.log($("div"));
    $.log.groupEnd();
    $.log($('div')[1].innerHTML);
    console.table($.makeArray($('div')));


});