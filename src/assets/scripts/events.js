const eventsSubscribe = $(".events__subscribe-block"),
  filters = $(eventsSubscribe).find(".filter .filter__tabs .tab-btn"),
  filterDiscardBtn = $(".filter .filter__discard"),
  subscribeBtn = $(eventsSubscribe).find(".subscribe .more-btn"),
  subscribeAgree = $(eventsSubscribe).find(".subscribe input[name=agree]"),
  subscribeTitle = $(eventsSubscribe).find(".subscribe .subscribe-title"),
  agreeError = $(eventsSubscribe).find(".subscribe .error");

$(filters).on("click", (e) => {
  e.preventDefault();
  $(e.delegateTarget).toggleClass("active");
});

$(filterDiscardBtn).on("click", () => {
  $(filters).each(function (index, element) {
    $(element).removeClass("active");
  });
});

$(subscribeBtn).on("click", (e) => {
  e.preventDefault();

  if ($(eventsSubscribe).hasClass("subscribed")) {
    $(eventsSubscribe).removeClass("subscribed");
    $(subscribeTitle).toggleClass("active");
    $(".subscribe-btn").toggleClass("active");
    $(agreeError).removeClass("active");
    $(subscribeAgree).prop("checked", "");
  } else {
    if (!$(subscribeAgree).prop("checked")) $(agreeError).addClass("active");
    else {
      $(subscribeAgree).prop("checked", "");
      $(agreeError).removeClass("active");
      $(eventsSubscribe).addClass("subscribed");
      $(subscribeTitle).toggleClass("active");
      $(".subscribe-btn").toggleClass("active");
    }
  }
});
