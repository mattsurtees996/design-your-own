function Drink(type, occasion, message) {
  this.type = type;
  this.occasion = occasion;
  this.message = message;
  //   Drink.allDrinks.push(this);
}

const bottle = document.getElementById("bottle");
const occasion = document.getElementById("occasion");
const message = document.getElementById("message-box");

// let drinks = [new Drink("gin", "birthday", "message")];

// Drink.allDrinks = [];

const form = document.getElementById("design-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let data = {
    bottle: bottle.value,
    occasion: occasion.value,
    message: message.value,
  };

  updateUI(data);
  localStorage.setItem("drink", JSON.stringify(data));
});

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  const data = JSON.parse(localStorage.getItem("drink"));

  updateUI(data);
});

function updateUI(icons) {
  document.getElementById("<YOUR IMAGE BOTTLE THING>");
  document.getElementById("label");
  // Set the values from data
}

// // localStorage.getItem("bottle");
// // console.log(localStorage);
