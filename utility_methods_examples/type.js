// function callAnotherFunc(times, delay, func) {
//     var i = 0;
//     (function loopIt() {
//         i += 1;
//         func();
//         if(i < times) {
//             setTimeout(loopIt, delay);
//         }
//     })();
// }
function callAnotherFunc(arg1, arg2, arg3) {
    var times = $.isNumeric(arg1) ? arg1 : 4;
    var delay = $.isNumeric(arg2) ? arg2 : 1000;
    var functionToCall = $.isFunction(arg1) ? arg1 : $.isFunction(arg2) ? arg2 : arg3;
    var i = 0;
    (function loopIt() {
        i += 1;
        functionToCall();
        if(i < times) {
            setTimeout(loopIt, delay);
        }
    })();
}

function functionToCall() {
    $('#output').append("<p>Function called.</p>");
}

$(document).ready(function(){
    callAnotherFunc(3, 500, functionToCall);
    callAnotherFunc(functionToCall);
});