$(document).ready(function() {
    var animal = {
        eat: function() { console.log('im eating'); }
    }
    var dog = {
        bark: function() { console.log('woof'); }
    }
    dog.bark();
    $.extend(dog, animal); // makes a clone of props. So any changes to old props doesnt affect extended item
    dog.eat();

    var mammal = {
        actions: {
            eat: function() { console.log("nom nom ");},
            sit: function() { console.log("comfy");}
        }
    }

    var dolphin = function() {
        var dolphin = {
            actions: {
                swim: function() { console.log("aplish splash");},
                play: function() { console.log("squeak");}
            }
        }
        return dolphin;
    }
    var d1 = new dolphin();
    var d2 = new dolphin();

    d1.actions.swim();
    d1.actions.play();
    $.extend(d1, mammal)
    d1.actions.eat();
    d1.actions.sit();
    console.log(d1.actions.swim);  // no longer exist because overwritten by mammal actions on extend
    console.log(d1.actions.play);  // no longer exist because overwritten by mammal actions on extend
    // to fix this pass in a boolen to extend method and it will perform a deep extend.

    console.log("d2..................");
    d2.actions.swim();
    d2.actions.play();
    $.extend(true, d2, mammal)
    d2.actions.eat();
    d2.actions.sit();
    d2.actions.swim();
    d2.actions.play();
    console.log(d1);
    console.log(d2);
});