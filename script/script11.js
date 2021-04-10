// JavaScript Document

// tabMenu
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	tabBtn.removeClass("active");
	target.addClass("active");
	tabCont.css("display","none");
	tabCont.eq(index).css("display","block");
});

// layerPopup
$(".layerPopup").click(function(){
	$(".layer").show();
	// $(".layer").css("display","block");
	$(".layer-bg").show();
});

$(".close").click(function(){
	$(".layer").css("display","none");
	// $(".layer").hide();
	$(".layer-bg").hide();
});

//imageSlide
$(".slideList").children("div:gt(0)").hide();
var current = 0;

setInterval(function(){
	var next = (current + 1) % 3;
	$(".slideList").find("div").eq(current).fadeOut();
	$(".slideList").find("div").eq(next).fadeIn();
	current = next;

}, 3000);

