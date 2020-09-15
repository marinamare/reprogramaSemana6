/* 
1. Importar de maneira geral outro arquivo 
require é a palavra que a gente usa pra importar coisas de outros arquivos, convencionalmente, ao importar um arquivo guardamos suas informações em uma constante
require é um método que solicita um arquivo
./ diz que estamos pegando um arquivo no mesmo diretório
../ acessa um arquivo fora da pasta atual
as constantes declaradas mas não impressas (console.log) .não conseguem ser acessadas
*/ 

// acessando dados de um arquivo que está na mesmapasta

const data = require('./people'); 
console.log(data)

/*

console.log(data.people, data.ages)



const { ages } = require('./people')
console.log(ages)
 

// importando um objeto já existente: esse é um objeto criado que já existe no Node.js

const os = require('os')
console.log(os.homedir) */ 

