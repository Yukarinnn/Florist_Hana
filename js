// JavaScript Document

//ハンバーガーメニュー
$(function(){
 $('.sp_nav_btn').on('click',function
		(){
	 $('.sp_nav_btn,nav').toggleClass
	 ('open');
 });	
	$('nav a').on('click',function(){
		$('.sp_nav_btn,nav').removeClass
	('open');
				  });
});


//スムーススクロール//
$(function(){
	$('a[href^="#"]').click(function
(){
	let speed=400;
	let href=$(this).attr('href');
	let target=$(href=="#"||href==""?'html':href);
	let position=target.offset().top;
	$('body,html').animate({scrollTop:position},speed,'swing');
	return false;
	});	
});
//page topボタン
$(function(){
	var topBtn = $('#pageTop');
	topBtn.hide();
	
//ボタンの表示設定
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			//画面を200pxスクロールしたらボタンを表示
			topBtn.fadeIn();
		}else{
		 //画面が200pxより上ならボタンを表示しない
		 topBtn.fadeOut();
		}
	});
	
	//ボタンをクリックしたらスクロールして上に戻る
	topBtn.click(function(){
		$('body,html').animate({
		scrollTop: 0},500);
		return false
	});
});
//Slick呼び出し
$('.slider').slick({
	autoplay:true,
	autoplaySpeed:4000,
	speed:2000,
	fade:true,
	arrows:false
});
