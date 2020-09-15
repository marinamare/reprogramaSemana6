//arquivo onde vamos guardar nossos dados
/* 
1. criar um array de nomes de pessoas 
2. criar um array das idades
visualizar esses dados no terminal
3. deixar esses dados disponíveis para serem usados em outros arquivos
*/ 

const people = ["paula", "elis", "maré", "tereza", "talita", "mariana"]
const ages = [22, 31, 22, 30, 30, 29]


// modules.export é uma maneira que você consegue disponibilizar dado dentro de determinado arquivo para ser acessado por outro arquivo


module.exports = {
    people,
    ages
}