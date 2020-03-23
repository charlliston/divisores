var btnAdicionar = document.querySelector("#btn-consulta");
btnAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var numero = obtemEntradaDoFormulario(form);

    var numeroTr = montaTr(numero);

    var erros = validaEntrada(numero);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    var tabela = document.querySelector("#tabela-numeros");

    tabela.appendChild(numeroTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


function obtemEntradaDoFormulario(form) {

    var entrada = {
        numero: form.numero.value,
        divisores: calculaDiv(form.numero.value)
    }

    return entrada;
}


function validaEntrada(entrada) {

    var erros = [];

    if (entrada.numero.length == 0) {
        erros.push("Digite o número a ser consultado.");
    }

    if (!validaNumero(entrada.numero)) {
        erros.push("Número inválido!");
    }

    return erros;

}


function montaTr(numero) {
    var numeroTr = document.createElement("tr");
    numeroTr.classList.add("numero");

    numeroTr.appendChild(montaTd(numero.numero, "info-numero"));
    numeroTr.appendChild(montaTd(numero.divisores, "info-div"));

    return numeroTr;
}


function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
