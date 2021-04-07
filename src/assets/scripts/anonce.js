if ($(".anonce").width()) {
  const anonce = $(".anonce"),
    anonceTrigger = $(anonce).find(".anonce__trigger"),
    anonceBlock = $(anonce).find(".anonce__block");

  $(anonce).removeClass("active");
  $(anonceBlock).slideUp(600);

  $(anonceTrigger).on("click", () => {
    if (anonce.hasClass("active")) {
      $(anonceBlock).slideUp(600);
      $(anonce).removeClass("active");
    } else {
      $(anonce).addClass("active");
      $(anonceBlock).slideDown(600);
    }
  });
}
