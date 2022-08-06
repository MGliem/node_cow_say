const infos = require('./information');
const cowsay = require('cowsay');

const output = cowsay.say({text: `Hi, i\'m ${infos.name} and my campus is ${infos.campus}`});

console.log(output);