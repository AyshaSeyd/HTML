const cows = require('cowsay');

const cowseverywhere = (text) => cows.say({
    text,
    e :'oO',
    T : 'U',
})

console.log(cowseverywhere("Hello Humans"))

module.exports = cowseverywhere






