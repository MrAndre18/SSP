let scrollPrev = 0;

// const startTicker = () => {
//   const ticker = $(".ticker");
//   let speed = 5;
//   let lastScrollPos = 0;
//   let timer;

//   const containers = $(ticker).find(".ticker-wrapper");

//   $(containers).each(function (index, container) {
//     const content = $(container).find(".ticker-content"),
//       elWidth = content.outerWidth();

//     console.log("content: ", content);

//     let clone = content.clone(true),
//       progress = 1;

//     $(container).append(clone);

//     const loop = () => {
//       progress = progress - speed;

//       if (progress <= elWidth * -1) progress = 0;

//       $(container).css(
//         "transform",
//         `translateX(${progress}px)`
//       );

//       window.requestAnimationFrame(loop);
//     };

//     loop();
//   });

//   $(window).on("scroll", () => {
//     const maxScrollValue = 10;
//     const newScrollPos = window.scrollY;
//     let scrollValue = newScrollPos - lastScrollPos;

//     if (scrollValue > maxScrollValue) scrollValue = maxScrollValue;
//     else if (scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;

//     speed = scrollValue;

//     clearTimeout(timer);
//     timer = setTimeout(handleSpeedClear, 10);
//   });

//   function handleSpeedClear() {
//     speed = 5;
//   }
// };

// startTicker();

$(window).on("scroll", () => {
  changeHeaderBg();
});

const changeHeaderBg = () => {
  const header = $(".header");

  if ($(window).scrollTop() > $(window).height() / 15) {
    header.addClass("scrolled");
  } else header.removeClass("scrolled");

  if (
    $(window).scrollTop() > $(window).height() / 3 &&
    $(window).scrollTop() > scrollPrev &&
    !header.hasClass("active")
  )
    header.addClass("out");
  else header.removeClass("out");

  scrollPrev = $(window).scrollTop();
};
