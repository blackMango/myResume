
$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors:['section1','section2','section3','section4'],
		navigation:true,
		navigationPosition:'right',
		loopBottom:true,
		loopTop:true,
		navigationColor:#0e0056,
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').fadeIn(2000);
			}
			if(index == 4){
				$('.section4').find('p').delay(500).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 5){
				//$('.section5 .works .worksbg hgroup').fadeIn(1000);
				// $('.section5 .works .worksbg h4').fadeOut(1000);
			}
			if(index == 6){
				$('.section6').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').fadeOut(2000);
			}
			if(index == '4'){
				$('.section4').find('p').delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '6'){
				$('.section6').find('p').fadeOut(2000);
			}
		}
	});
	$('.section5 .works .worksbg').mouseenter(function(){
	 	$(this).find('hgroup').fadeIn(1000);
	 	$(this).find('h4').fadeOut(1000);
	}).mouseleave(function(){
		$(this).find('hgroup').fadeOut(1000);
	 	$(this).find('h4').fadeIn(1000);
	});
});
