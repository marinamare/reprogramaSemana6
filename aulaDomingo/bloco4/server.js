const http = require('http');
// com esse arquivo a gente consegue configurar como vai ser a resposta do nosso servidor em meio a uma requisição 

const server = http.createServer((req, res) => {
    //  console.log(req);
    //enviar resposta
    res.write('<p> Olá, beninas </b>')
});

            // 3000 separa um espaço no nosso computador que existe para guardar o servidor - 3000 é convenção | porta onde vai rodar
            // localhost é a hospedagem local que será ouvida

server.listen(7000, 'localhost', () => {
    console.log('Requisição realizada');
})

