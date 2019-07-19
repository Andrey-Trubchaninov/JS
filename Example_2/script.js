//first task

const userInput1 = prompt('Cколько Вам лет?');
const defaultValue = 'Вы ничего не ввели';
const result = userInput1 || defaultValue;

alert(result);

//second task

const userInput2 = prompt('Cколько Вам лет?');
const defaultValue1 = 10;
const defaultValue2 = 15;

if (userInput2 == null) {
	alert(defaultValue2);
} else {
	alert(defaultValue1);
}


//third task 

const PI = 3.14;
const maxSquare = PI * (10 ** 2);

const userInput = prompt('Введите радиус круга');
const userInputRadius = Number(userInput);

const userCircleSquare = PI * (userInputRadius ** 2);

if (userCircleSquare > maxSquare) {
	alert('Введенные данные больше лимита');
} else {
	alert('ok');
}
