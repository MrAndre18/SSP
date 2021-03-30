if ($(".main.practices").width()) {
  const practices = $(".main.practices"),
    services = $(practices).find(".practices__services"),
    triggers = $(services).find(".accordion-item__trigger");
  
  $(".accordion-item").each(function (index, element) {
    if (!$(element).hasClass("active")) {
      $(element).removeClass("active");
      $(element).find(".accordion-item__content").slideUp(600);
    }
  });
  
  $(triggers).on("click", (e) => {
    const parent = $(e.delegateTarget).parent();

    if (parent.hasClass("active")) {
      $(e.delegateTarget).next(".accordion-item__content").slideUp(600);
      parent.removeClass("active");
    } else {
      $(".accordion-item").removeClass("active");
      $(".accordion-item").find(".accordion-item__content").slideUp(600);
      parent.addClass("active");
      $(e.delegateTarget).next(".accordion-item__content").slideDown(600);
    }
  })
}
