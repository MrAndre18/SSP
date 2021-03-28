if ($(".main.cases").width()) {
  const cases = $(".main.cases"),
    filter = $(cases).find(".cases__filter"),
    filterTabs = $(filter).find(".tab-btn"),
    filterDiscardBtn = $(filter).find(".cases__filter-discard");
  
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
