// /* src/app.js */
import "jquery";
import AOS from "aos";
import "velocity-animate";

// Styles
import "Styles/_app.scss";

// MAIN PAGE: loader

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
  require("Scripts/anonce");
  require("Scripts/practices-modal");
  require("Scripts/gMapsAPI");

  const loader = $(".loader"),
    progress = loader.find(".loader-progress"),
    circle = progress.find(".loader-progress__circle"),
    radius = +circle.attr("r"),
    circumference = 2 * Math.PI * radius;

  if (process.env.NODE_ENV === "production" || !loader.hasClass("hidden")) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  }

  if (!loader.hasClass("hidden")) {
    const loaderDuration = 1500;

    $("body").css("overflow", "hidden");

    circle.css("strokeDasharray", `${circumference} ${circumference}`);
    circle.css("strokeDashoffset", circumference);
    circle.css(
      "transition",
      `stroke-dashoffset ${loaderDuration}ms cubic-bezier(0.45, 0, 0.55, 1)`
    );
    circle.css("display", "block");
    
    // закрытие прелоадера
    function preloaderClose() {
      $(".loaded-content").css("visibility", "visible");
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
      }, loaderDuration);
    }

    setTimeout(() => {
      preloaderClose();
    }, 10);
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
