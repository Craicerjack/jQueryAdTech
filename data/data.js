$(function() {
    //values
    $("#p1").data("three", 3);
    $("#p2").data("four", "four");
    console.log($("#p1").data("three"));

    //objects
    var p1 = $("#p1");
    var object1 = { value1: 1, value2: "true" };
    p1.data("obj1", object1);
    console.log(p1.data("obj1"));
    console.log(p1.data("obj1").value2);

    //functions
    var div1 = $("#div1");
    var myFunc = function() {
        console.log("Ive called a function from data");
    }
    div1.data("func", myFunc);
    console.log(div1.data("func"));
    div1.data("func")();


    value1 = $("#div2").data("value1");
    console.log(value1);
    value2 = $("#div2").data("value2");
    console.log(value2);
    valueThree = $("#div2").data("valuethree");
    console.log(valueThree);

});

$(document).ready(function() {

})