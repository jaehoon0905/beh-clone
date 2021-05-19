// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $("player").height();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  console.error("실제이동값", lastScrollTop - st, "델타값", delta);

  if (lastScrollTop - st < -200) {
    // Scroll Down
    console.warn(
      "Scroll down!",
      st,
      ">",
      lastScrollTop,
      "&&",
      st,
      ">",
      navbarHeight
    );
    $(".player").removeClass("js-nav-down").addClass("js-nav-up");
  } else if (lastScrollTop - st > 200) {
    // Scroll Up

    console.warn(
      "Scroll up!",
      st + $(window).height(),
      "<",
      $(document).height()
    );
    $(".player").removeClass("js-nav-up").addClass("js-nav-down");
  }

  /*
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    console.warn(
      "Scroll down!",
      st,
      ">",
      lastScrollTop,
      "&&",
      st,
      ">",
      navbarHeight
    );
    $("player").removeClass("js-nav-down").addClass("js-nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      console.warn(
        "Scroll up!",
        st + $(window).height(),
        "<",
        $(document).height()
      );
      $("player").removeClass("js-nav-up").addClass("js-nav-down");
    }
  }
*/
  lastScrollTop = st;
  return;
}
