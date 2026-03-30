let botaoConverter = document.querySelector('.botao-converte')
let valorReal = document.querySelector('.valorReal')
let valorDolar = document.querySelector('.valorDolar')
let caixaSelect = document.querySelector('#caixaSelect')

const valorDolarAtual = 5.25
const valorEuroAtual = 6.03
let precoBitcoin = 300000


    let converterValores = () => {
    let valorParaConverter = Number(document.querySelector('#Valor-Converter').value)

    if (!valorParaConverter) return

    let valorDolarConvertido = valorParaConverter / valorDolarAtual
    let valorEuroConvertido = valorParaConverter / valorEuroAtual
    let valorBitCoin = valorParaConverter / precoBitcoin

    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(valorParaConverter)

    if (caixaSelect.value == "US$ Dólar") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valorDolarConvertido)
    }

    if (caixaSelect.value == "€ Euro") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(valorEuroConvertido)
    }

    if(caixaSelect.value == "Bitcoin") {
        valorDolar.innerHTML = "₿" + valorBitCoin.toFixed(8)
    }
}

botaoConverter.addEventListener('click', converterValores)

caixaSelect.addEventListener("change", () => {
    const textoEuro = document.querySelector('.texto-Dolar')
    const imgDolar = document.querySelector('#img-Dolar')

    if (caixaSelect.value == "€ Euro") {
        textoEuro.innerHTML = "€ Euro"
        imgDolar.src = "assets/icons8-euro-48.png"
    }
    else if (caixaSelect.value == "US$ Dólar") {
        textoEuro.innerHTML = "Dólar Americano"
        imgDolar.src = "assets/icons8-circular-dos-eua-48.png"
    }
    else if(caixaSelect.value == "Bitcoin") {
        textoEuro.innerHTML = "Bitcoin"
        imgDolar.src = "assets/icons8-bitcoin-48.png"
    }
    converterValores()
})


