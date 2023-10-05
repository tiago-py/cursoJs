function obterDados(){
    return new Promise((resolve, rejection)=>{
        setTimeout(()=>{
            const dados = "Dados obtidos com sucesso"
            if(dados){
                resolve(dados)
            }else{
                rejection("Erro ao obter dados")
            }
        }, 2000)
    })
}


async function mostrarDados(){
    try{
        const dados = await obterDados()
        console.log(dados)
    }catch(erro){
        console.log(erro)
    }
}

