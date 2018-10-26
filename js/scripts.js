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
  }
}

//Slide Show

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slideGroup");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length} ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Arrays for build a bag

let bag = [];
let ribbon = [];
let items = [];

//Constructor for items

class item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}


//Bag Designs

const birthdayPartyBag = new item("Birthday Party Bag", 0.15);
const camoDrawstringBag = new item("Camouflage Drawstring Bag", 1.25);
const canvasToteBag = new item("Canvas Tote Bag", 1.00);
const chevronBag = new item("Chevron Bag", 0.15);
const confettiBag = new item("Confetti Bag", 0.15);
const dotsBag = new item("Dots Bag", 0.15);
const flowerBag = new item("Flower Bag", 0.15);
const halloweenAssortment = new item("Halloween assortment", 0.15);
const neonNetBackpackLarge = new item("Neon Net Backpack Large", 1.50);
const retroBag = new item("Retro Bag", 0.15);
const sportsBag = new item("Sports Bag", 0.15);
const sportsDrawstringBagLarge = new item("Sports Drawstring Bag Large", );
const starsBag = new item("Stars Bag", 0.15);


//Ribbons

const noRibbon = new item("No Ribbon", 0.00);
const orangeRibbon = new item("Orange Ribbon", 0.50);
const pinkRibbon = new item("Pink Ribbon", 0.50);
const redRibbon = new item("Red Ribbon", 0.50);
const yellowRibbon = new item("Yellow Ribbon", 0.50);

//Items
/*
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
const x = new item("", );
*/
