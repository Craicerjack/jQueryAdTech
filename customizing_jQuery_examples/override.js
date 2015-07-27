(function($) {
    // EXTEND MERGE TO ALLOW MORE THAN TWO OBJECTS
    // first comments are example with 3 arrays
    // second example, any no of merged arrays
    $.old_merge = $.merge;
    // $.merge = function(first, second, third) { $.old_merge(first, second); if(third) { $.old_merge(first, third); } return first; }
    $.merge = function() {
        //first array to merge items too. set i = 1, because we already have 0 as first.
        var first = arguments[0];
        for (var i = 1; i < arguments.length; i++) { $.old_merge(first, arguments[i]); };
        return first;
    }
})(jQuery);

$(document).ready(function() {
    var array1 = [1,2,3];
    var array2 = [4,5,6];
    var array3 = [7,8,9];
    // $.merge modifies the first argument in the function. might not want that
    var merged = $.merge(array1, array2);

});
