(function($) {
    $.fn.average = function() {
        var sum = 0;
        this.each(function() {
            sum += parseFloat($(this).html());
        });
        return sum / $(this).length;
    }
})(jQuery);

$(document).ready(function() {
    console.log($('div').average());
});