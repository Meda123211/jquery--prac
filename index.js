$(function () {
  "use strict";
  //calculate body padding top depend on navbar height
  //$("body").css("paddingTop", $(".navbar").innerHeight() - 0);
  //smoothly Scroll to element
  $(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  //Add active class on Navbar link and remove from sibilings
  $(".navbar li a").click(function () {
    // $(".navbar a").removeClass("active");
    //$(this).addClass("active");   or we can use the second one
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  $(window).scroll(function () {
    //Sync Navbar linnks with sections
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        var blockId = $(this).attr("id");
        $(".navbar li a").removeClass("active");

        $(".navbar li a[data-scroll='" + blockId + "']").addClass("active");
      }
    });

    //scroll TO top button
  });

  //pop up
  $(".show-popup").click(function () {
    $(".popup").fadeIn();
  });
  $(".popup").click(function () {
    $(this).fadeOut();
  });

  $(".popup .inner").click(function (e) {
    e.stopPropagation();
  });

  $(".popup .class").click(function (e) {
    e.stopPropagation();
    $(this).parentUntil(".popup").parent().fadeOut();
  });

  $(".from-left").hover(function () {
    $(this).find("span").eq(0).animate(
      {
        width: 0,
      },
      200
    );
  });
  //animated progress
  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress"),
      },
      1000,
      function () {
        $(this).text($(this).attr("data-progress"));
      }
    );
  });
});
