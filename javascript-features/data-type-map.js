/* 	Javascript Map
		Use
		- Objects use key-value pairs
		- Keys must be string values
		- Map's are similar to objects although they track the insertion order
		of the map's key-value pairs
		- Maps are structured as 2D arrays ([[key, value], [key2, value2], ...])
*/

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Reference: https://youtu.be/yJDofSGTSPQ?t=562

// Object
console.log("\nUSING AN OBJECT");
const CURRENCY_OBJECT = {
	"United States": "USD",
	"Canada": "CAD"
};

// One way to get value from an object
const currency = CURRENCY_OBJECT["United States"];
console.log(currency);

// Map
console.log("\nUSING A MAP");
const CURRENCY_MAP = new Map([
	["United States", "USD"],
	["Canada", "CAD"]
]);
console.log('new Map() ', CURRENCY_MAP);

// Set a new key-value pair in a Map
CURRENCY_MAP.set("India", "Rupee");
console.log('\nMap.set() ', CURRENCY_MAP);

// Get a specific value by key from a Map
console.log('\nMap.get() ', CURRENCY_MAP.get("United States"));

// Check if Map has a specific key
console.log('\nMap.has(India) ', CURRENCY_MAP.has("India"));
console.log('Map.has(Austrailia) ', CURRENCY_MAP.has("Austrailia"));

const england = {name: "England"};

CURRENCY_MAP.set({name: "Switzerland"}, "Francs");
CURRENCY_MAP.set(england, "Pound");
console.log('\nMap.set(ObjectValue)', CURRENCY_MAP);

// Iterate over values in map
console.log('\nMap.forEach()');
CURRENCY_MAP.forEach(val => console.log(val));

// Map.get() returns value where key is a non-primitive data type (object/array)

// Outputs `undefined`, the reference doesn't match any key in the Map
console.log('\nMap.get(ObjectValue) ', CURRENCY_MAP.get({name: "Switzerland"}));

console.log('Map.get(ObjectValue) ', CURRENCY_MAP.get(england));

// The Map stores a reference to the object and so any changes to 
// the object are reflected in the Map as well
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
england.name = "Great Britain";
console.log('\nMap object key stored by reference: ', CURRENCY_MAP);