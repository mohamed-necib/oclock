let tl = new TimelineMax({ paused: true });

      tl.to(".nav-container", 1, {
        left: 0,
        ease: Expo.easeInOut,
      });

      tl.staggerFrom(
        ".menu > div",
        0.8,
        {
          y: 100,
          opacity: 0,
          ease: Expo.easeInOut,
        },
        "0.1",
        "-=0.4"
      );

      tl.reverse();

      $(document).on("click", ".menu-open", function () {
        tl.reversed(!tl.reversed());
      });
      $(document).on("click", ".menu-close", function () {
        tl.reversed(!tl.reversed());
      });

      $(document).ready(function () {
        $(".item-0").hover(
          function () {
            $(".nav-container").css("background-color", "#042940");
          },
          function () {
            $(".nav-container").css("background-color", "#dfe8e0");
          }
        );
        $(".item-1").hover(
          function () {
            $(".nav-container").css("background-color", "#005C53");
          },
          function () {
            $(".nav-container").css("background-color", "#dfe8e0");
          }
        );
        $(".item-2").hover(
          function () {
            $(".nav-container").css("background-color", "#9FC131");
          },
          function () {
            $(".nav-container").css("background-color", "#dfe8e0");
          }
        );
        $(".item-3").hover(
          function () {
            $(".nav-container").css("background-color", "#DBF227");
          },
          function () {
            $(".nav-container").css("background-color", "#dfe8e0");
          }
        );
        $(".item-4").hover(
          function () {
            $(".nav-container").css("background-color", "#D6D58E");
          },
          function () {
            $(".nav-container").css("background-color", "#dfe8e0");
          }
        );
      });