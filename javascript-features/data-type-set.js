/* 	Javascript Set
		Use
		- Like an array that has only unique values (removes duplicates)
		- Can more easily delete values from set (set.delete())
*/

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Reference: https://youtu.be/yJDofSGTSPQ?t=800

const uniqueNumbers = [1, 234, 234, 54];
console.log('Array w. Duplicate: ', uniqueNumbers);

const set = new Set(uniqueNumbers);
console.log('Set: ', set);

console.log('Set.add(13) ', set.add(13));

console.log('Set.has(54) ', set.has(54));

// Arrays have to have all values shift over, set's can delete values
set.delete(1)
console.log('Set.delete(1) ', set);