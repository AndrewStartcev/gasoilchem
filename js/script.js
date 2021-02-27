// ############### jQuery code #########################
$(document).ready(function() {
	// === Гениратор SVG из img ===============
	$('.icon-svg img').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg');
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

	// === Мобильное меню ===============
	$('.header-burger').click(function () {
		$('.header-mobile').addClass('header-mobile_open');
	});
	$('.header-mobile__close').click(function () {
		$('.header-mobile').removeClass('header-mobile_open');
	});
	$(document).mouseup(function (e) {
		var div = $(".header-mobile__body");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header-mobile').removeClass('header-mobile_open');
		}
	});

});
// ############### END jQuery code #####################
//======================================================
// ############### Vanile JavaScript ###################

// === Слайдер главного экрана на главной страницы =====
const homeSwiper = new Swiper('.home-slider', {
  speed: 400,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	navigation: {
    nextEl: '.home-slider__btn_next',
    prevEl: '.home-slider__btn_prev',
  },
	pagination: {
    el: '.home-slider__pagination',
    type: 'bullets',
		clickable: true,
  },
	keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});