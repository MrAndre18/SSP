// /* src/app.js */
import AOS from 'aos';
import Rellax from 'rellax';
import Sticky from 'sticky-js';
// import Swiper from 'swiper/swiper-bundle.min';
import 'velocity-animate';
// import './assets/scripts/backend.js';
// import './assets/scripts/map.js';
// import './assets/scripts/tab-nav.js';
import 'jquery';

// Styles
import 'Styles/_app.scss';

$(document).ready(() => {
  require("Scripts/convert-svg");
  require("Scripts/sliders");
});

// $(document).ready(() => {
// 	const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// 	require('Scripts/sliders');

// 	require('Scripts/header');
// 	require('Scripts/showMore');
// 	require('Scripts/filtering');
// 	require('Scripts/select');
// 	require('Scripts/popup');
// 	require('Scripts/ref');

// 	if (screenWidth > 1150 && $('.sticky').length) {
// 		const sticky = new Sticky('.sticky');
// 	}

// 	$('.backLink').mouseover(function () {
// 		const getBtnWidth = $(this).width();
// 		const getArrWidth = $(this).find('.nextBlock--ico').width();
// 		$(this).find('.nextBlock--ico').css('left', -(getBtnWidth / 2 - getArrWidth * 2.5));
// 	}).mouseleave(function () {
// 		$(this).find('.nextBlock--ico').css('left', 0);
// 	});

// 	require('Scripts/input');
// 	require('Scripts/server');
// });

// // MAIN PAGE: loader

// $(() => {
// 	const loaderCounter = $('.loader span');
// 	const loaderLayer = $('.loader__layer');

// 	const getMainUrl = window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/index.html';
// 	console.log(getMainUrl);

// 	if (process.env.NODE_ENV === 'production' || $('.summerdream').length) {
// 		setTimeout(function () {
// 			window.scrollTo(0, 0);
// 		}, 200);
// 	}


// 	if ($('.summerdream').length) {
// 		$('.index-loader').css('display', 'none');
// 		$('body').css('overflow', 'hidden');


// 		// параметры прелоадера
// 		const
// 			// информация об изображениях
// 			img = {
// 				elem: $('img'),
// 				count: $('img').length
// 			};
// 		// информация о загрузке изображений
// 		const load = {
// 			counter: 0,
// 			startTime: null,
// 			endTime: null,
// 			time: null,
// 			progress: null,
// 			TAIL: {
// 				MIN_TIME: 200,
// 				MAX_TIME: 500,
// 				PARTS: 5,
// 				BREAKPOINT: 0.6 + 0.2 * Math.random()
// 			}
// 		};

// 		// загрузка одного изображения (тэг img)
// 		img.elem.on('load', () => {
// 			load.counter++;

// 			if (!load.startTime) {
// 				load.startTime = (new Date()).getTime();
// 			}

// 			load.progress = load.counter / img.count;
// 			load.progress = (load.progress < load.TAIL.BREAKPOINT) ? load.progress : load.TAIL.BREAKPOINT;

// 			preloaderUpdate(load.progress * 0.5);
// 		});

// 		// загрузка всей страницы (всех изображений)
// 		$(window).on('load', () => {
// 			load.progress = (load.progress <= 0) ? load.TAIL.BREAKPOINT : load.progress;

// 			if (load.progress >= 1) {
// 				preloaderClose();
// 			} else {
// 				load.endTime = (new Date()).getTime();

// 				load.time = load.endTime - load.startTime;
// 				load.time = (load.time > 0) ? load.time : 0;

// 				const tail = {
// 					time: null,
// 					partCounter: 0,
// 					partTime: null,
// 					interval: null
// 				};

// 				tail.time = (load.time / load.progress) * (1 - load.progress);
// 				tail.time = (tail.time < load.TAIL.MAX_TIME) ? ((tail.time < load.TAIL.MIN_TIME) ? load.TAIL.MIN_TIME : tail.time) : load.TAIL.MAX_TIME;

// 				tail.partCounter = 0;
// 				tail.partTime = tail.time / load.TAIL.PARTS;
// 				tail.interval = setInterval(() => {
// 					tail.partCounter++;

// 					if (tail.partCounter < load.TAIL.PARTS) {
// 						preloaderUpdate(load.progress + (1 - load.progress) / load.TAIL.PARTS * tail.partCounter);
// 					} else {
// 						preloaderClose();

// 						clearInterval(tail.interval);
// 					}
// 				}, tail.partTime);
// 			}
// 		});

// 		// обновление прелоадера (отображение прогресса)
// 		function preloaderUpdate(loadProgress) {
// 			const loadProgressPercent = Math.round(loadProgress * 100);

// 			loaderCounter.text(loadProgressPercent);
// 			loaderLayer.css('width', loadProgressPercent + '%');
// 		}

// 		// закрытие прелоадера
// 		function preloaderClose() {
// 			$('.index-loader').css('display', '');
// 			loaderCounter.text('100');
// 			loaderLayer.css('width', '100%');


// 			// OLD CODE START

// 			$('body').css('overflow', 'visible');
// 			$('.summerdream').addClass('hidden');

// 			setTimeout(() => {
// 				$('.fullpage-block').addClass('active');
// 				$('.summerdream').addClass('hideIt');
// 				$('.fullpage-desc span:first-child').addClass('active');
// 				setTimeout(() => {
// 					$('.fullpage-desc span:nth-child(3)').addClass('active');
// 					setTimeout(() => {
// 						$('.fullpage-desc span:last-child').addClass('active');
// 					}, 300);
// 				}, 300);
// 			}, 500);

// 			setTimeout(() => {
// 				AOS.init({ offset: 50 });
// 			}, 500);

// 			if ($('.rellax').length) {
// 				// eslint-disable-next-line no-new
// 				new Rellax('.rellax');
// 			}

// 			// OLD CODE END
// 		}


// 	} else {
// 		$('body').css('overflow', 'hidden');

// 		setTimeout(() => {
// 			$('.loading').addClass('hideIt');
// 			$('body').css('overflow', 'visible');

// 			AOS.init({ offset: 50 });

// 			if ($('.rellax').length) {
// 				// eslint-disable-next-line no-new
// 				new Rellax('.rellax');
// 			}
// 		}, 500);
// 	}
// });

// {
// 	$(() => {
// 		if ($('.fullpage-block').length !== 0) {
// 			if ($(window).scrollTop() < 1) {
// 				$('.fullpage-block').addClass('fullpage-block--start');
// 			}

// 			$(window).one('scroll', updateFullpageBlock);

// 			function updateFullpageBlock() {
// 				if ($(window).scrollTop() >= 1) {
// 					$('.fullpage-block').removeClass('fullpage-block--start');
// 				} else {
// 					$('.fullpage-block').addClass('fullpage-block--start');
// 				}

// 				const timeout = setTimeout(() => {
// 					if ($(window).scrollTop() >= 1) {
// 						$('.fullpage-block').removeClass('fullpage-block--start');
// 					} else {
// 						$('.fullpage-block').addClass('fullpage-block--start');
// 					}

// 					$(window).one('scroll', updateFullpageBlock);

// 					clearTimeout(timeout);
// 				}, 250);
// 			}
// 		}
// 	});
// }
