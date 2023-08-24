function reverseString(str) {
    return str.split("").reverse().join("");
}
str ="ana"
invertida = reverseString(str)

if(str == invertida){
    console.log("é um palindromo")
}else{
    console.log("não é um palindromo")
}