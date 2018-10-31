// Arrays for build a bag

var bagChoice = [];
var ribbonChoice = [];
let itemsChoice = [];

//Constructor for items

class item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//Bag Designs

var birthdayPartyBag = new item("Birthday Party Bag", 0.15);
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
const sportsDrawstringBagLarge = new item("Sports Drawstring Bag Large", 1.50);
const starsBag = new item("Stars Bag", 0.15);

//Ribbons

const noRibbon = new item("No Ribbon", 0.00);
var orangeRibbon = new item("Orange Ribbon", 0.50);
const pinkRibbon = new item("Pink Ribbon", 0.50);
const redRibbon = new item("Red Ribbon", 0.50);
const yellowRibbon = new item("Yellow Ribbon", 0.50);

//Items

const candy10pieces = new item("10 Pieces of Candy", 0.95);
const carBalloonRacer = new item("Car Balloon Racer", 0.75);
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
*/

//Functions for Build a Bag

function addBag(n) {
  bagChoice.push(n.price);
  if (bagChoice.length > 1) {
    bagChoice.shift();
  }
}

 function addRibbon(n) {
  ribbonChoice.push(n.price)
  if (ribbonChoice.length > 1) {
    ribbonChoice.shift();
  }
  console.log(ribbonChoice);
}

 function addItems(n) {
  itemsChoice.push(n.price)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function bagTotal() {
  total = bagChoice.reduce(reducer) + ribbonChoice.reduce(reducer) + itemsChoice.reduce(reducer);
  return total;
}
