//link do livro https://github.com/braziljs/eloquente-javascript/tree/master


/*arrays são um conjunto de dados que ficam salvos na memória de uma váriavel
e que podem ser acessados a qualquer momento.
podem ser uteis para guardar uma grande quantidade de informações.
como por exemplo uma lista de números, como o exemplo abaixo
o array é escrito como uma lista de valores separados por vírgulas e entre colchetes.
*/


var listOfNumbers = [2, 3, 5, 7, 11]
console.log(listOfNumbers[1])
// → 3
console.log(listOfNumbers[1 - 1])
// → 2 

//Alguns métodos de arrays
var mack = []
mack.push("Mack")
mack.push("the", "Knife")
console.log(mack)
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "))
// → Mack the Knife
console.log(mack.pop())
// → Knife
console.log(mack)
// → ["Mack", "the"]