// EJERCICIO - Calcula Todo

let input = document.getElementById('input')

let calcular = document.getElementById('calcular')

let reiniciar = document.getElementById('reiniciar')

let suma = document.getElementById('suma')

let media = document.getElementById('media')

let maximo = document.getElementById('maximo')

let minimo = document.getElementById('minimo')


calcular.addEventListener('click', obtener)

function obtener(){

    let numerosTexto = input.value.trim().split(",")

    let numeros = []

    for(let i = 0; i < numerosTexto.length; i++){
        let numero = parseFloat(numerosTexto[i])
        if(!isNaN(numero)){
            numeros.push(numero)
        }
    }

    let sumatorio = 0

    let maximoCalculado = numeros[0]

    let minimoCalculado = numeros[0]

    for(let i= 0; i < numeros.length; i++){
        sumatorio += numeros[i]
        if(numeros[i] > maximoCalculado){
            maximoCalculado = numeros[i]
        }

        if(numeros[i] < minimoCalculado){
            minimoCalculado = numeros[i]
        }
    }

     suma.textContent = "La suma de los números es " + sumatorio
    media.textContent = "La media de los números es " + (sumatorio / numeros.length).toFixed(2)
    maximo.textContent = "El valor máximo es " + maximoCalculado
    minimo.textContent = "El valor mínimo es " + minimoCalculado
    
}

reiniciar.addEventListener('click', limpiar)

function limpiar(){
    input.value = ""
    suma.innerText = ""
    media.innerText = ""
    maximo.innerText = ""
    minimo.innerText = ""
}