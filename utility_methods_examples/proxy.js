$(document).ready(function(){
    var eventHandlers = {
        type: "My Event Handler Object",
        clickButtonHandler: function(event) {
            console.log(this.type);
        }
    }

    $('#button').click(eventHandlers.clickButtonHandler); //this outputs button because this refers to the button object type
    $('#button').click($.proxy(eventHandlers.clickButtonHandler, eventHandlers)); //this outputs My Event Handler Object because this refers to the object passed in
});