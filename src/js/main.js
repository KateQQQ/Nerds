// https://swiperjs.com/demos/

var mySwiper = new Swiper(".index-gallery", {
  // loop: true,
  navigation: {
    nextEl: ".index-gallery__next",
    prevEl: ".index-gallery__prev",
  },
  pagination: {
    el: ".index-gallery .swiper-pagination",
  },
});
function aboutModalOpen() {
  const mapModal = document.querySelector("#about");
  return mapModal.classList.toggle("visually-hidden");
}
function writeToUsModalOpen() {
  const loginModal = document.querySelector("#write-to-us");
  return loginModal.classList.toggle("visually-hidden");
}

function initMenuActivePage() {
  const links = document.querySelectorAll(
    ".site-navigation .navigation-list__link"
  );

  const currentLocationPathname = window.location.pathname;

  Array.from(links).map((link) => {
    const href = link.getAttribute("href");

    if (href === currentLocationPathname) {
      link.classList.add("navigation-list__link--active");
    }
  });
}
initMenuActivePage();

$(function () {
  const priceFrom = $(".shop-range-from");
  const priceTo = $(".shop-range-to");
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      priceFrom.val(ui.values[0]);
      priceTo.val(ui.values[1]);
    },
  });
  priceFrom.val($("#slider-range").slider("values", 0));
  priceTo.val($("#slider-range").slider("values", 1));
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(59.938837, 30.323053),
    zoom: 16,
  });

  var icons = {
    info: {
      icon: "/img/index/map-marker.png",
    },
  };

  var features = [
    {
      position: new google.maps.LatLng(59.938837, 30.323053),
      type: "info",
    },
  ];

  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
