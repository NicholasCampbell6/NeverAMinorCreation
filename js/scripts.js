//Read more/less button

function readMore(x, y, z) {
  var dots = document.getElementById(x);
  var moreText = document.getElementById(y);
  var btnText = document.getElementById(z);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  };
};

//Slide Show

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
};

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slideGroup");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length} ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slides[slideIndex-1].style.display = "block";
};


function addToCart(name, pricePerBag, quantity){
  var quant = document.getElementById(quantity).value;
  var total = pricePerBag * quant;
  var cart = document.getElementById("cartBags");
  var z = document.createElement("h5");
  var x = document.createTextNode(name + " - $" + pricePerBag.toFixed(2) + " * " + quant + " = $" + total.toFixed(2));
  z.append(x);
  cart.appendChild(z);
}

function showCart(){
  var cart = document.querySelector(".cartDiv");
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
