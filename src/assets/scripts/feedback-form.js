$(".feedback .more-btn").on("click", (e) => {
  e.preventDefault();

  const feedback = $(".feedback"),
    submitBtn = $(feedback).find(".submit-btn"),
    title = $(feedback).find(".feedback__title"),
    form = $(feedback).find(".feedback__form"),
    name = $(form).find(".feedback-name"),
    email = $(form).find(".feedback-email"),
    phone = $(form).find(".feedback-phone"),
    message = $(form).find("textarea[name=message]"),
    agree = $(feedback).find("input[name=agree]");

  if ($(feedback).hasClass("sended")) {
    $(name).find("input[name=name]").val("");
    $(email).find("input[name=email]").val("");
    $(phone).find("input[name=phone]").val("");
    $(message).val("");
    $(agree).prop("checked", "");

    $(feedback).removeClass("sended");
    $(submitBtn).toggleClass("active");
    $(title).toggleClass("active");

    return true;
  }
  
  let error = false
  
  $(feedback).removeClass("sended");

  $(name).find(".error").removeClass("active");
  $(email).find(".error").removeClass("active");
  $(phone).find(".error").removeClass("active");
  $(agree).siblings("label").find(".error").removeClass("active");

  if (
    $(name).find("input[name=name]").attr("required") &&
    !$(name).find("input[name=name]").val()
  ) {
    $(name).find(".error").addClass("active");
    error = true;
  }

  if (
    $(email).find("input[name=email]").attr("required") &&
    !$(email).find("input[name=email]").val()
  ) {
    $(email).find(".error").addClass("active");
    error = true;
  }

  if (
    $(phone).find("input[name=phone]").attr("required") &&
    !$(phone).find("input[name=phone]").val()
  ) {
    $(phone).find(".error").addClass("active");
    error = true;
  }

  if (
    $(agree).attr("required") &&
    !$(agree).prop("checked")
  ) {
    $(agree).siblings("label").find(".error").addClass("active");
    error = true;
  }

  if (!error) {
    $(feedback).addClass("sended");
    $(submitBtn).toggleClass("active");
    $(title).toggleClass("active");
    
    return true;
  }
});
