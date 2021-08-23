function capitalize (inputString)	{
	if (inputString.charCodeAt(0) >= 97) {
		return String.fromCharCode(inputString.charCodeAt(0) - 32) + inputString.substr(1, inputString.length - 1);
	} 

	return inputString;
}

function reverseString (inputString)	{
	let outputString = '';
	for (let i = inputString.length - 1; i >= 0; i--)	{
		outputString += inputString[i];
	}

	return outputString;
}

class Calc {
	add (num1, num2) {
		return num1 + num2;
	}

	subtract (num1, num2) {
		return num1 - num2;
	}

	multiply (num1, num2) {
		return num1 * num2;
	}

	divide (num1, num2) {
		return num1 / num2;
	}
};

function ceaserCrypto (inputString, shift)	{
	let outputString = '';

	for (let i = 0; i < inputString.length; i++)	{
		if (inputString[i] == ' ')	{
			outputString += ' ';
			continue;
		}

		let newCharCode = inputString.charCodeAt(i);
		let start = 0;
		if (newCharCode >= 65 && newCharCode <= 90) {
			start = 65;
		}	else if (newCharCode >= 97 && newCharCode <= 122)	{
			start = 97;
		}

		newCharCode = start + ((newCharCode - start + shift) % 26);
		outputString += String.fromCharCode(newCharCode);
	}

	return outputString;
}

function analyze (inputArray)	{
	let average = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let max = Number.MIN_SAFE_INTEGER;
	let length = inputArray.length;

	for (let i = 0; i < length; i++)	{
		average += inputArray[i];
		if (max < inputArray[i])	max = inputArray[i];
		if (min > inputArray[i])	min = inputArray[i];
	}

	average = average / length;

	return {
		'average': average,
		'min': min,
		'max': max,
		'length': length
	}
}

module.exports = {
	capitalize: capitalize,
	reverseString: reverseString,
	calc: new Calc(),
	ceaserCrypto: ceaserCrypto,
	analyze: analyze
};