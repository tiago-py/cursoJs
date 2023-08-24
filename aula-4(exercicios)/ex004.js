let ano = 2100
let bissexto = false
if(ano % 4 == 0){
    if(ano % 100 == 0){
        if(ano % 400 == 0){
            bissexto = true
        }
    }else{
        bissexto = true
    }
}else{
    bissexto = false
}

if(bissexto){
    console.log("Ano Bissexto")
}else{
    console.log("NÃO é Ano Bissexto")
}