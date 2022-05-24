
const yargs = require('yargs');
const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.log(argv);


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.bgCyan))
    .catch(err => console.log(error));