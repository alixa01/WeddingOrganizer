$(document).ready(function () {
  //highlight navbar
  $(".targetElement").mouseenter(function () {
    $(this).addClass("highlighted");
  });

  $(".targetElement").mouseleave(function () {
    $(this).removeClass("highlighted");
  });
});

//slide
$(function () {
  $("[href*=\\#]:not([href=\\#]").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  });
});
