module.exports = function toReadable (number) {
  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const numberWordsDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let humanReadableNumber = '';
	number = number.toString();
	const numLen = number.length;
	if (numLen === 1 || (numLen === 2 && number[0] === '1')) humanReadableNumber += numberWords[parseInt(number, 10)];
	else if (numLen === 2 && number[0] !== '1') {
		humanReadableNumber += numberWordsDozens[parseInt(number[0], 10) - 2] + ' ';
		if(number[1] !== '0') humanReadableNumber += numberWords[parseInt(number[1], 10)];
	}
	else if (numLen === 3) {
		humanReadableNumber += numberWords[parseInt(number[0], 10)] + ' ' + 'hundred ';
		if (number[1] === '0' && number[2] !== '0') humanReadableNumber += numberWords[parseInt(number[2], 10)];
		else if (number[1] === '1') humanReadableNumber += numberWords[parseInt(number.slice(1), 10)];
		else if (number[1] !== '1' && number[1] !== '0') {
			humanReadableNumber += numberWordsDozens[parseInt(number[1], 10) - 2] + ' ';
			if(number[2] !== '0') humanReadableNumber += numberWords[parseInt(number[2], 10)];
		}
	}
return humanReadableNumber.trim();
}
