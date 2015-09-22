(function( window, $, undefined ){
	"use strict";
	if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)){
		// only put things here for touch devices	
	} else {
		//seth quick hover swap start
		$(function() {
			$("img")
			.mouseover(function() { 
				var src = $(this).attr("src").replace(".png", "_o.png");
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").replace("_o.png", ".png");
				$(this).attr("src", src);
			});
		});
		//seth quick hover swap end
	}
})( window, jQuery );