var readline = require('readline')

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


var vetor = [];

function lerNumero() {
  leitor.question('Digite um número (ou "fim" para encerrar): ', (input) => {
    if (input.toLowerCase() === 'fim') {

      if (vetor.length === 0) {
        console.log('Nenhum número foi inserido.');
      } else {
        console.log(`Números pares: ${vetor}`);
      }
      leitor.close()
    } else {

      var numero = parseFloat(input);
      if (!isNaN(numero) && numero >=0 ) {
        vetor.push(numero)
      }
      lerNumero()
    }
  });
}

lerNumero()