import Swiper from "swiper/swiper-bundle.min";

const practicesSlider = new Swiper(".practices__slider", {
  loop: true,
  loopedSlides: 3,
  spaceBetween: 20,
  allowSlidePrev: false,
  watchOverflow: true,
  initialSlide: 0,
  speed: 600,
  simulateTouch: false,

  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const fullPageSlider = new Swiper(".fulpage__slider", {
  loop: true,
  loopedSlides: 3,
  effect: "fade",
  simulateTouch: false,

  autoplay: {
    delay: 5000,
  },
});
