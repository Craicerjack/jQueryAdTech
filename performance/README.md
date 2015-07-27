#Tools:
1. profiler
    - profiler button
    - `profile()` and `profileEnd()`
    - `console.profile()` and `console.profileEnd()`
2. Manual Timing.
    - `console.time("stringHere")` and `console.timeEnd("stringHere")`

#Performance Problem Identification Strategy
1. Profile all usage
    - Turn on profiler and use page for time and then end profiler
2. Look at times, call counts to zero in on problem areas
    - High call counts, high time percentages, high max call times
3. Use manual timing to assist in identifying problems
4. Profile specific function calls in isolation
    - `console.profile()`
5. If function is a problem try alternate algorithms
6. Lather, rinse, repeat

Tips:
* use named funcs, not anonymous ones.
* Isolate ajax and HTTP calls
* learn the profilers


##General Performance tips
 - use latest jQuery
 - Caching Selectors:
    ```javascript
    $(function() {

        //BAD
        // Issue: grabbing selectors in each iteration of loop
        console.time('no caching');
        for(var i = 0; i < 10000; i += 1) {
            var s = $("div");
        }
        console.timeEnd('no caching');

        //GOOD
        console.time('caching');
        var myDiv = $("div");
        for(var i = 0; i < 10000; i += 1) {
            var s = myDiv;
        }
        console.timeEnd('caching');
    });
    ```
 - whenever possible cache your jQuery wrapped set outside any loops
 - Cache whatever you can outside loops
    - even cache `length` property in for loops - doesnt have to get it every iteration
    ```javascript
    var len = example.length;
    for(var i = 0; i < len; i += 1) {}
    ```
 - use element properties whenever possible
    ```javascript
    console.time('jQuery prop');
    var myDiv = $("div");
    for(var i = 0; i < 10000; i += 1) {
        var s = myDiv.attr('id');
    }
    console.timeEnd('jQuery prop');

    console.time('DOM prop');
    var myDiv = $("div");
    for(var i = 0; i < 10000; i += 1) {
        var s = myDiv[0].id;
    }
    console.timeEnd('DOM prop');
    ```
 - *Only use where necessary. Has little impact on short loops*

##Selector Performance
- Sizzle is the selector engine - right to left selector - starts at the right
- Shorter selectors are usually better - reduce the amount of work engine has to do
- If finding embedded element, finding a single element first then finding others is best
    - `$('#selector-id').find('child-class');`

##DOM Manipulation
- DOM writing is expensive
- Perform all necessary operations and then append to DOM once, once all things ready to go
- Wrap all items, if possible, in one containing element.
    - instead of appending one var which has loads of elements, wrap that var in an element
    - `$('selector').append('<div> + var + </div>');`


