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
