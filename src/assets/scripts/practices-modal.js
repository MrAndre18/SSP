if ($(".practices-modal").width()) {
  const practicesModal = $(".practices-modal"),
    btnCloseHeader = $(practicesModal).find(".practices-modal_close"),
    btnCloseModal = $(practicesModal).find(".practices-modal__link");

  $(btnCloseModal).on("click", (e) => {
    e.preventDefault();
    practicesModal.removeClass("active");
  });

  $(btnCloseHeader).on("click", () => {
    practicesModal.removeClass("active");
    $(".header").toggleClass("active");
  });
}
