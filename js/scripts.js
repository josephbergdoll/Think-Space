$(document).ready(function(){


$('.hero').fitText(2.2, { minFontSize: '23px', maxFontSize: '50px' });

$('a.hamburger-click').click(function(event){event.preventDefault();
	$('body').toggleClass('show-nav');
	$('.no-click').show().toggleClass('show-nav');
	$('body').bind('touchmove', function(e){e.preventDefault();});
});

$('.no-click').click(function(){
  $('body').removeClass('show-nav');
  $('.no-click').removeClass('show-nav').hide();
  $('body').unbind('touchmove');
});

$('.close').click(function(){
  $('body').removeClass('show-nav');
  $('.no-click').removeClass('show-nav').hide();
  $('body').unbind('touchmove');
});
	
$(".scroll").click(function(event){event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top - $('header').outerHeight()}, 550);
});

$('#sections a').click(function (e) {
    e.preventDefault();               // prevent default anchor behavior
    var goTo = this.href;             // store anchor href

    $('body').removeClass('show-nav');
  $('.no-click').removeClass('show-nav').hide();
  $('body').unbind('touchmove');

    setTimeout(function(){
         window.location = goTo;
    },500);});
	

});


$(window).load(function(){

	$('body').delay(500).queue(function(){$(this).addClass('bg-blur');});

});