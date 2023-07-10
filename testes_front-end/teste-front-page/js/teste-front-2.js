$(document).ready(function(){
	// form select niceSelect
   (function($){
 //    var special = "nice!";

 	// $('select').niceSelect('update');
 	// $('select').niceSelect('destroy');
  })

    $('#seluser').niceSelect();
   // validate only number
	function validateNumber(event) {
	    var key = window.event ? event.keyCode : event.which;
		    if (event.keyCode === 8 || event.keyCode === 46) {
		        return true;
		    } else if ( key < 48 || key > 57 ) {
		        return false;
		    } else {
		        return true;
		    }
		};
	$(document).ready(function(){
    $('[id^=edit]').keypress(validateNumber);
	});

// $('select').niceSelect();
 // alert("Hello!"); // would be undefined


	//** swiper
	var mySwiper = new Swiper('.swiper-container', {
	      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	});
	var mySwiper = document.querySelector('.swiper-container').swiper;

// Now you can use all slider methods like
	mySwiper.slideNext();


// /** functions click **/
	// nav hamburguer icon change
	$(document).ready(function(){
		$('#nav-icon').on('click', function(){
			$(this).toggleClass('open');
		});
	});

	// dropdown elements menu mobile $('#menu-cursos-mobile")
	$("#menu-cursos-mobile li h2").on('click', function() {
		$(this)
		.parent()
			.children()
				.next()
					.stop()
						.slideToggle();
	});	  		
});