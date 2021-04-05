if ($(".main.cases").width()) {
  const cases = $(".main.cases"),
    filter = $(cases).find(".cases__filter"),
    filterTrigger = $(cases).find(".cases__filter-trigger"),
    filterTabs = $(filter).find(".tab-btn"),
    filterDiscardBtn = $(filter).find(".cases__filter-discard");
  
  if ($(window).width() <= 768) {
    if (!$(filter).hasClass("active")) {
      $(filter).removeClass("active");
      $(filter).find(".cases__filter-block").slideUp(600);
    }

    $(filterTrigger).on("click", () => {
      if (filter.hasClass("active")) {
        $(filter).find(".cases__filter-block").slideUp(600);
        filter.removeClass("active");
      } else {
        filter.addClass("active");
        $(filter).find(".cases__filter-block").slideDown(600);
      }
    });
  } else {
    $(filter).find(".cases__filter-block").slideDown(600);
  }
  
  $(filterTabs).on("click", (e) => {
    e.preventDefault();
    $(e.delegateTarget).toggleClass("active");
  });

  $(filterDiscardBtn).on("click", () => {
    $(filterTabs).each(function (index, element) {
      $(element).removeClass("active");
    });
  });
}
