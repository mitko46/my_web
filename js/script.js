$(document).ready(function(){

    $(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 100) {
			$('section').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
				if ($(this).position().top <= windscroll + 100) {
					$('nav li.active').removeClass('active');
					$('nav li').eq(i).addClass('active');
				}
			});

		} else {

			$('nav li.active').removeClass('active');
			$('nav li:first').addClass('active');
		}

		}).scroll();

      $('.navbar-collapse a').click(function(){
                $(".navbar-collapse").collapse('hide');
            });

});