#Events

###On()
`$(selector).on('eventName otherEvent', functionToCall);`
`$(selector).off('eventName', functionToCall);` - remove specific event function
`$(selector).off('eventName');` - remove all event function

supply multiple event handlers
```javascript
    $(selector).on({
    'click': clickHandler,
    'hover': hoverHandler
    });
```

###Propogation
```
event.preventDefault();
event.stopPropagation();
event.stopImmediatePropagation();
```

###Adding functionality to added items
```javascript
    $(parent).on('click', 'selector', clickHandler);
    $(document).on('click', 'selector', clickHandler);
```

###Custom Events
```javascript
    $("#myDiv").on('nonExistantEvent', handler);
    $("#myDiv").trigger('nonExistantEvent');
```

```javascript
    var trafficLight = {};
    var car = {};

    car.lightTurnedGreen = function(){};

    $(trafficLight).on('green', car.lightTurnedGreen);
    $(trafficLight).trigger('green');
```