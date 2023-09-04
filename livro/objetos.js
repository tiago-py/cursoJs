/*Valores do tipo objeto são coleções arbitrárias de propriedades, sendo que 
podemos adicionar ou remover essas propriedades da forma que desejarmos. 
Uma maneira de criar um objeto é usando a notação com chaves.
*/

var day1 = {
squirrel: false,
events: ["work", "touched tree", "pizza", "running",
            "television"]
}
console.log(day1.squirrel)
// → false
console.log(day1.wolf)
// → undefined
day1.wolf = false
console.log(day1.wolf)
// → false

/*
Dentro das chaves, podemos informar uma lista de propriedades separadas por vírgulas. 
Cada propriedade é escrita com um nome seguido de dois pontos e uma expressão que fornece 
o valor da propriedade. 
Espaços e quebras de linha não fazem diferença. 
Quando um objeto se estende por várias linhas, indentá-lo, 
como mostrado no exemplo anterior, melhora a legibilidade. 
Propriedades cujos nomes não são variáveis ou números válidos precisam estar entre aspas.
*/

var descriptions = {
work: "Went to work",
"touched tree": "Touched a tree"
}


var journal = [
    {events: [
        "work",
        "touched three",
        "pizza",
        "running",
        "television"
    ], 
    squirrel:false},
    {events: [
        "work", 
        "ice cream", 
        "cauliflower",
        "lasagna", 
        "touched tree", 
        "brushed teeth"
    ],
    squirrel: false},
    {events: [
        "weekend", 
        "cycling", 
        "break",
        "peanuts", 
        "beer"
    ],
    squirrel: true},
]
console.log(journal[0])
/*
false    
{
events: [ 'work', 'touched three', 'pizza', 'running', 'television' ],
squirrel: false
}
*/

var object1 = {value: 10}
var object2 = object1
var object3 = {value: 10}

console.log(object1 == object2)
// → true
console.log(object1 == object3)
// → false

object1.value = 15
console.log(object2.value)
// → 15
console.log(object3.value)
// → 10
/*As variáveis object1 e object2 estão associadas ao mesmo objeto e, por isso, alterar 
object1 também altera o valor de object2.
*/

/*
Quando comparamos objetos, o operador == do JavaScript irá retornar true apenas se ambos 
os objetos possuem exatamente o mesmo valor. 
Comparar objetos diferentes irá retornar false mesmo se eles tiverem conteúdos 
idênticos.
*/

