$(document).ready(function() {

    //jquery has an fx object that exposes a speed property - effects object
    $.fx.speeds.slower = 2000;
    $.fx.speeds.faster = 100;

    $("#fadingDiv").click(function() {
        //add a callback so div is shown after it has faded out. Doing it elsewhere wont work
        $(this).fadeOut($("input:radio[name=group1]:checked").val(), function() {
            $(this).show();
        });
    });



});