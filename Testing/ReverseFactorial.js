
function myFactorial(number) {

    let fact = 1;
    let i = number;
    while (i>1) {
        fact++
        if (i%fact !==0) {
        return "None"
        }
        else {i = i/fact}
    }
    return fact;
}
console.log(myFactorial(120));
console.log(myFactorial(40));
console.log(myFactorial(150));
console.log(myFactorial(60));

module.exports = myFactorial;