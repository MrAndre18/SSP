if ($(".header").width()) {
  const header = $(".header"),
    burger = $(header).find(".header__burger");

  $(burger).on("click", () => {
    header.toggleClass("active");
  })

  // if ($(".anonce").width() && $(".index-page").width()) {
  //   const anonce = $(".anonce");

  //   $(anonce).css("display", block);
  // }
}
