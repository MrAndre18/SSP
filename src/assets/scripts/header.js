if ($(".header").width()) {
  const header = $(".header"),
    burger = $(header).find(".header__burger");

  $(burger).on("click", () => {
    header.toggleClass("active");
  })
}
