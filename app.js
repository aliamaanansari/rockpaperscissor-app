let titleDiv = document.getElementById("title");

let message = "GoodBye";

console.log("before: ", titleDiv.innerHTML);
console.log("after: ", (titleDiv.innerHTML = message));

titleDiv.innerHTML = `${message}`;
titleDiv.style.color = "red";
titleDiv.style.backgroundColor = "blue";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll(".colorSquare");

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerHTML = timesClicked[square.value];
    // console.log(square.value)
  };
});

function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => (square.innerHTML = " "));
}
const clearGameBtn = document.getElementById("clear-game");
clearGameBtn.onclick = () => clearScores(squares);
