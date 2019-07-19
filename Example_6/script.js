// Вернуть массив простых чисел

let userInputFrom = prompt('From:');
let userInputTo = prompt('To:');
let fromNumber = parseInt(userInputFrom);
let toNumber = parseInt(userInputTo);
const arr = [];
getSimpleNumbers(fromNumber, toNumber);

function isSimpleNumber(number) {
	switch (number) {
  	case 0:
    case 1:
    case 2:
    	return true;
  }

	if (number % 2 === 0) {
  	return false;
  }

	for (let i = number - 1; i > 2; i--) {
    if (number % i === 0) {
    	return false;
    }
  }
	return true;
}

function getSimpleNumbers(from, to) {
	for (let i = from; i <= to; i++) {
    if (isSimpleNumber(i)) {
      arr.push(i);
    }
  }
}

// Вернуть сумму всех чисел массива

sum = getSumOfNumbers(arr);

function getSumOfNumbers(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Вернуть среднее арифметическое число из чисел массива

AverageOfNumbers = getAverageOfNumbers(arr);

function getAverageOfNumbers(arr) {
  let Average = 0;
  for(let i = 0; i < arr.length; i++) {
    Average += arr[i];
  }
  let AverageOfNumbers = Average / arr.length;
  AverageOfNumbers = AverageOfNumbers.toFixed(2);
  return AverageOfNumbers;
}

// Найти и вернуть минимальное число в массиве

minNumber(arr);

function minNumber(arr) {
  let min = arr[0];
  return min;
}

// Найти и вернуть максимальное число в массиве

maxNumber(arr);

function maxNumber(arr) {
  for (i = 0; i < arr.length; ++i) {
  min = arr[0];
  max = min;
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function start() {
  const  simpleNumbers = String(arr);
  console.log('========================================');
  console.log(`Диапазон задан от: ${fromNumber} до ${toNumber}`);
  console.log('Простые числа:', simpleNumbers);
  console.log(`Сумма всех чисел массива: ${sum}, среднее арифметическое число из чисел массива: ${AverageOfNumbers}, минимальное число в массиве: ${min}, максимальное число в массиве: ${max}`);
  console.log('========================================');
}
start();