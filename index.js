
var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var diceSelect1 = Math.floor(Math.random() * 6);
var diceRoll1 = dice[diceSelect1]

var diceSelect2 = Math.floor(Math.random() * 6);
var diceRoll2 = dice[diceSelect2]

var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var h1 = document.querySelector("h1")

img1.setAttribute("src", diceRoll1);
img2.setAttribute("src", diceRoll2);

if (diceSelect1 === diceSelect2) {
  h1.textContent = "Draw!";
} else if (diceSelect1 > diceSelect2) {
  h1.textContent = "🚩 Player 1 Wins!";
} else if (diceSelect1 < diceSelect2) {
  h1.textContent = "Player 2 Wins! 🚩"
}
