/* 	Debugging with console.log
		- console.time(name) + console.timeEnd(name)
*/

// Finding out how long a section of code runs for
console.time('Timer');
for (let i = 0; i < 100000000; i++) {
	// Long loop
}
console.timeEnd('Timer');


// console.assert(predicate, logValue)
const x = 2;
console.assert(x === 1, 'X is not 1');

// console.table(array)
const people = [
	{ name: "Kevin", age: 22 },
	{ name: "Stella", age: 18 },
	{ name: "Michelle", age: 22 },
];

console.log('Table of Array');
console.table(people);