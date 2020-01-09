$(document).ready(function(){
	$("#tabs .tabs-top ul li").mouseover(function(){
		$(this).addClass("choosed");
		$(this).siblings("li").removeClass("choosed");
		$("#tabs .tabs-body .content").hide();
		$("#tabs .tabs-body .content").eq($(this).index()).show();
	});
});