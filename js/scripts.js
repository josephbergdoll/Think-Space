$(document).ready(function(){
	$('.hamburger').click(function(){
		$('#sections').addClass('showSections');
		$('.wrapper').addClass('slideWrapper').delay(400).queue(function(next){
			$(this).addClass('fade');
			next();
			});
			
		$('#header').addClass('slideWrapper').delay(400).queue(function(next){
    $(this).addClass('fade');
    next();
});
	});
	
	$('#sections a').click(function(){
		$('#sections').removeClass('showSections');
		$('.wrapper').removeClass('fade').delay(100).queue(function(next){
			$(this).removeClass('slideWrapper');
			next();
			});
			
		$('#header').removeClass('fade').delay(100).queue(function(next){
    $(this).removeClass('slideWrapper');
    next();
});
});
	
	$(".scroll").click(function(event){	
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top - $('header').outerHeight()}, 750);
});

$(".touchScroll").click(function(event){	
event.preventDefault();
$('html,body').delay(300).animate({scrollTop:$(this.hash).offset().top - $('header').outerHeight()}, 1000);
});
	
	
	
	
	$('div.close').click(function(){
		$('#sections').removeClass('showSections');
		$('.wrapper').removeClass('fade').delay(400).queue(function(next){
    $(this).removeClass('slideWrapper');
    next();
    });
		$('#header').removeClass('fade').delay(400).queue(function(next){
    $(this).removeClass('slideWrapper');
    next();
    });
	});
	
	$('h1.hero').fitText(2.2, { minFontSize: '23px', maxFontSize: '50px' }).addClass('left').delay(1200).queue(function(next){
	$(this).removeClass('left');
	next();
	});
	
	$('.one').delay(500).queue(function(next){
	$(this).addClass('newbg');
	next();
	});

	

});