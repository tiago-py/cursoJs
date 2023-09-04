var readline = require('readline')

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Função para ler uma nota do usuário
function lerNota(numeroNota, notas, callback) {
  leitor.question(`Digite a ${numeroNota}ª nota: `, (nota) => {
    var notaNumerica = parseFloat(nota)
    if (!isNaN(notaNumerica)) {
      notas.push(notaNumerica)
      callback()
    } else {
      console.log('Por favor, digite um valor numérico válido.')
      lerNota(numeroNota, notas, callback)
    }
  })
}

// Função para calcular a média
function calcularMedia(notas) {
  var soma = notas.reduce((acc, nota) => acc + nota, 0)
  return soma / notas.length
}

// Função para verificar se o aluno foi aprovado ou reprovado
function verificarAprovacao(media) {
  if (media >= 7) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}

var notas = []
let notaAtual = 1

function lerTodasAsNotas() {
  if (notaAtual <= 4) {
    lerNota(notaAtual, notas, lerTodasAsNotas)
    notaAtual++
  } else {
    var media = calcularMedia(notas)
    var resultado = verificarAprovacao(media)

    console.log(`A média do aluno é ${media.toFixed(2)} e ele está ${resultado}.`)
    leitor.close()
  }
}

lerTodasAsNotas()