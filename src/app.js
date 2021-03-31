// /* src/app.js */
import "jquery";
import AOS from "aos";
import Sticky from "sticky-js";
import "velocity-animate";
// import './assets/scripts/backend.js';
// import "./assets/scripts/initMap.js";
// import './assets/scripts/tab-nav.js';

// Styles
import "Styles/_app.scss";

$(() => {
  require("Scripts/header");
  require("Scripts/feedback-form");
  require("Scripts/sliders");
  require("Scripts/convert-svg");
  require("Scripts/scroll");
  require("Scripts/marquee");
  require("Scripts/events");
  require("Scripts/contacts");
  require("Scripts/cases");
  require("Scripts/practices");
  // require("Scripts/gMapsAPI");
  // require("Scripts/initMap");
});

// MAIN PAGE: loader

$(() => {
  const loader = $(".loader"),
    progress = loader.find(".loader-progress"),
    circle = progress.find(".loader-progress__circle"),
    radius = +circle.attr("r"),
    circumference = 2 * Math.PI * radius;

  if (process.env.NODE_ENV === "production" || !loader.hasClass("hidden")) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 200);
  }

  if (!loader.hasClass("hidden")) {
    // $(".loaded-content").css("display", "none");
    $("body").css("overflow", "hidden");
    circle.css("strokeDasharray", `${circumference} ${circumference}`);
    circle.css("strokeDashoffset", circumference);

    // параметры прелоадера
    const // информация об изображениях
      img = {
        elem: $("img"),
        count: $("img").length,
      };
    // информация о загрузке изображений
    const load = {
      counter: 0,
      startTime: null,
      endTime: null,
      time: null,
      progress: null,
      TAIL: {
        MIN_TIME: 200,
        MAX_TIME: 500,
        PARTS: 5,
        BREAKPOINT: 0.6 + 0.2 * Math.random(),
      },
    };

    // загрузка одного изображения (тэг img)
    img.elem.on("load", () => {
      load.counter++;

      if (!load.startTime) {
        load.startTime = new Date().getTime();
      }

      load.progress = load.counter / img.count;
      load.progress =
        load.progress < load.TAIL.BREAKPOINT
          ? load.progress
          : load.TAIL.BREAKPOINT;

      preloaderUpdate(load.progress * 0.5);
    });

    // загрузка всей страницы (всех изображений)
    $(window).on("load", () => {
      load.progress = load.progress <= 0 ? load.TAIL.BREAKPOINT : load.progress;

      if (load.progress >= 1) {
        preloaderClose();
      } else {
        load.endTime = new Date().getTime();

        load.time = load.endTime - load.startTime;
        load.time = load.time > 0 ? load.time : 0;

        const tail = {
          time: null,
          partCounter: 0,
          partTime: null,
          interval: null,
        };

        tail.time = (load.time / load.progress) * (1 - load.progress);
        tail.time =
          tail.time < load.TAIL.MAX_TIME
            ? tail.time < load.TAIL.MIN_TIME
              ? load.TAIL.MIN_TIME
              : tail.time
            : load.TAIL.MAX_TIME;

        tail.partCounter = 0;
        tail.partTime = tail.time / load.TAIL.PARTS;
        tail.interval = setInterval(() => {
          tail.partCounter++;

          if (tail.partCounter < load.TAIL.PARTS) {
            preloaderUpdate(
              load.progress +
                ((1 - load.progress) / load.TAIL.PARTS) * tail.partCounter
            );
          } else {
            preloaderClose();

            clearInterval(tail.interval);
          }
        }, tail.partTime);
      }
    });

    // обновление прелоадера (отображение прогресса)
    function preloaderUpdate(loadProgress) {
      const loadProgressPercent = Math.round(loadProgress * 100);

      const offset =
        circumference - (loadProgressPercent / 100) * circumference;
      circle.css("strokeDashoffset", offset);
    }

    // закрытие прелоадера
    function preloaderClose() {
      $(".loaded-content").css("display", "block");
      circle.css("strokeDashoffset", 0);

      $("body").css("overflow", "visible");

      setTimeout(() => {
        $(".loader").addClass("hidden");



        const fullpageBullets = $(".fulpage__slider-bullet"),
          fullpageBulletsCircle = fullpageBullets.find(
            ".bullet-progress__circle"
          );
        $(fullpageBullets[0]).addClass("fulpage__slider-bullet-filling");
        $(fullpageBulletsCircle[0]).css("strokeDashoffset", 0);

        AOS.init({
          offset: 50,
          duration: 600,
          easing: "ease-in-out-quad",
          delay: 100,
          once: true,
        });
        
      }, 500);
    }
  } else {
    $("body").css("overflow", "hidden");

    setTimeout(() => {
      $("body").css("overflow", "visible");

      AOS.init({
        offset: 50,
        duration: 600,
        easing: "ease-in-out-quad",
        delay: 100,
        once: true,
      });

    }, 500);
  }
});
