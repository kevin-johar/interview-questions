/* Find the non repeating integer
   Constraints:
    - 1 <= n <0 100
    - o <= a[i] <= 100, where 0 <= i <= n
*/
const a = [1,2,3,4,3,2,1];

function lonelyinteger(a) {
    // Write your code here
    const res = {};
    
    a.forEach((e) => {
        const key = e+'';
       if (key in res) {
           delete res[key];
       } else {
           res[key]=e   
       }
    });
    
    return +Object.keys(res)[0];
}

console.log(lonelyinteger(a));