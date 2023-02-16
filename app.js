function Drink(type, occasion, message) {
  this.type = type;
  this.occasion = occasion;
  this.message = message;
  Drink.allDrinks.push(this);
}

const bottle = document.getElementById("bottle");
const occasion = document.getElementById("occasion");
const message = document.getElementById("message-box");

// let drinks = [new Drink("gin", "birthday", "message")];

Drink.allDrinks = [];

const form = document.getElementById("design-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  new Drink(bottle.value, occasion.value, message.value);
  localStorage.setItem("allDrinksArray", JSON.stringify(Drink.allDrinks));
  // let data = {
  //   bottle: bottle.value,
  //   occasion: occasion.value,
  //   message: message.value,
  // };

  // updateUI(data);
  // localStorage.setItem("drink", JSON.stringify(data));
  updateUI();
});

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");

//   const data = JSON.parse(localStorage.getItem("allDrinksArray"));

//   updateUI(data);
// });

function updateUI() {
  const data = JSON.parse(localStorage.getItem("allDrinksArray"));

  const mainContainer = document.getElementById("label-container");
  mainContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let bottleLabel = document.createElement("div");

    if (data[i].type === "whisky") {
      bottleLabel.classList.add("whisky");
    } else if (data[i].type === "gin") {
      bottleLabel.classList.add("gin");
    } else {
      bottleLabel.classList.add("vodka");
    }

    // let drinkTypePara = document.createElement("p");
    // drinkTypePara.textContent = `${data[i].type}`;
    // bottleLabel.appendChild(drinkTypePara);

    let drinkOccasionPara = document.createElement("p");
    drinkOccasionPara.textContent = `${data[i].occasion}`;
    bottleLabel.appendChild(drinkOccasionPara);

    let drinkMessagePara = document.createElement("p");
    drinkMessagePara.textContent = `${data[i].message}`;
    bottleLabel.appendChild(drinkMessagePara);

    mainContainer.appendChild(bottleLabel);
  }

  let bottle = document.getElementById("bottle");
  bottle.value = "";
  let occasion = document.getElementById("occasion");
  occasion.value = "";
  let message = document.getElementById("message-box");
  message.value = "";

  // const drinkType = document.getElementById("drink-type");
  // const drinkOccasion = document.getElementById("drink-occasion");
  // const drinkMessage = document.getElementById("drink-message");

  // drinkType.innerHTML = data[0].type;
  // drinkOccasion.innerHTML = data[0].occasion;
  // drinkMessage.innerHTML = data[0].message;

  // Set the values from data
}
// localStorage.clear();
