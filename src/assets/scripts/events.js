if ($(".main.events").width() || $(".main.event").width()) {
  const eventsSubscribe = $(".events__subscribe-block"),
    filters = $(eventsSubscribe).find(".filter .filter__tabs .tab-btn"),
    filterDiscardBtn = $(".filter .filter__discard"),
    subscribeBtn = $(eventsSubscribe).find(".subscribe .more-btn"),
    subscribeAgree = $(eventsSubscribe).find(".subscribe input[name=agree]"),
    email = $(eventsSubscribe).find(".subscribe input[name=email]"),
    subscribeTitle = $(eventsSubscribe).find(".subscribe .subscribe-title"),
    agreeError = $(eventsSubscribe).find(
      ".subscribe input[name=agree] + label .error"
    ),
    emailError = $(eventsSubscribe).find(
      ".subscribe input[name=email] + .error"
    );

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
      $(emailError).removeClass("active");
      $(subscribeAgree).prop("checked", "");
    } else {
      let error = false;

      if (!$(subscribeAgree).prop("checked")) {
        $(agreeError).addClass("active");
        error = true;
      }

      if (!$(email).val()) {
        $(emailError).addClass("active");
        error = true;
      }

      if (!error) {
        $(subscribeAgree).prop("checked", "");
        $(agreeError).removeClass("active");
        $(emailError).removeClass("active");
        $(eventsSubscribe).addClass("subscribed");
        $(subscribeTitle).toggleClass("active");
        $(".subscribe-btn").toggleClass("active");
      }
    }
  });
}
