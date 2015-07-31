/**
 * jQuery method mScroll v1.2
 * Copyright 2015 maam.inc
 * Contributing Author: Hiroki Homma
 * Require for jQuery v1.7 or above
 * @param speed
 * @param easing
 * @param offset
 */
$.fn.mScroll = function(speed, easing, offset){
    var $self = this;
    if(typeof(offset) !== 'number') {
        offset = 0;
    }

    $self.each(function(){
        var $self = $(this);

        $self.on('click.mScroll', function(e){
            var href = $self.attr('href');

            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            $('html,body').not(':animated').animate({
                scrollTop: $(href.substr(href.indexOf('#'))).offset().top + offset
            },{
                duration: speed,
                easing: easing,
                queue: false
            });
            return false;
        });
    });
};
