// toggle btn dashboard
{
  let dashBtn = document.getElementById("dashboard_toggle");
  let sideBar = document.getElementById("mobile_nav");

  dashBtn.addEventListener("click", function () {
    sideBar.classList.toggle("showNav");
    this.classList.toggle("activeToggle");
  });
}

// dynamic year

let socket = document.getElementById("socket_year");
let date = new Date();
let dynamicYear = date.getFullYear();
socket.innerHTML = dynamicYear;

// magnific popup

$(".video_popup_btn").magnificPopup({
  type: "iframe",
});

// stciky header

{
  let mainHeader = document.getElementById("myHeader");
  let sticky = mainHeader.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > sticky) {
      mainHeader.classList.add("sticky");
    } else {
      mainHeader.classList.remove("sticky");
    }
  });
}

// slick slider

$(".home_banner_slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  fade: true,
  cssEase: "linear",
  autoplay: true,
});

// our cousre

// slick slider

$(document).ready(function () {
  $(".our_course_wrapper").slick({
    dots: false,
    autoplay: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    speed: 1000,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          items: 1,
        },
      },
    ],
  });
});

// partner slider

$(document).ready(function () {
  $(".partner_wrapper").slick({
    dots: false,
    autoplay: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          items: 1,
        },
      },
    ],
  });
});
