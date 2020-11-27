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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL1xyXG5cclxudmFyIG15U3dpcGVyID0gbmV3IFN3aXBlcihcIi5pbmRleC1nYWxsZXJ5XCIsIHtcclxuICAvLyBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIuaW5kZXgtZ2FsbGVyeV9fbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5pbmRleC1nYWxsZXJ5X19wcmV2XCIsXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogXCIuaW5kZXgtZ2FsbGVyeSAuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICB9LFxyXG59KTtcclxuZnVuY3Rpb24gYWJvdXRNb2RhbE9wZW4oKSB7XHJcbiAgY29uc3QgbWFwTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xyXG4gIHJldHVybiBtYXBNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHdyaXRlVG9Vc01vZGFsT3BlbigpIHtcclxuICBjb25zdCBsb2dpbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cml0ZS10by11c1wiKTtcclxuICByZXR1cm4gbG9naW5Nb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TWVudUFjdGl2ZVBhZ2UoKSB7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuc2l0ZS1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWxpc3RfX2xpbmtcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvblBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICBBcnJheS5mcm9tKGxpbmtzKS5tYXAoKGxpbmspID0+IHtcclxuICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblxyXG4gICAgaWYgKGhyZWYgPT09IGN1cnJlbnRMb2NhdGlvblBhdGhuYW1lKSB7XHJcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tbGlzdF9fbGluay0tYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmluaXRNZW51QWN0aXZlUGFnZSgpO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcHJpY2VGcm9tID0gJChcIi5zaG9wLXJhbmdlLWZyb21cIik7XHJcbiAgY29uc3QgcHJpY2VUbyA9ICQoXCIuc2hvcC1yYW5nZS10b1wiKTtcclxuICAkKFwiI3NsaWRlci1yYW5nZVwiKS5zbGlkZXIoe1xyXG4gICAgcmFuZ2U6IHRydWUsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDUwMCxcclxuICAgIHZhbHVlczogWzc1LCAzMDBdLFxyXG4gICAgc2xpZGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgcHJpY2VGcm9tLnZhbCh1aS52YWx1ZXNbMF0pO1xyXG4gICAgICBwcmljZVRvLnZhbCh1aS52YWx1ZXNbMV0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBwcmljZUZyb20udmFsKCQoXCIjc2xpZGVyLXJhbmdlXCIpLnNsaWRlcihcInZhbHVlc1wiLCAwKSk7XHJcbiAgcHJpY2VUby52YWwoJChcIiNzbGlkZXItcmFuZ2VcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpKTtcclxufSk7XHJcblxyXG52YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1OS45Mzg4MzcsIDMwLjMyMzA1MyksXHJcbiAgICB6b29tOiAxNixcclxuICB9KTtcclxuXHJcbiAgdmFyIGljb25zID0ge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICBpY29uOiBcIi9pbWcvaW5kZXgvbWFwLW1hcmtlci5wbmdcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgdmFyIGZlYXR1cmVzID0gW1xyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1OS45Mzg4MzcsIDMwLjMyMzA1MyksXHJcbiAgICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiBmZWF0dXJlc1tpXS5wb3NpdGlvbixcclxuICAgICAgaWNvbjogaWNvbnNbZmVhdHVyZXNbaV0udHlwZV0uaWNvbixcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
