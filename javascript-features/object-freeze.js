/* 	Object Freeze
		Use
		- Makes object/array immutable
		- By default `const` only limits that you can't reassign 
		the object address
		- const objects/arrays can still have their contents mutated
*/

// Reference: https://youtu.be/yJDofSGTSPQ?t=373 (Web Dev Simplified)

console.log('Unfrozen Object');
const person = {
	name: "Kevin",
	age: "22",
	favouriteFood: ['Burgers'],
	location: {
		lat: 23,
		long: 53
	}
};

console.log(person);
person.name = 'John'
person.favouriteFood.push('Sugarcane');
person.location.lat = 69
console.log(person);

/*	Output
	Unfrozen Object
	{
	  name: 'Kevin',
	  age: '22',
	  favouriteFood: [ 'Burgers' ],
	  location: { lat: 23, long: 53 }
	}
	{
	  name: 'John',
	  age: '22',
	  favouriteFood: [ 'Burgers', 'Sugarcane' ],
	  location: { lat: 69, long: 53 }
	}		
*/

console.log('\nFrozen Object');

const frozenPerson = Object.freeze({
	name: "Kevin",
	age: "22",
	favouriteFood: Object.freeze(["Burgers"]),
	location: Object.freeze({
		lat: 23,
		long: 53
	})
});
console.log(frozenPerson);
frozenPerson.name = 'John'
person.favouriteFood.push('Sugarcane');
person.location.lat = 69
console.log(frozenPerson);
/*	Output
		Frozen Object
		{
		  name: 'Kevin',
		  age: '22',
		  favouriteFood: [ 'Burgers' ],
		  location: { lat: 23, long: 53 }
		}
		{
		  name: 'Kevin',
		  age: '22',
		  favouriteFood: [ 'Burgers' ],
		  location: { lat: 23, long: 53 }
		}	

	Explanation
	- Frozen object, `location`, and frozen array, `favouriteFood`, 
	cannot be mutated 
	- Output shows object as if nothing has changed
*/