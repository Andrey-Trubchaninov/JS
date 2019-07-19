let userInput = prompt('Введите число от которого будет начат поиск простых чисел:');
let userNumber = parseInt(userInput);
let userInput2 = prompt('Введите число до которого будет поиск простых чисел:');
let userNumber2 = parseInt(userInput2);

if (userNumber > userNumber2) {
	const userNumber3 = userNumber;
	userNumber = userNumber2;
	userNumber2 = userNumber3;
}
	
for (let i = userNumber; i < userNumber2; i++) {
	let isSimpleNumber = true;

	for (let j = i - 1; j > 1; j--) {
  	const leftPart = i % j;
    
    if (!leftPart) {
     isSimpleNumber = false;
    }
  }
  
  if (isSimpleNumber) {
  	alert('Простое число: ' + i);
  }
}
