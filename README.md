# Desafio Dev. Full Stack
### Divisores
[![Github-Release](https://img.shields.io/badge/versao-v0.1-blue)](https://github.com/charlliston/divisores)

###### Sistema web app que recebe um número como entrada e calcula a lista de seus divisores e se o mesmo é um número primo.

O sistema web conta com uma tela com um campo de texto e um botão "Consultar". O usuário insere um número no campo destinado às consultas e, ao clicar no botão, os dados são enviados ao backend para que sejam feitos os cálculos.
O resultado é exibido na tela e fica gravado na tabela "Consultas Anteriores".


## Objetivo

O sistema foi concebido visando realizar dois tipos de cálculos:

* Calcular os divisores de um número
* Calcular se é um número primo

## Tecnologias

O sistema utiliza as tecnologias: HTML, CSS e JavaScript. A partir da linguagem HTML foi possível criar o frontend da página e prepará-la para receber os resultados que são calculados pelo backend. Com o JavaScript criei dois arquivos: um que contém as funções de calcular os divisores do valor de entrada e um outro que é responsável por verificar erros e retornar o resultado para o frontend. Com o CSS toda a parte de aparência da página é controlado através de classes e atributos.

## Tela

Cálculos Anteriores | Nova Consulta
------------ | -------------
tabela que armazena os resultados de consultas anteriores | coluna exibe um campo para nova consulta
dividido entre _número_ e _divisores_ | exibe erros caso o usuário não digite um número válido

## Instruções

Para executar o sistema é necessário acessar o arquivo _index.html_ e, para isso você pode fazer download ou clonar o código fonte:

    https://github.com/charlliston/divisores.git
