$(function(){
    $('.popup_link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.gallery_slider').slick({
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick_btn slick-prev"><img src="images/left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick_btn slick-next"><img src="images/right.svg" alt=""></button>',
	});
});