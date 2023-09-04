var readline = require('readline');
var resp = "";
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite um número: ", function(answer) {
    var resp = answer;
    if(resp % 2 == 0){
        console.log("Número Par")
    }else{
        console.log("Número Ímpar")
    }
    leitor.close();
});

//pesquisei essa função no StackOverflow