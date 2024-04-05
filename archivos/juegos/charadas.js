const fs = require('fs')
const charadas = require('./charadas.json');
const charadasAleatory = charadas[Math.floor(Math.random()*charadas.length)]
module.exports = charadasAleatory