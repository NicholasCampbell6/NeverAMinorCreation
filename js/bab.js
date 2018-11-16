// Arrays for build a bag

var bagChoice = [];
var ribbonChoice = [];
var itemsChoice = [];

//Constructor for items

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
var cupAndBall = new item("Cup & Ball Game", .4);
var fingerBeams = new item("Finger Beams", .55);
var lipWhistle = new item("Lip Whistle", .45);
var miniBasketballGame = new item("Mini BasketBall Game", .4);
var miniFlyingSaucer = new item("Mini Flying Saucer", .35);
var neonChalkBoard = new item("Neon Chalk Board", .7);
var triangleGame = new item("Triangle Game", 1.7);
var beachBall = new item("Beach Ball", 1.5);
var airHead = new item("1 Air Head", .25);
var armyMen = new item("4 Army Men", .35);
var crayons = new item("Crayons", .35);
var gidBounceBall = new item("Glow in the Dark Bound Ball", .25);
var metalSlapBand = new item("Metal Slap Band", .6);

var empty = new item("nothing", 0);

//Functions for Build a Bag

function getSum(total, num) {
  return total + num;
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
  itemsChoice.push(n);

  var items = document.createElement("h5");
  var t = document.createTextNode(n.name + " - $" + n.price.toFixed(2))
  items.appendChild(t);
  document.getElementById("itemsChoice").appendChild(items);
  bagTotal();
}

function clearBag() {
  bagChoice.shift();
  document.getElementById("bagChoice").removeChild(document.getElementById("bagChoice").firstChild);
  bagTotal();
  addToCart();
}

function clearRibbon() {
  ribbonChoice.shift();
  document.getElementById("ribbonChoice").removeChild(document.getElementById("ribbonChoice").firstChild);
  bagTotal();
  addToCart();
}

function clearItems() {
  var choosenItems = document.getElementById("itemsChoice");
  while (choosenItems.firstChild) {
    choosenItems.removeChild(choosenItems.firstChild);
  }
  while (itemsChoice.length >= 1) {
    itemsChoice.shift();
  }
  bagTotal();
  addToCart();
}

var total;

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
  var prices = [];
  function itemsChoiceTotal() {
    for (i = 0; i<itemsChoice.length; i++) {
      prices.push(itemsChoice[i].price);
    }
  }
  itemsChoiceTotal();
  total = bagChoiceTotal + ribbonChoiceTotal + prices.reduce(getSum);
  var totalPrice = document.getElementById("pricePerBag");
  totalPrice.innerHTML = "$" + total.toFixed(2);
}

function addToCart () {
  var quantity = document.getElementById("BABSelector").value;
  var priceForAll = total * quantity;
  console.log(quantity);
  var cartPrice = document.getElementById("totalPrice");
  cartPrice.innerHTML = "$"+priceForAll.toFixed(2);
}

function showCart(){
  var cart = document.getElementsByClassName("cartDiv");
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}

function showCart(){
  var cart = document.querySelector(".cartDiv");
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
