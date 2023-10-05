function obterDados(callback){
    //simulando uma operação assincrona
    
    setTimeout(
        ()=>{
          const dados = "Dados obtidos"  
          callback(dados)
        }
    , 2000)
}

function mostrarDados(dados){
    console.log(dados)
}

obterDados(mostrarDados)