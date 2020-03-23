var titulo = document.querySelector(".titulo");

var numeros = document.querySelectorAll(".numero");

for (var i = 0; i < numeros.length; i++) {

    var numero = numeros[i];

    var tdNumero = numero.querySelector(".info-numero");
    var numero = tdNumero.textContent;

    var numeroEhValido = validaNumero(numero);

    if (!numeroEhValido) {
        //console.log("Número inválido!");
        numeroEhValido = false;
        tdNumero.textContent = "Número inválido";
        numero.classList.add("numero-invalido");
    }
}

function validaNumero(numero) {

    if (numero < 1 && numero != "") {
        return false;
    } else {
        return true;
    }
}


function calculaDiv(numero) {
    var divisores = [];
    
    for (i = numero; i > 0; i--) {
        if (numero % i == 0) {
            divisores.push(" " + i)
        }
    }
    if (divisores.length <= 2) {
        return "O número " +numero + " é primo."
    } else {
        return divisores
    }
}