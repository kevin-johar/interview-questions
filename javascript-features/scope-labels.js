/* 	Scope Labels
		Use
		- Name specific scopes so you can continue or break out of them
		- Similar to labels in assembly code
*/

// Reference: https://youtu.be/yJDofSGTSPQ?t=57 (Web Dev Simplified)

console.log('Without Scope Labels:');
for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 3; j++) {
		console.log('i=', i, ', j=', j);
		if (i===1) {
			continue;
		}
	}	
}
/* 	Output
	i= 0 , j= 0
	i= 0 , j= 1
	i= 0 , j= 2
	i= 1 , j= 0
	i= 1 , j= 1
	i= 1 , j= 2
	i= 2 , j= 0
	i= 2 , j= 1
	i= 2 , j= 2
	i= 3 , j= 0
	i= 3 , j= 1
	i= 3 , j= 2

	Explanation
	- When iteration of loop reaches continue it moves to next iteration 
	immediately
	- This doesn't mean those iterations are skipped; ran until `continue`
	is hit
	- We want the ability to just not run uneeded loops
*/
console.log('With Scope Labels:');

loop1: for (let i = 0; i < 4; i++) {
	loop2: for (let j = 0; j < 3; j++) {
		console.log('i=', i, ', j=', j);
		if (i===1) continue loop1;
	}	
}
/* 	Output
	i= 0 , j= 0
	i= 0 , j= 1
	i= 0 , j= 2
	i= 1 , j= 0 | i=1 only printed once
	i= 2 , j= 0
	i= 2 , j= 1
	i= 2 , j= 2
	i= 3 , j= 0
	i= 3 , j= 1
	i= 3 , j= 2

	Explanation
	- When first iteration with `i=1` is hit it runs normally
	- When it passes the condition and hits `continue loop1`, 
	the program skips the current value of the specified loop
	- Helps avoid looping after it's no longer necessary
*/

console.log('Generic Scope Label')
scope1: {
	console.log('Scope 1-1');
	break scope1;
	console.log('Scope 1-2');
}
/* 	Output
	Scope 1-1

	Explanation
	- `Scope 1-2` not printed as we exited the scope
*/