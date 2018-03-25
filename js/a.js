// JavaScript Document
var num=0;
var i=0;
$(function(){
		$("#d2").click(function(){
		i++;
		if(i>=4){
			alert("你只有三次抽奖机会！");
			return;
		}
	 num=Math.random()*360;//点击后产生一个随机值
	 if(num>60&&num<=120||num>300&&num<=360){
	 num=Math.random()*60;
	 }
	$(this).rotate({
		duration:3000,
		angle:0,
		animateTo:num+1000,
		callback:function(){
			A();
		}
	});
	});
});
function A(){
	if(num>0&&num<=60){
		alert("恭喜您，抽中了5元优惠券!");
		return;
	}
	else if(num>60&&num<=120){
		alert("恭喜你，抽中了10元优惠券！");
		return;
	}
	else if(num>120&&num<=180){
		alert("恭喜你，抽中了20元优惠券！");
		return;
	}
	else if(num>180&&num<=240){
		alert("恭喜你，抽中了10元话费！");
		return;
	}
	else if(num>240&&num<=300){
		alert("恭喜你，抽中了10Q币！");
		return;
	}
	else if(num>300&&num<=360){
		alert("恭喜你，抽中了iphone 5s！");
		return;
	}

}
