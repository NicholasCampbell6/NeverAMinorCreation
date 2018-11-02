// Arrays for build a bag

var bagChoice = [];
var ribbonChoice = [];
var itemsChoice = [];

//varructor for items

class item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//Bag Designs

var birthdayPartyBag = new item("Birthday Party Bag", 0.15);
var camoDrawstringBag = new item("Camouflage Drawstring Bag", 1.25);
var canvasToteBag = new item("Canvas Tote Bag", 1.00);
var chevronBag = new item("Chevron Bag", 0.15);
var confettiBag = new item("Confetti Bag", 0.15);
var dotsBag = new item("Dots Bag", 0.15);
var flowerBag = new item("Flower Bag", 0.15);
var halloweenAssortment = new item("Halloween assortment", 0.15);
var neonNetBackpackLarge = new item("Neon Net Backpack Large", 1.50);
var retroBag = new item("Retro Bag", 0.15);
var sportsBag = new item("Sports Bag", 0.15);
var sportsDrawstringBagLarge = new item("Sports Drawstring Bag Large", 1.50);
var starsBag = new item("Stars Bag", 0.15);

//Ribbons

var noRibbon = new item("No Ribbon", 0.00);
var orangeRibbon = new item("Orange Ribbon", 0.50);
var pinkRibbon = new item("Pink Ribbon", 0.50);
var redRibbon = new item("Red Ribbon", 0.50);
var yellowRibbon = new item("Yellow Ribbon", 0.50);

//Items

var candy10pieces = new item("10 Pieces of Candy", 0.95);
var carBalloonRacer = new item("Car Balloon Racer", 0.75);
/*
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
var x = new item("", );
*/

var empty = new item("nothing", 0);

//Functions for Build a Bag



function bagTotal() {
  if (bagChoice.length === 0){
    bagChoice.push(empty);
  }
  if (ribbonChoice.length === 0){
    ribbonChoice.push(empty);
  }
  if (itemsChoice.length === 0){
    itemsChoice.push(empty);
  }
  var bagChoiceTotal = bagChoice[0].price;
  var ribbonChoiceTotal = ribbonChoice[0].price;
  function itemsChoiceTotal() {
    for (i = 0; i<itemsChoice.length; i++) {
      var prices = [];
      prices.push(itemsChoice[i].price);
      return prices.reduce(reducer);
    }
  };
  total = bagChoiceTotal + ribbonChoiceTotal + itemsChoiceTotal();
  var totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML = "$" + total.toFixed(2);
}



function addBag(n) {
  bagChoice.push(n);
  if (bagChoice.length > 1) {
    bagChoice.shift();
  }
  var showBag = document.getElementById("bagChoice");
  showBag.innerHTML = n.name + " - $" + n.price.toFixed(2);
  bagTotal();
}

 function addRibbon(n) {
  ribbonChoice.push(n)
  if (ribbonChoice.length > 1) {
    ribbonChoice.shift();
  }
  var showRibbon = document.getElementById("ribbonChoice");
  showRibbon.innerHTML = n.name + " - $" + n.price.toFixed(2);
  bagTotal();
}

 function addItems(n) {
  itemsChoice.push(n)

  var showItems = document.getElementById("itemsChoice");
  showItems.innerHTML = n.name + " - $" + n.price;
  bagTotal();
}

var reducer = (accumulator, currentValue) => accumulator + currentValue;
