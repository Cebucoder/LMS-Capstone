function isOdd(number){
	return number % 2 != 0;
}
function isEven(number){
	return number % 2 == 0;
}
function filter (numbers, filterFormula){
	let result = [];
	for(let number of numbers){
		if(filterFormula(number)){
			result.push(number);
		}
	}
	// alert(result);
	setTimeout(function(){
		alert(result);
	}, 5000);
}
let numbers = [1,2,3,4,5,6,7,8,9];

// filter(numbers, isEven);
// filter(numbers, isOdd);
// synchronous call back topic for today

// function sayGreetings(){
// 	alert("Happy Always");
// }

// setTimeout(sayGreetings, 10000);
// 

let text = document.getElementById("sparkText");
let startButton = document.getElementById("startLight");
let stopButton = document.getElementById("stopLight");

startButton.addEventListener("click",startLights);
stopButton.addEventListener("click",stopLights);

function lightsOn(){
	let color = ["red","blue","green","orange","yellow"];
	let randomizer = Math.floor(Math.random() * color.length);
	text.style.color = color[randomizer];
}
function startLights(){
	lights = setInterval(lightsOn, 100);
}

function stopLights(){
	clearInterval(lights);
}