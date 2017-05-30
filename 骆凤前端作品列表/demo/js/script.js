$(function(){
	//	鼠标点击item中的header显示下面的列表项
	$('.header').click(function(){
	//判断下面的列表项是否可见
		var ul1=$(this).parents('.item').find('.xiang');
     //如果显示,则隐藏
		if(ul1.is(':visible')){
			ul1.hide(400);
		}else{
	//如果隐藏,就显示
			ul1.show(400);
			$(this).parents('.item').siblings('.item').find('.xiang').hide(400);
		}
	})
})
