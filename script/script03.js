// JavaScript Document

$(".nav > ul > li").mouseover(function(){
	$(this).find(".submenu").stop().slideDown(200);
	// $(this).find(".submenu").show(200);
});

$(".nav > ul > li").mouseout(function(){
	$(this).find(".submenu").stop().slideUp(200);
	//$(this).find(".submenu").hide(200);
});