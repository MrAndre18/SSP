let scrollPrev = 0;

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
    $(window).scrollTop() > scrollPrev
  )
    header.addClass("out");
  else header.removeClass("out");

  scrollPrev = $(window).scrollTop();
};
