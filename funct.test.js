const funct = require('./funct');

test('String first character should be capitalized wtf!!', () => {
	expect(funct.capitalize('hello I am Billu!')).toBe('Hello I am Billu!');
});

test('String should be reversed wtf!!', () => {
	expect(funct.reverseString('Zombie')).toBe('eibmoZ');
});

test('checking addition', () => {
	expect(funct.calc.add(1.2, 2.4)).toBeCloseTo(3.6);
});

test('checking subtraction', () => {
	expect(funct.calc.subtract(3.1, 0.9)).toBeCloseTo(2.2);
});

test('checking multiplication', () => {
	expect(funct.calc.multiply(2.4, 3.1)).toBeCloseTo(7.44);
});

test('checking division', () => {
	expect(funct.calc.divide(2.5, 2)).toBeCloseTo(1.25);
});

test('Checking ceaser crypto', () => {
	expect(funct.ceaserCrypto('haha lmoa y zebra', 2)).toBe('jcjc noqc a bgdtc');
});

test('Average, min, max and length tested', () => {
	expect(funct.analyze([1,8,3,4,2,6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	})
});