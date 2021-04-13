if ($(".practices-modal").width()) {
  const practicesModal = $(".practices-modal"),
    btnCloseHeader = $(practicesModal).find(".practices-modal_close"),
    btnCloseModal = $(practicesModal).find(".practices-modal__link"),
    zoomHideItem = $(practicesModal).find(".zoom-hide-item");

  $(btnCloseModal).on("click", (e) => {
    e.preventDefault();

    $(zoomHideItem).each(function (index, item) {
      $(item).removeClass("show");
    });

    setTimeout(() => {
      practicesModal.removeClass("active");
    }, 1200);
  });

  $(btnCloseHeader).on("click", () => {
    $(zoomHideItem).each(function (index, item) {
      $(item).removeClass("show");
    });

    setTimeout(() => {
      practicesModal.removeClass("active");
      $(".header").removeClass("active");
    }, 1200);
  });
}
