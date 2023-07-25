$(function(){
	
	
	/*브라우저 section높이 값 계산 */
	
	var ht = $(window).height();
		$("section").height(ht);
	
	
	
	/*브라우저가 리사이즈 될때마다 브라우저 section높이 값 계산*/ 
	
	$(window).resize(function(){
		var ht = $(window).height();
		$("section").height(ht);
	});
	
	//step5 주메뉴 클릭 시, 자동으로 상하 스크롤시키기
	$("#menu li").click(function(e){
		e.preventDefault(); //a태그 사용 안되게 함 
		
		var ht = $(window).height();  //브라우저 높이값

		var i = $(this).index(); //현재 클릭한 li의 순서값 
		
		var nowTop = i*ht;	  // 높이값*박스의 순서값		
	
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
	//step6. 화면이 스크롤될때마다 현재 영역에 해당하는 블릿 활성화하기
	$(window).scroll(function(){	
		var bg = ["#ffc2d2", "#9ee1fc", "#eedd94"]
		var ht = $(window).height();  
		var scroll = $(window).scrollTop();  
		for(var i=0; i<3;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".dd").removeClass("add");
				$(".dd").eq(i).addClass("add");
				$("#menu>li").css("background-color","");
				$("#menu>li").eq(i).css("background-color", bg[i]);
			};
		}
		});
		
	$('section').mousewheel(function(event,delta){
		//마우스 휠을 올렸을때	
		if(delta>0) {
		var ht = $(window).height();	
		var i = $(this).index()-1;
		$("html, body").stop().animate({"scrollTop":ht*i},1000,"easeOutBounce");
			
		//마우스 휠을 내렸을때
		}else if(delta<0){
		var ht = $(window).height();	
		var i = $(this).index()+1;
		$("html, body").stop().animate({"scrollTop":ht*i},1000,"easeOutBounce");		
			}
	});
	
});
	