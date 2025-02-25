const { maleFirstNames, femaleFirstNames, maleLastNames, femaleLastNames } = require("./names");

const EMPLOYEE_COUNT = 50;
const DEPARTMENT_COUNT = 8;

const randomInteger = (minimum, maximumExclusive) => Math.floor(Math.random() * (maximumExclusive - minimum)) + minimum;

const randomItem = (array) => array[randomInteger(0, array.length)];

// eslint-disable-next-line no-unused-vars
const employees = Array.from({ length: EMPLOYEE_COUNT }, (_, index) => {
	const gender = randomInteger(0, 2) === 0 ? "male" : "female";
	const firstName = randomItem(gender === "male" ? maleFirstNames : femaleFirstNames);
	const lastName = randomItem(gender === "male" ? maleLastNames : femaleLastNames);
	const age = randomInteger(20, 60);
	return {
		id: index + 1,
		jmeno: firstName,
		prijmeni: lastName,
		vek: age,
		organizacniJednotkaId: randomInteger(1, DEPARTMENT_COUNT + 1),
	};
});

console.log(JSON.stringify(employees));
