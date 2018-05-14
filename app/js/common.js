// $(function() {

// 	$('body').fadeOut(1500);

// });
$(document).ready(function() {

	// slick
	$('.js-feedback').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		dots: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		]
	});

	// $('.js-feedback').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	dots: true
	// });









});
