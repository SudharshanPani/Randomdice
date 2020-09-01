var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber1 + ".png";
var randomImagesource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);
// second image element//

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var random = "images/dice" + randomNumber2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", random);

var container = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  container.innerHTML = `<h1>player 1 wins<h1>`;
} else if (randomNumber1 == randomNumber2) {
  container.innerHTML = `Draw`;
} else {
  container.innerHTML = `<h1>player 2 wins<h1>`;
}
