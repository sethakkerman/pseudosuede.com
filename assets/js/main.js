(function( window, $, undefined ){
	"use strict";
	if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)){
		// only put things here for touch devices
		/*$(function() {
			$("img.logo").bind('touchstart', function() {
				var src = $(this).attr("src").replace(".png", "_o.png");
				$(this).attr("src", src);
			});
	
			$("img.logo").bind('touchend', function() {
				var src = $(this).attr("src").replace("_o.png", ".png");
				$(this).attr("src", src);
			});
		});*/
	} else {
		//seth quick hover swap start
		$(function() {
			$("img.logo")
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