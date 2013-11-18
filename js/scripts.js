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
	

$('#sections a').click(function (e) {
    e.preventDefault();
    $('body').removeClass('show-nav');
  $('.no-click').removeClass('show-nav').hide();
  $('body').unbind('touchmove');

  $('html,body').delay(200).animate({scrollTop:$(this.hash).offset().top - $('#header').outerHeight()}, 550);

});

$("a.scroll").click(function(event){event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - $('header').outerHeight()}, 550);
});

});

$(window).load(function(){

  $('.one').delay(500).queue(function(){$(this).addClass('bg-blur');});
});
