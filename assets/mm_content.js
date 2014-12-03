$(document).ready(function(){
	$('.mm_slider-responsive').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 3,
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: false
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: false
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false
			  }
			},
			{
			  breakpoint: 320,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false
			  }
			}
		]
	});
});