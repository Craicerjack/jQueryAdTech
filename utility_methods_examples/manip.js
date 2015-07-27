$(function(){
    var myArray = [1, 2, 3, 4, 4, 5];
    var myArray2 = [6, 7, 8];

    if($.inArray(4, myArray) !== -1) {
        console.log("4 is in the array");
    }

    if($.inArray(44, myArray) !== -1) {
        console.log("44 is in the array");
    }

    $.unique(myArray); console.log(myArray);

    $.merge(myArray, myArray2); console.log(myArray);

    var newArray = $.map(myArray, function(item, index){
        return item *2
    });
    console.log(newArray);

    var greppedArray = $.grep(myArray, function(item){
        return item%2 === 0;
    });
    console.log(greppedArray);

    console.log($('div'));
    console.log($.makeArray($('div')));

    // $('button').click(function() {
    //     $.getScript("./alert.js", function(data, textStatus) {
    //         console.log(textStatus);
    //         console.log(data);
    //     });
    // });

    //no error handling with $.getScript - use global ajax error function
    // grab any wrapped object
    $('#alert').ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
        console.log("ajax error logged........");
        console.log(thrownError);
    });

});