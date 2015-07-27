$(document).ready(function() {

    //create new jQuery copy
    var sub = $.sub();

    //create a new version of extend function
    //first store proper extend in a var
    sub.oldExtend = sub.extend;
    //then create our new extend function, limiting it to 1 target and source and auto deep copying it
    sub.extend = function(target, source) {
        return sub.oldExtend(true, tatget, source);
    }

});