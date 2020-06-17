//jQuery
window.$ = window.jQuery = require("jquery");

// Script Here
$(document).ready(function () {
  // smooth scroll
  $(".navbar a").click(function (e) {
    var tujuan = $(this).attr("href");
    var elemenTujuan = $(tujuan);

    $(document.body).stop().animate(
      {
        scrollTop: elemenTujuan.offset().top,
      },
      1000,
      "swing"
    );
  });

  // scrolling page
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var showPoint = $(".show-gotop").offset().top;

    // toggle show gotop button
    if (wScroll >= showPoint) {
      $("#goTop").addClass("show");
    } else {
      $("#goTop").removeClass("show");
    }
  });
});
