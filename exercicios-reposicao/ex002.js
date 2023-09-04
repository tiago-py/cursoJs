var readline = require('readline')
var num1 = ""
var num2 = ""
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question(num1 = "Digite um número: ",function(answer) {
    var num1 = answer
    leitor.question(num2 = "Digite outro número: ", function(answer){
        var num2 = answer
        if(num1 > num2){
            console.log("Primeiro número maior que o segundo")
        }else if(num1 == num2){
            console.log("Números iguais")
        }else{
            console.log("Segundo número maior que o primeiro")
        }
        leitor.close()
    })
})

