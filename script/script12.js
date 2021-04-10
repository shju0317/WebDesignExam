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
var slideCount = $(".slideImg").length;
var currentIndex = 0;
var slidePositon;

setInterval(function(){
	if(currentIndex < (slideCount - 1)){
		currentIndex++;
	}else{
		currentIndex = 0;
	}
	
	slidePositon = currentIndex * (-1200) + "px";
	$(".slideList").animate({left: slidePositon}, 400);
}, 3000);

