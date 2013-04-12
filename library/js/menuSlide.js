/* Menu sliding animation script */
jQuery(function (e) {
	var t,
	n,
	r;
	$mainNav = e(".top-nav ul");
	$mainNav.append("<li id='sliding-highlight'></li>");
	var i = e("#sliding-highlight");
	var $startingPos = e(".current_page_item");  //****change 
	
	i.width(e(".current_page_item").width())
	.height($mainNav.parent().height())
	.css("left",$startingPos.position().left)  //****change
	.data("origLeft", $startingPos.position().left)  //****change
	.data("origWidth", i.width());
	console.log("this is e('.current_page_item a').offset().left: "+ e(".current_page_item a").offset().left);	
	console.log("this is the postiion of the element: " + $startingPos.position().left);
	e(".top-nav li a").hover(function () {
		t = e(this);
		console.dir(t.offset());
		console.dir(t.parent().offset());  // this shows that offest and position are not the same
		console.dir(t.parent().position());
		//n = t.offset().left;
		n = t.parent().position().left;  //****change
		r = t.parent().width();
		console.log("this is how far left we are going at first: "+n);
		i.stop().animate({
			left : n,
			width : r,
			backgroundColor : t.attr("rel")
		})
	}, function () {
		i.stop().animate({
			left : i.data("origLeft"),
			width : i.data("origWidth")
		})
	});
	e(".current_page_item a").mouseenter()
});


/*
	
	
    
    $mainNav2.append("<li id='magic-line-two'></li>");
    
    var $magicLineTwo = $("#magic-line-two");
    
    $magicLineTwo
        .width($(".current_page_item_two").width())
        .height($mainNav2.height())
        .css("left", $(".current_page_item_two a").position().left)
        .data("origLeft", $(".current_page_item_two a").position().left)
        .data("origWidth", $magicLineTwo.width())
        .data("origColor", $(".current_page_item_two a").attr("rel"));
                
    $("#example-two a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLineTwo.stop().animate({
            left: leftPos,
            width: newWidth,
            backgroundColor: $el.attr("rel")
        })
    }, function() {
        $magicLineTwo.stop().animate({
            left: $magicLineTwo.data("origLeft"),
            width: $magicLineTwo.data("origWidth"),
            backgroundColor: $magicLineTwo.data("origColor")
        });    
    });
    

*/