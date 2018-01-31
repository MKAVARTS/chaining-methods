const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];
var integerDiv = document.getElementById('integer');
// 1. Sort numbers in descending order (.sort)
// 2. Remove any integers greater than 19 (.filter)
// 3. Multiply each remaining number by 1.5 and then subtract 1. (.map)
// 4. Add all number in array (.reduce)
// 5. Enter all into innerHTML

integerDiv.innerHTML = integers.sort((a,b) => b - a).filter(int => int > 19).map(int => int * 1.5 -1).reduce((a,b) => a + b);







