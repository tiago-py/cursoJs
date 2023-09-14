function calcularFatorial(n){
    if(n === 0 || n === 1){
        return 1
    }else{
        return n * calcularFatorial(n - 1)
    }
}
//chamando a função para calcular o resultado do fatorial de 5
let resultado = calcularFatorial(5)
console.log(resultado)// resultado 120

//evitar ao maximo usar funções desse tipo(usando recursividade)
//consome muita memoria

//jeito melhor de ser feito

function fatorial_C(n){
    var f = 1;
    for(let i =1; i<=n; i++){
        f*=i
    }
    return f
}

let resultado2 = fatorial_C(4)
console.log(resultado2)// resultado 24
