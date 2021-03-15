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
  effect: "fade",
  speed: 700,
  simulateTouch: false,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // pagination: {
  //   el: ".fulpage__slider-pagination",
  //   type: "bullets",
  //   clickable: true,
  //   // renderBullet: function (index, className) {
  //   //   return (
  //   //     "<div class='fulpage__slider-bullet " +
  //   //     className +
  //   //     "'>" +
  //   //     "<span class='bullet-content'></span>" +
  //   //     "<svg class='bullet-progress' width='220' height='220'>" +
  //   //     "<circle class='bullet-progress__circle' stroke='#fff' stroke-width='1' cx='104' cy='104' r='102' fill='transparent'>" +
  //   //     "</circle>" +
  //   //     "</svg>" +
  //   //     "</div>"
  //   //   );
  //   // },
  // },
  // on: {
  //   afterInit: function () {
  //     setCircleFilling();
  //   },
  //   slideChangeTransitionStart: function () {
  //     setCircleFilling();
  //   },
  // },
});

$(".fulpage__slider-bullet").on('click', e => {
  let bullet;
  if ($(e.target).hasClass("fulpage__slider-bullet")) {
    bullet = e.target;
  } else {
    bullet = e.target.closest(".fulpage__slider-bullet");
  }

  const index = $(bullet).data("bulletIndex");
  console.log('index: ', index);

  fullPageSlider.slideToLoop(index, 300, true);
});

// function setCircleFilling() {
//   const bullets = $(".swiper-pagination-bullet");
//   $(bullets).each(function (index, bullet) {
//     if (!$(bullet).hasClass("swiper-pagination-bullet-active")) {
//       const progress = $(bullet).find(".bullet-progress"),
//         circle = progress.find(".bullet-progress__circle"),
//         radius = +circle.attr("r"),
//         circumference = 2 * Math.PI * radius;

//       circle.css("strokeDasharray", `${circumference} ${circumference}`);
//       circle.css("strokeDashoffset", circumference);
//     } else {
//       const activeBullet = $(".swiper-pagination-bullet-active"),
//         progress = activeBullet.find(".bullet-progress"),
//         circle = progress.find(".bullet-progress__circle"),
//         radius = +circle.attr("r"),
//         circumference = 2 * Math.PI * radius,
//         delay = 5000;

//       filingCircle(100, circumference, circle);
//     }
//   });
// }

// function filingCircle(percent, circumference, circle) {
//   const offset = circumference - (percent / 100) * circumference;
//   console.log("offset: ", offset);
//   circle.css("strokeDashoffset", offset);
//   console.log("circle: ", circle.css("strokeDashoffset"));
// }
