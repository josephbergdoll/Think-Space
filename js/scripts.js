$(document).ready(function(){


$('.hero').fitText(2.2, { minFontSize: '23px', maxFontSize: '50px' });


	
	$(".scroll").click(function(event){	
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top - $('header').outerHeight()}, 550);
});
	
	

	

});