var numOfSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var modeBtns = document.querySelectorAll(".mode");

//Reset Button for generate new colors
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(){
	reset();
});

//WHEN THE PAGE INITIALLY LOADS
init();

function init(){
	//Level Mode Button
	setUpModeButtons();

	//Setup squares
	setUpSquares();
	
	reset();
}

//Level Mode Button
function setUpModeButtons(){
	for(var i = 0; i < modeBtns.length; i++){
	modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
			//This is called TERNARY CONDITION
		this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
		reset();
	});
	}	
}

//SetUp Squares
function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	
		//add click listeners to square
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			document.getElementById("message").innerHTML = "Correct!";
			resetButton.textContent = "Play Again ?";
		}
		else{
			this.style.backgroundColor = "#232323";
			document.getElementById("message").innerHTML = "Try Again";
		}
		});
	}
}

function reset(){
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//generate all new colors
	colors = generateColorArray(numOfSquares);

	//pick a new random color from array
	pickedColor = randomColor();

	//Chnage colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	//change colors of squares
	for(var i = 0; i < squares.length; i++){

		//This is called TERNARY CONDITION
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} 
		else{
			squares[i].style.display = "none";
		}
	
		h1.style.backgroundColor = "steelblue";
	}
}



function changeColors(color){
	for(var i = 0; i < colors.length; i++){
				squares[i].style.backgroundColor = color;
			}
	h1.style.backgroundColor = color;
}

function randomColor(){
	var randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function generateColorArray(arrayLength){
	var arr = [];
	for(var i = 0; i < arrayLength; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	
	return arr;
}

