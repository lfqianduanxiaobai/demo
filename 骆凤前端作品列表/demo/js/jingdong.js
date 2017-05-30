// JavaScript Document
window.onload=function(){
		var headtop=document.getElementById('headtop');
		var headtop_con=document.getElementById('headtop_con');
		var beijing=document.getElementById('beijing');
		var beijing_cov=document.getElementById('beijing_cov');
		var headtop_right=document.getElementById('headtop_right');
		var headtop_rightul=document.getElementById('headtop_rightul');
		var fam=document.getElementById('fam');
		var myjindong=document.getElementById('myjindong');
		var topsearch=document.getElementById('topsearch');
		var gouwuce=document.getElementById('gouwuce');
		var kong=document.getElementById('kong');
		var center=document.getElementById('center');
		var center_left=document.getElementById('center_left');
		var center_lefts=document.getElementById('center_lefts');
		var center_leftscov=document.getElementById('center_leftscov');
		var center_mid=document.getElementById('center_mid');
		var lunbo=document.getElementById('lunbo');
		var lunbo_left=document.getElementById('lunbo_left');
		var lunbo_right=document.getElementById('lunbo_right');
		var imgs=lunbo.getElementsByTagName('img');
		var lis=lunbo.getElementsByTagName('li');
		var cuxiao=document.getElementById('cuxiao');
		var cuxiao_liebiao=document.getElementById('cuxiao_liebiao');
		var cuxiao_liebiao1=document.getElementById('cuxiao_liebiao1');
		var cuxiao1=document.getElementById('cuxiao1');
		var gonggao=document.getElementById('gonggao');
		var second=document.getElementById('second');
		var daojishi=document.getElementById('daojishi');
		var pingpai=document.getElementById('pingpai');
		var pingpai_left=document.getElementById('pingpai_left');
		var pingpai_left0=document.getElementById('pingpai_left0');
		var pingpai_left1=document.getElementById('pingpai_left1');
		var pingpai_left2=document.getElementById('pingpai_left2');
		var arr_left=document.getElementById('arr_left');
		var arr_right=document.getElementById('arr_right');
		var ai=document.getElementById('ai');
		var ai_left=document.getElementById('ai_left');
		var ai_right=document.getElementById('ai_right');
		var little_con=document.getElementById('little_con');
		var jiantou_left=document.getElementById('jiantou_left');
		var jiantou_right=document.getElementById('jiantou_right');
		// 顶部导航条
		beijing.onmouseover=function(){
			beijing.style.background="white";
			beijing_cov.style.display='block';
		}
		beijing.onmouseout=function(){
			beijing.style.background="#E3E4E5";
			beijing_cov.style.display='none';
		}
		// 顶部导航条结束

		// 顶部悬浮部分
		var float_search=document.getElementById('float_search');
		window.onscroll=function(){
			var t=document.documentElement.scrollTop;
			if(t>=660){
				float_search.style.display='block';
			}
			if(t<660){
				float_search.style.display='none';
			}
		}
		// 顶部悬浮部分结束
		// 搜索区域
		gouwuce.onmouseover=function(){
			kong.style.display='block';
		}
		gouwuce.onmouseout=function(){
			kong.style.display='none';
		}
		// 搜索区域结束

		// 中间区域
		center_lefts.onmouseover=function(){
			center_leftscov.style.display='block';
		}
		center_lefts.onmouseout=function(){
			center_leftscov.style.display='none';
		}

		// 轮播图
		lunbo.onmouseover=function(){
			lunbo_left.style.display='block';
			lunbo_right.style.display='block';
		}
		lunbo.onmouseout=function(){
			lunbo_left.style.display='none';
			lunbo_right.style.display='none';
		}
		// 自动轮播
		var timer=setInterval(qiehuan,2000);
		var cur=0;
		function qiehuan(){
			cur++;
			if(cur==8){
				cur=0;
			}
			for(var i=0;i<imgs.length;i++){
				// imgs[i].className='';
				imgs[i].style.display='none';
			}
			for(var i=0;i<lis.length;i++){
				lis[i].className='';
			}
			// imgs[cur].className='cur';
			shanbai();
			lis[cur].className='cur';
		}	
		// 自动轮播结束
		// 鼠标移入移出
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseover=function(e){
				clearInterval(timer);
				var ev=e||window.event;
				var curObj=ev.target||ev.srcElement;
				for(var j=0;j<lis.length;j++){
					if(lis[j]==curObj){
						cur=j;
					}
				}
				for(var i=0;i<imgs.length;i++){
					// imgs[i].className='';
					imgs[i].style.display='none';
				}
				for(var i=0;i<lis.length;i++){
					lis[i].className='';
				}
				// imgs[cur].className='cur';
				shanbai();
				lis[cur].className='cur';
			}
			lis[i].onmouseout=function(){
				timer=setInterval(qiehuan,2000);
			}
		}	
		// //左右箭头控制
		// lunbo_right.onclick=function(){
		// 	clearInterval(timer);
		// 	qiehuan();
		// }
		// lunbo_left.onclick=function(){
		// 	clearInterval(timer);
		// 	qiehuan1();
		// }
		// lunbo_right.onmouseout=function(){
		// 	timer=setInterval(qiehuan,2000);
		// }
		// lunbo_left.onmouseout=function(){
		// 	timer=setInterval(qiehuan,2000);
		// }
		// function qiehuan1(){
		// 	cur--;
		// 	if(cur==-1){
		// 		cur=7;
		// 	}
		// 	if(cur==-2){
		// 		cur=6;
		// 	}
		// 	if(cur==-3){
		// 		cur=5;
		// 	}
		// 	if(cur==-4){
		// 		cur=4;
		// 	}
		// 	if(cur==-5){
		// 		cur=3;
		// 	}
		// 	if(cur==-6){
		// 		cur=2;
		// 	}
		// 	if(cur==-7){
		// 		cur=1;
		// 	}
		// 	if(cur<=-8){
		// 		cur=0;
		// 	}
		// 	for(var i=0;i<imgs.length;i++){
		// 		// imgs[i].className='';
		// 		imgs[i].style.display='none';
		// 	}
		// 	for(var i=0;i<lis.length;i++){
		// 		lis[i].className='';
		// 	}
		// 	// imgs[cur].className='cur';
		// 	shanbai();
		// 	lis[cur].className='cur';
		// }

		//闪白部分
		function shanbai(){
			imgs[cur].style.display='block';
			imgs[cur].style.opacity=0;
			imgs[cur].style.filter='alpha(opacity=0)';
			var k=0;
			var timers=setInterval(function(){
				k++;
				if(k==100){
					clearInterval(timers);
				}
				imgs[cur].style.opacity=k/100;
				imgs[cur].style.filter='alpha(opacity='+k+')';
			},2);
		}

		// 闪白部分结束
		// 轮播图结束
		cuxiao1.onmouseover=function(){
			cuxiao_liebiao1.style.display='none';
			cuxiao_liebiao.style.display='block';
			cuxiao1.style.color='#E01222';
			gonggao.style.color='#333333';
		}
		gonggao.onmouseover=function(){
			cuxiao_liebiao.style.display='none';
			cuxiao_liebiao1.style.display='block';
			gonggao.style.color='#E01222';
			cuxiao1.style.color='#333333';
		}
		// 中间区域结束
		// 京东秒杀倒计时
		var time=function(){
			var now_time=new Date();//获取当前时间
		var future_time=new Date(2017,4,16,12,0,0);
		var diff_time=future_time.getTime()-now_time.getTime();//获取时间差

		// 获取天数
		// var day=Math.floor(diff_time/(24*60*60*1000));
		// diff_time-=day*(24*60*60*1000);

		// 获取小时
		var hour=Math.floor(diff_time/(60*60*1000));
		diff_time-=hour*(60*60*1000);

		// 获取分钟
		var min=parseInt(diff_time/(60*1000));
		diff_time-=min*(60*1000);

		// 获取秒数
		var second1=Math.floor(diff_time/1000);

		document.getElementById('hour').innerHTML=hour;
		document.getElementById('min').innerHTML=min;
		document.getElementById('second1').innerHTML=second1;
		}
		time();
		setInterval(time,1000)
		// 京东秒杀倒计时结束


		// 品牌秒杀
		pingpai_left.onmouseover=function(){
			arr_left.style.display='block';
			arr_right.style.display='block';
		}
		pingpai_left.onmouseout=function(){
			arr_left.style.display='none';
			arr_right.style.display='none';
		}
		// 品牌秒杀结束


		// 爱生活
		little_con.onmouseover=function(){
			jiantou_right.style.display='block';
			jiantou_left.style.display='block';
		}
		little_con.onmouseout=function(){
			jiantou_left.style.display='none';
			jiantou_right.style.display='none';
		}
		// 爱生活结束


		var much=document.getElementById('much');
		var much2=document.getElementById('much2');

		// 大横列1
		// 图一
		var much_con1=document.getElementById('much_con1');
		var l11=document.getElementById('l11');
		much_con1.onmouseover=function(){
			much_con1.style.borderColor='#F10214';
			l11.style.color='#C81623';
		}
		much_con1.onmouseout=function(){
			much_con1.style.borderColor='#F6F6F6';
			l11.style.color='#666666';
		}
		// 图二
		var much_con2=document.getElementById('much_con2');
		var la=document.getElementById('la');
		much_con2.onmouseover=function(){
			much_con2.style.borderColor='#F10214';
			la.style.color='#C81623';
		}
		much_con2.onmouseout=function(){
			much_con2.style.borderColor='#F6F6F6';
			la.style.color='#666666';
		}
		// 图三
		var much_con3=document.getElementById('much_con3');
		var lb=document.getElementById('lb');
		much_con3.onmouseover=function(){
			much_con3.style.borderColor='#F10214';
			lb.style.color='#C81623';
		}
		much_con3.onmouseout=function(){
			much_con3.style.borderColor='#F6F6F6';
			lb.style.color='#666666';
		}

		// 图四
		var much_con4=document.getElementById('much_con4');
		var lc=document.getElementById('lc');
		much_con4.onmouseover=function(){
			much_con4.style.borderColor='#F10214';
			lc.style.color='#C81623';
		}
		much_con4.onmouseout=function(){
			much_con4.style.borderColor='#F6F6F6';
			lc.style.color='#666666';
		}
		// 图五
		var much_con5=document.getElementById('much_con5');
		var ld=document.getElementById('ld');
		much_con5.onmouseover=function(){
			much_con5.style.borderColor='#F10214';
			ld.style.color='#C81623';
		}
		much_con5.onmouseout=function(){
			much_con5.style.borderColor='#F6F6F6';
			ld.style.color='#666666';
		}

		// 大横列2
		// 图一
		var much_con11=document.getElementById('much_con11');
		var lp=document.getElementById('lp');
		much_con11.onmouseover=function(){
			much_con11.style.borderColor='#F10214';
			lp.style.color='#C81623';
		}
		much_con11.onmouseout=function(){
			much_con11.style.borderColor='#F6F6F6';
			lp.style.color='#666666';
		}
		// 图二
		var much_con22=document.getElementById('much_con22');
		var lpp=document.getElementById('lpp');
		much_con22.onmouseover=function(){
			much_con22.style.borderColor='#F10214';
			lpp.style.color='#C81623';
		}
		much_con22.onmouseout=function(){
			much_con22.style.borderColor='#F6F6F6';
			lpp.style.color='#666666';
		}
		// 图三
		var much_con33=document.getElementById('much_con33');
		var lppp=document.getElementById('lppp');
		much_con33.onmouseover=function(){
			much_con33.style.borderColor='#F10214';
			lppp.style.color='#C81623';
		}
		much_con33.onmouseout=function(){
			much_con33.style.borderColor='#F6F6F6';
			lppp.style.color='#666666';
		}

		// 图四
		var much_con44=document.getElementById('much_con44');
		var lpppp=document.getElementById('lpppp');
		much_con44.onmouseover=function(){
			much_con44.style.borderColor='#F10214';
			lpppp.style.color='#C81623';
		}
		much_con44.onmouseout=function(){
			much_con44.style.borderColor='#F6F6F6';
			lpppp.style.color='#666666';
		}
		// 图五
		var much_con55=document.getElementById('much_con55');
		var lppppp=document.getElementById('lppppp');
		much_con55.onmouseover=function(){
			much_con55.style.borderColor='#F10214';
			lppppp.style.color='#C81623';
		}
		much_con55.onmouseout=function(){
			much_con55.style.borderColor='#F6F6F6';
			lppppp.style.color='#666666';
		}
}