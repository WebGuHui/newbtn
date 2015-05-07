$(function(){
	$(".link .button").hover(function(){//加入
		var data=$(this).attr("data");
		$(".tip em").text(data);
		var pos=$(this).position().left+10;
		var dis=($(".tip").outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$(".tip").css({left:l+"px"}).stop(false,true).animate({top:"195",opacity:"1",},300);

	},function(){
		$(".tip").stop(true,true).animate({top:"140",opacity:"0",},500);

	})//离开
})