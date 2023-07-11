$( document ).ready(function() {
	$('.open-modal').on("click", function() {
		$('.modal-form').removeClass('hide');
		$('.modal-form').fadeIn().addClass('show');
		$('#home .hide').css({"display": "flex"});
	});

	$('.modal-x').on("click", function() {
		$('.modal-form').removeClass('show');
		$('.modal-form').addClass('hide');
	})

	$('.modal-form').click(function(event) {
		if (!$(event.target).closest(".modal").length) {
			$('.modal-form').fadeOut();
		}
	});
	// second modal
	$('.btn-modal').click(function() {
		$('.modal-form form').css('display', 'none');
		$('.modal-form form .btn-modal').css('display', 'none');
		$('.modal-form h2').addClass('display', 'flex');
		$('.modal-form p').addClass('display', 'flex');
	});
});




// $('.nome-da-modal').click(function (event) {
//     if (!$(event.target).closest(".conteudo-da-modal").length) {
//         $('.nome-da-modal').fadeOut();
//     }    
// });