let createDate = new Date("Apr 8, 2021 12:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let diff = createDate - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(
    ".Demo"
  ).innerHTML = `${days}days : ${hours}hrs : ${mins}mins : ${sec}s`;
}, 1000);

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1200: {
      items: 3,
    },
  },
});

$(".hover-link a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      1500
    );
  }
});

$(document).ready(function () {
  $("#icon").click(function () {
    $("ul").toggleClass("show")
  })
})