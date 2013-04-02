/* Menu sliding animation script */
jQuery(function($) {

    var $el, leftPos, newWidth;
        $mainNav = $(".top-nav ul");
    
    $mainNav.append("<li id='sliding-highlight'></li>");
    
    var $slidingHighlight = $("#sliding-highlight");
    
    $slidingHighlight
        .width($(".current_page_item").width())
        .height($mainNav.parent().height())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $(".current_page_item a").position().left)
        .data("origWidth", $slidingHighlight.width());
                
    $(".top-nav li a").hover(function() {
        $el = $(this);
        leftPos = $el.offset().left;
        newWidth = $el.parent().width();
        $slidingHighlight.stop().animate({
            left: leftPos,
            width: newWidth,
            backgroundColor: $el.attr("rel")
        })
    }, function() {
        $slidingHighlight.stop().animate({
            left: $slidingHighlight.data("origLeft"),
            width: $slidingHighlight.data("origWidth")
        });    
    });
    
    /* Kick IE into gear */
    $(".current_page_item a").mouseenter();
    
});