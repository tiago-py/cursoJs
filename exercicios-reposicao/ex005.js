var readline = require('readline')
var num = ""
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Digite um número: ", function(answer) {
    var num = answer
    var numero = parseInt(num)
    for(let i = 1; i<=10;i++){
        var mult = numero*i
        console.log(`${i} X ${numero} = ${mult}`)
    }
    leitor.close()
})
