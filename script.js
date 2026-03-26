
//...... Teste de imprimir na tela.........

const input = document.querySelector("input")
const paragrafo = document.querySelector("#frase")

function cliqueiNoButao() {

    paragrafo.innerHTML = input.value
}



//................ Aqui veremos se o número digitado é ímpa ou par.....................................



const button1 = document.getElementById("button-inspecionar")
const inputVerificar = document.querySelector("#input-verificar")
const h1 = document.querySelector("#H")


button1.addEventListener('click', verificar)

function verificar() {

    let valor = inputVerificar.value


    //campo vazio
    if (valor === "") {
        h1.innerHTML = "Digite um número !"

        return
    }


    //Não aceita letras ou caracteres apenas números!
    if (isNaN(valor)) {
        h1.innerHTML = "Apenas números !"

        return
    }


    // 3. Agora sim é número
    let numero = Number(valor)

    if (numero % 2 === 0) {
        h1.innerHTML = "Par"
    }
    else {
        h1.innerHTML = "ímpar"

    }

}

//.............Aqui veremos quais números são POSITIVOS ou NEGATIVOS ..............


const H1 = document.querySelector("#H1")
const inputTf = document.querySelector("#input-trueFalse")
const button2 = document.querySelector("#button-trueFalse")


button2.addEventListener('click', positionFalse)

function positionFalse() {


    let valor = inputTf.value.trim()

    //campo vazio
    if (valor === "") {
        H1.innerHTML = "digite um número"
        return
    }

    //Não aceita letras ou caracteres apenas números!
    if (isNaN(valor)) {

        H1.innerHTML = "Apenas números"
        return
    }
    // 3. Agora sim é número
    let numero = Number(valor)


    if (numero > 0) {
        H1.innerHTML = "positivo"
    }

    else if (numero === 0) {
        H1.innerHTML = "Zero"
    }

    else {
        H1.innerHTML = "Negativo"
    }

}





//..........Aqui veremos quais são os par positivo e ímpar negativo.......................


const button = document.querySelector(".button-verificar")
const input2 = document.querySelector(".input-verificar")
const h12 = document.querySelector(".h1")

button.addEventListener("click", validar)




function validar() {

    let valor = input2.value.trim()

    if (valor === "") {
        h12.innerHTML = "Digite um número!"

        return
    }

    if (isNaN(valor)) {
        h12.innerHTML = "Digite apenas números!"

        return
    }


    let numero = Number(input2.value)


    if (numero % 2 === 0) {
        let resultado = numero * 2

        h12.innerHTML = "Dobro: " + resultado
    }


    else {

        let resultado = numero / 2

        h12.innerHTML = "Metade: " + resultado

    }



}







