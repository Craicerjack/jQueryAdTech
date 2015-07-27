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
    - console.profile()
5. If function is a problem try alternate algorithms
6. Lather, rinse, repeat

Tips:
* use named funcs, not anonymous ones.
* Isolate ajax and HTTP calls
* learn the profilers


