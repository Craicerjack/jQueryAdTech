#Data Method
1. Store information:
    ```javascript
        $("#p1").data("three", 3);

        console.log($("#p1").data("three"));
    ```

2. Not limited to simple values. Can store objects.
    ```javascript
        var p1 = $("#p1");
        var object1 = { value1: 1, value2: "true" };
        p1.data("obj1", object1);

        console.log(p1.data("object1"));
        console.log(p1.data("object1").value2);
    ```

3. and functions and more...
    ```javascript
    var div1 = $("#div1");
    var myFunc = function() {
        console.log("Ive called a function from data");
    }
    div1.data("func", myFunc);
    console.log(div1.data("func"));
    div1.data("func")();
    ```

###Reserved Keys
* events
* handle
* anything that starts with "_"


#HTML5 Data
1. Any attribute that starts with `data-`
        - `<div id="myDiv" data-someData="3" data-moreData="hi there"></div>`
2. Data must be stored as a string
3. Lives with the HTML (can clutter things)
4. jQuery
    ```javascript
    var message = $(selector).attr("data-message");
    // or
    var message = $(selector).data("message");
    $(selector).attr("data-message", message);
    ```
    - remove the `data-` when reading using the `data` method
    - using the `data` method to read HTML5 data attributes is read only
    - data method uses best guess type casting
    - data method will read the cache first before checking data attributes

###Remove data
`obj.removeData('key');` - Remove specfic data
`obj.removeData();`      - Remove all data