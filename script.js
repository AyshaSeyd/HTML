'use strict'
console.log("test");
console.log("Aysha Bint Seyd");
console.info("JJ");
console.warn("UK");
console.error("Aquarius");

let myCar = "Audi";
let myModel = "A5";
console.log("My fav car is:" +myCar+ "and my model is:" + myModel);

let a;
let b = 12345;
let c = 12344;
let d = true;
let e = {a:"javascript"};
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

let totalMoney = 4000;
let moneyPaidSoFar = 2000;
console.log(`The total bill is £${totalMoney} and the money paid so far is £${moneyPaidSoFar}`);

console.log("This is now %c the end of exercises.","color: orange;font-family: fantasy; font-style: Bold;background-color: black; padding: 10px")

let f = 100;
while (f <= 200) { 
    f++;
    console.log(`f = ${f}`);}

let g = 100;
    while (g <= 200) {
        if (g % 2 == 0) {console.log("-")} 
        else {console.log("*")} 
        g++;
        }

let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);

let strictC = true;
let strictD = 1;
console.log(strictC != strictD);
console.log(strictC !== strictD);

let age = 10;
{
    if (age >= 18 && age <= 65) {console.log("Age is in range");} 
    else if (age < 18) {console.log("underage");} 
    else {console.log("catch all else");}
    }














