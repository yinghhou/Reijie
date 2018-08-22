$(document).ready(function(){
	$(".eg-content .nav-path li").on("click",function(){
		var i=$(this).index();
		$(".eg-content .nav-path li").eq(i).addClass("active").siblings().removeClass("active");
		$(".eg-content .nav-path p").eq(i).addClass("active").siblings().removeClass("active");
	});
});
