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
        let maior = vetor[0];
        for (let i = 1; i < vetor.length; i++) {
          if (vetor[i] > maior) {
            maior = vetor[i]
          }
        }
        console.log(`O maior número da lista é: ${maior}`);
      }
      leitor.close()
    } else {

      var numero = parseFloat(input);
      if (!isNaN(numero)) {
        vetor.push(numero)
      }
      lerNumero()
    }
  });
}

lerNumero()