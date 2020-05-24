const onplus = document.querySelector('#buttonPlus');
const onminus = document.querySelector('#buttonMinus');
const onmultiplai = document.querySelector('#buttonMultiPlai');
const ondivide = document.querySelector('#buttonDivide');
const inputValue1 = document.querySelector('#inputNumber1');
const inputValue2 =document.querySelector('#inputNumber2'); 

function makeOpiration(opiration){
	let number1 = Number(inputValue1.value);
	let number2= Number(inputValue2.value);
	if (opiration ==='+'){
		var result = number1 + number2;
	} else if (opiration ==='-') {
		var result = number1 - number2;
	} else if (opiration ==='*') {
		var result = number1 * number2;
	} else if (opiration ==='/') {
		var result = number1 / number2;
	} else{
		alert('opiration is unknown');
	}
	alert(result);
} 

function operetionClick(eventObject){
	let element = eventObject.currentTarget;
	let clickElement = element.innerHTML;
    makeOpiration(clickElement);
}
 	
onplus.addEventListener('click',operetionClick);
onminus.addEventListener('click',operetionClick);
onmultiplai.addEventListener('click',operetionClick);
ondivide.addEventListener('click',operetionClick);

