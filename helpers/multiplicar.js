const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';
        let fileName = `tabla-${base}.txt`;
        for(let i = 1; i<= hasta; i++){
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${base*i} \n`;
        }
        if(listar == true){
            console.log('======================'.green);
            console.log('    Tabla del: '.rainbow, base);
            console.log('======================'.red);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/${fileName}`,salida); //handle erros
        return fileName;
    } catch (error) {
        throw 'Error al crear archivo'; //throw para lanzar el error 
    }
    
}

module.exports = {
    crearArchivo
}