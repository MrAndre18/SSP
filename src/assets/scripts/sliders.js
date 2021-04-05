import Swiper from "swiper/swiper-bundle.min";

const circles = $(".bullet-progress__circle"),
  radius = +$(circles[0]).attr("r"),
  circumference = 2 * Math.PI * radius;

initialCircles(circles);

const clientsSliderSettings = {
  loop: true,
  spaceBetween: 20,
  watchOverflow: true,
  speed: 600,
  slidesPerView: 8,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 5,
    },
    960: {
      slidesPerView: 6,
    },
    1120: {
      slidesPerView: 7,
    },
    1280: {
      slidesPerView: 8,
    },
  },

  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
};

const clientsSlider = new Swiper(
  ".about-company__clients-slider",
  clientsSliderSettings
);

const practicesSlider = new Swiper(".practices__slider", {
  loop: true,
  loopedSlides: 3,
  spaceBetween: 20,
  allowSlidePrev: false,
  watchOverflow: true,
  initialSlide: 0,
  speed: 1000,
  simulateTouch: false,

  breakpoints: {
    768: {
      simulateTouch: true,
      allowSlidePrev: true,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const fullPageSliderSettings = {
  loop: true,
  effect: "fade",
  speed: 600,
  simulateTouch: false,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const fullPageSlider = new Swiper(".fulpage__slider", fullPageSliderSettings);

fullPageSlider.on("slideChangeTransitionStart", function () {
  activateBullet(fullPageSlider.realIndex);
});

$(".fulpage__slider-bullet").on("click", (e) => {
  let bullet;
  if ($(e.target).hasClass("fulpage__slider-bullet")) {
    bullet = e.target;
  } else {
    bullet = e.target.closest(".fulpage__slider-bullet");
  }

  const index = $(bullet).data("bulletIndex");
  activateBullet(index);
});

function activateBullet(slideIndex) {
  $(".fulpage__slider-bullet").each(function (index, element) {
    if (index === slideIndex) {
      $(element).addClass("fulpage__slider-bullet-active");
      $(element).addClass("fulpage__slider-bullet-filling");
      setTimeout(() => {
        fillingCircle($(element).find(".bullet-progress__circle"));
      }, 600);
      return;
    }
    if (
      $(element).hasClass("fulpage__slider-bullet-active") ||
      $(element).hasClass("fulpage__slider-bullet-filling")
    ) {
      $(element).removeClass("fulpage__slider-bullet-active");
      $(element).removeClass("fulpage__slider-bullet-filling");
      setTimeout(() => {
        clearCircle($(element).find(".bullet-progress__circle"));
      }, 600);
    }
  });

  switchSlide(slideIndex);
}

function switchSlide(currentSlide) {
  fullPageSlider.slideToLoop(currentSlide, 600, true);
  fillingCircle();
}

function initialCircles(circles) {
  $(circles).each(function (index, circle) {
    $(circle).css("strokeDasharray", `${circumference} ${circumference}`);
    $(circle).css("strokeDashoffset", circumference);
  });
}

function clearCircle(circle) {
  $(circle).css("strokeDashoffset", circumference);
}

function fillingCircle(circle) {
  $(circle).css("strokeDashoffset", 0);
}
