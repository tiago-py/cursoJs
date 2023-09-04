var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question('Digite um número para calcular o fatorial: ', function(answer){
  var num = parseInt(answer);
    let fatorial = 1;

    for (let i = 1; i <= num; i++) {
      fatorial *= i;
    }

    console.log(`O fatorial de ${num} é ${fatorial}`);
    leitor.close();
  
});