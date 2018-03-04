	$(document).ready(function($){
          var parPosition = [];
        $('.par').each(function() {
            parPosition.push($(this).offset().top);
        });
        
		$('a').click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 500);
			return false;
		});
        
        	$('.Nav ul li a').click(function () {
			$('.Nav ul li a').removeClass('active');
				$(this).addClass('active');
		}); 
        
       $('.Nav a').hover(function() {
           $(this).find('.label').show();
           }, function() {
           $(this).find('.label').hide();
       });
        
           $(document).scroll(function(){
        var position = $(document).scrollTop(),
                index; 
                for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
      $('.Nav ul li a').removeClass('active');
            $('.Nav ul li a:eq('+index+')').addClass('active');
        });
        
        	$('.Nav ul li a').click(function () {
			$('.Nav ul li a').removeClass('active');
				$(this).addClass('active');
		});   
	});
