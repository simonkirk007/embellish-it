titleslist = []
let titles = document.querySelectorAll(".full-unstyled-link")

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
  titleslist.push(title.textContent)
}
console.log(titleslist)


$(".openbtn").click(function () {
  $("#myNav").addClass("active");
});

$(".closebtn").click(function () {
  $("#myNav").removeClass("active");
});

$(".search a").click(function () {
  $(".search-bar").addClass("active");
});

$(".search-close-ic a").click(function () {
  $(".search-bar").removeClass("active");
});

$(".product-main-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-detail-btnslider",
});
$(".product-detail-btnslider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-main-img-slider",
});
$(".side-card-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".dec.qtybutton").on("click", function () {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find("input").val(newVal);
});

$(".inc.qtybutton").on("click", function () {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  var newVal = parseFloat(oldValue) + 1;

  $button.parent().find("input").val(newVal);
});

// Initialize Wow
new WOW().init();



// Quantity Counter
const add = document.getElementById("add")
const quantity = document.getElementById("quantity")
var quantityNum = 0
const minus = document.getElementById("minus")
add.addEventListener("click", () => {
  quantityNum += 1
  quantity.value = quantityNum
  minus.style.pointerEvents = "all"
})
minus.addEventListener("click", () => {
  quantityNum -= 1
  quantity.value = quantityNum
  if (quantityNum==0){
    minus.style.pointerEvents = "none"
  }
  else{
    minus.style.pointerEvents = "all"
  }
})