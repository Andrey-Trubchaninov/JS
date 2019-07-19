//first task

function minNumber(a, b) {
  if (a > b) {
  	return b;
  } else {
  	return a;
  }
}


const inputA = prompt('Number A');
const inputB = prompt('Number B');

const numA = parseInt(inputA);
const numB = parseInt(inputB);

const minNum = minNumber(numA, numB);

function maxNumber(a, b) {
  if (b > a) {
  	return b;
  } else {
  	return a;
  }
}

const maxNum = maxNumber(numA, numB);

console.log(`First task: Maximum number ${minNum}, minimum number ${maxNum}.`);

//second task

function simpleNumber(a) {
  switch (a) {
  	case 0:
    case 1:
    case 2:
    	return 'true';
  }
  
  if (!(a % 2)) { 
      return 'false';
  }
  else {
      return 'true';
  }
}

const inputC = prompt('Number C');
const numC = parseInt(inputC);
const SimpleNumber = simpleNumber(numC);
console.log(`Second task: ${SimpleNumber}`);

//third task

function multiple(a,b) {
  if (!(a % b)) {
  return 'true';
  }
  else {
      return 'false';
  }
}

const inputD = prompt('Number D');
const inputE = prompt('Number E');

const numD = parseInt(inputD);
const numE = parseInt(inputE);

const isMultiple = multiple(numD, numE);
console.log(`Third task: ${isMultiple}`);

//fourth task

function minNumber(a, b) {
  if (a > b) {
  	return b;
  } else {
  	return a;
  }
}


const inputJ = prompt('Number J');
const inputH = prompt('Number H');
const numJ = parseInt(inputJ);
const numH = parseInt(inputH);
const fromNumber = minNumber(numJ, numH);

function maxNumber(a, b) {
  if (b > a) {
  	return b;
  } else {
  	return a;
  }
}

const toNumber = maxNumber(numJ, numH);
const inputF = prompt('Number F');
const numF = parseInt(inputF);
const multipleNumber = numF;

start(fromNumber, toNumber, multipleNumber);

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

function isMultipleTo(a, b) {
	return !(a % b);
}

function start(from, to, multiple) {
	for (let i = from; i <= to; i++) {
  	const numberIsSimple = isSimpleNumber(i);
    const numerIsMultiple = isMultipleTo(i, multiple);
    
    if (numberIsSimple) {
    	console.log(`Fourth task: ${i} simple number`);
    }
    
    if (numerIsMultiple) {
    	console.log(`Fourth task: ${i} multiple to ${multiple}`);
    }
  }
}
