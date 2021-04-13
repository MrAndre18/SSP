if ($(".anonce").width()) {
  const anonce = $(".anonce"),
    anonceTrigger = $(anonce).find(".anonce__trigger"),
    anonceBlock = $(anonce).find(".anonce__block"),
    zoomHideItem = $(anonce).find(".zoom-hide-item");

  $(zoomHideItem).each(function (index, item) {
    $(item).removeClass("show");
  });
  $(anonce).removeClass("active");
  $(anonceBlock).slideUp(600);

  $(anonceTrigger).on("click", () => {
    if (anonce.hasClass("active")) {
      $(zoomHideItem).each(function (index, item) {
        $(item).removeClass("show");
      });

      setTimeout(() => {
        $(anonceBlock).slideUp(600);
        $(anonce).removeClass("active");
      }, 900);
    } else {
      $(anonce).addClass("active");
      $(anonceBlock).slideDown(600);

      setTimeout(() => {
        $(zoomHideItem).each(function (index, item) {
          $(item).addClass("show");
        });
      }, 600);
    }
  });
}
