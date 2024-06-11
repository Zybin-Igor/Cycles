/* первый блок */
// let out = '';
// for (let i = 0; i < 10; i++){
// 	out += i + '_';
// 	if (i % 2 === 0){ //если четное число вывести две звездочки
// 		out += '**_';
// 	}
// 	else out += '*_';//если нечетное число вывести одну звездочку
// }
// console.log(out);

/*второй блок */
// let out = '';
// for (let i = 0; i <= 5; i++){
// 	out += i + '_' + (5 - i) + '_';
// }
// console.log(out);
// результат: 0_5_1_4_2_3_3_2_4_1_5_0_

/*третий блок */
// let out = '';
// for (let i = 0; i < 5; i++){
// 		for (let k = 0; k < 5; k++){
// 		console.log('k = ', k, 'i = ', i);
// }
// }
// console.log(out);
/* четвертый блок */
// let out = '';
// for (let i = 0; i < 5; i++){
// 	out += i + '_';
// 		for (let k = 0; k < 5; k++){
// 		out += '*';
// }
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/*результат вывод:
0_*****
1_*****
2_*****
3_*****
4_*****
*/
/*пятый блок */
// let out = '';
// for (let i = 0; i < 7; i++){
// 		for (let k = 0; k <= i; k++){
// 		out += '*';
// }
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/*результат вывод:
*
**
***
****
*****
******
*/
/* шестой блок */
// let out = '';
// for (let i = 5; i >= 0; i--){
// 		for (let k = i; k >= 0; k--){
// 		out += '*';
// }
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/*результат вывод:
******
*****
****
***
**
*
*/
/* седьмой блок */
// let out = '';
// for (let i = 0; i < 4; i++){
// 	// out += i + '_';
// 		for (let k = 0; k < 8; k++){
// 			if (k <= i)	out += '* ';
// 			else out += '_ ';
// }
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/* Результат вывод:
* _ _ _ _ _ _ _
* * _ _ _ _ _ _
* * * _ _ _ _ _
* * * * _ _ _ _
*/
/* восьмой блок */
// let out = '';
// for (let i = 0; i <= 8; i++){
// 	// out += i + '_';
// 		for (let k = 0; k <= 8; k++){
// 			if (k <= i)	out += '*';
// 			else out += '';
// }
// out += "<br>";
// }
// console.log(out);
// for (let i = 1; i <= 8; i++){
// 	// out += i + '_';
// 		for (let k = 0; k <= 8; k++){
// 			if (k <= (8-i))	out += '*';
// 			else out += '';
// }
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/* результат вывод:
*
**
***
****
*****
******
*******
********
*********
********
*******
******
*****
****
***
**
*
 */
/* девятый блок */
// let out = '';
// let p = 1;
// for (let i = 0; i < 4; i++){
//  // out += i + '_';
//    for (let k = 0; k < 18; k++){
//      if (k < p)  out += '* ';
//      else out += '_ ';
// }
// p = p + 3;
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/*результат вывод
* _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
* * * * _ _ _ _ _ _ _ _ _ _ _ _ _ _
* * * * * * * _ _ _ _ _ _ _ _ _ _ _
* * * * * * * * * * _ _ _ _ _ _ _ _
 */
/* десятый блок */
// let out = '';
// let p = 1;
// let s = 16;
// for (let i = 0; i < 8; i++){
//  // out += i + '_';
//    for (let k = 0; k < 18; k++){
//      if (k >= p && k < s)  out += '* ';
//      else out += '_ ';
// }
// p = p + 1;
// s = s - 1;
// out += "<br>";
// }
// console.log(out);
// document.querySelector('.out-1').innerHTML = out;
/* результат вывод:
_ * * * * * * * * * * * * * * * _ _
_ _ * * * * * * * * * * * * * _ _ _
_ _ _ * * * * * * * * * * * _ _ _ _
_ _ _ _ * * * * * * * * * _ _ _ _ _
_ _ _ _ _ * * * * * * * _ _ _ _ _ _
_ _ _ _ _ _ * * * * * _ _ _ _ _ _ _
_ _ _ _ _ _ _ * * * _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ * _ _ _ _ _ _ _ _ _
*/
