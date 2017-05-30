$(function(){
//	给变宽按钮加变宽样式
	$('.kuan').click(function(){
		$('.kuang').animate({'width':'200px'},700);
	})
//	给变高按钮加变高动画
   $('.gao').click(function(){
		$('.kuang').animate({'height':'200px'},700);
	})
// 给变色按钮加变色动画，定义一个数组随机挑选颜色
	$('.se').click(function(){
		var a=['red','blue','yellow'];
		var i=Math.floor(Math.random()*3);
		$('.kuang').css('background',a[i]);
	})
   //给重置按钮加效果
   $('.reset').click(function(){
   	$('.kuang').css('width','100px');
   	$('.kuang').css('height','100px');
   	$('.kuang').css('background','#77CCFF');
   })
})
