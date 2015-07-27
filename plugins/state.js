(function($) {
    var pluginState = 0;
    $.fn.increasePluginState = function() {
        pluginState ++;
        if(pluginState ===1) {
            return this.css('background-color', 'yellow');
        } else if(pluginState ===2) {
            return this.css('background-color', 'orange');
        } else {
            return this.css('background-color', 'red');
        }
    };

    $.fn.increaseNodeState = function() {
        if(!this.data('level')) {
            this.data('level', '0');
        }
        var currentLevel = parseInt(this.data('level')) + 1;
        this.data('level', currentLevel);
        if(currentLevel ===1) {
            return this.css('background-color', 'yellow');
        } else if(currentLevel ===2) {
            return this.css('background-color', 'orange');
        } else {
            return this.css('background-color', 'red');
        }
    }
})(jQuery);

$(document).ready(function() {
    $('#plugs').click(function() {
        $('#p1').increasePluginState();
    });
    $('#plugs2').click(function() {
        $('#p2').increasePluginState();
    });
    $('#nodes').click(function() {
        $('#sp1').increaseNodeState();
    });
    $('#nodes2').click(function() {
        $('#sp2').increaseNodeState();
    });
});