var readline = require('readline')
var num = ""
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Digite um número: ", function(answer) {
    var num = answer
    var numero = parseInt(num)
    for(let i = 1; i<=numero; i++){
        var soma = i+numero
    }
    console.log(soma)
    leitor.close()
})
