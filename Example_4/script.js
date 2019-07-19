const userInput = prompt('Введите число от которого будет начат поиск кратных чисел:');
let userNumber = parseInt(userInput);
const userInput2 = prompt('Введите число до которого будет поиск кратных чисел:');
let userNumber2 = parseInt(userInput2);
const userInput3 = prompt('Введите число для проверки кратности:');
let userNumber3 = parseInt(userInput3);


for (let i = userNumber; i < userNumber2; i++) {
	let multiple = false;
  const j = userNumber3;
  const leftPart = i % j;
    
  if (!leftPart) {
    multiple = true;
  }
  
  if (multiple) {
  	alert('Кратные числа: ' + i);
  }
}