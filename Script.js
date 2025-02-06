//Lista  de funções usadas no documento Index.html
//Os comentários aqui presentes servem de orientação sobre o que cada declaração faz.
//Em um documento com propósito comercial não devemos usar tantos comentários, mas devido o propósito
//demonstrativo e explicativo deste documento se faz necessário o uso abundante de comentários

function q1() {
  let indice = parseInt(document.getElementById("q1_input").value); //define indice com o valor de input da questão 1
  let naoNumero = ""; //aviso caso o valor não seja númerico
  if (isNaN(indice)) {
    //isNaN avalia se indice é ou não número
    naoNumero = " *INDICE definido como 13*"; //define o aviso
    indice = 13; //define o valor para indice como avisado ao cliente no caso do input não ser numérico
  }
  let soma = 0;
  for (let k = 0; k < indice; k++) {
    //cria o valor k e testa ele do zero até o valor de indice somando 1 toda vez que ele for menor
    soma = soma + k; //soma o valor de k ao total de soma
  }
  let resposta = document.getElementById("q1_soma"); //identifica a posição da soma no documento HTML
  let referencia = document.getElementById("q1_indice"); //identifica a posição do indice no documento HTML
  referencia.innerText = indice + naoNumero; //define o valor de indice no documento HTML
  resposta.innerText = soma; //define o valor de soma no documento HTML
}

function q2() {
  let valorQ2 = parseInt(document.getElementById("q2_input").value); //define indice com o valor de input da questão 1
  let naoNumero = document.getElementById("q2_nnumero"); //aviso caso o valor não seja númerico
  if (isNaN(valorQ2)) {
    //isNaN avalia se valorQ2 é ou não número
    naoNumero.innerText = "*valor definido como 0*"; //define o aviso
    valorQ2 = 0; //define o valor como avisado ao cliente no caso do input não ser numérico
  } else {
    naoNumero.innerText = ""; //define o aviso
  }
  let posicao = 3; //informa a posição do número a ser conferido como iniciando na 3° já que os 3 primeiros números são 0, 1 e 1
  let valor1 = 0; //define o primeiro valor para a sequência
  let valor2 = 1; //define o segundo valor para a sequência
  let valor3; //define o futuro valor para a sequência
  let sequencia = document.getElementById("q2_sequencia"); //identifica a posição onde enviar a sequência depois de montada
  let fibona = "0, 1"; //define os 2 primeiros elementos da sequência
  let q2_resposta = document.getElementById("q2_resposta"); //informa onde posicionar a resposta
  let q2_posi = document.getElementById("q2_posi"); //informa a posição na tabela que o valor está próximo ou ocupa
  let q2_valor = document.getElementById("q2_valor"); //informa o valor do número mais próximo na sequência
  for (valor3 = 1; valor3 < valorQ2; posicao++) {
    //faz a verificação se o valor consultado é ou não maior que o próximo número da sequência
    valor3 = valor1 + valor2; //determina qual vai ser o número seguinte na sequência
    if (valor3 > valorQ2) {
      //confere se o próximo número é maior que o valor para ser verificado
      posicao = posicao - 1; //corrige a posição
      q2_resposta.innerText = "não é da"; //informa o texto da resposta
      q2_posi.innerText = "mais proxima dele é a " + posicao + "°"; //informa a posição
      q2_valor.innerText = "cujo valor é " + valor2; //informa o valor mais próximo
      sequencia.innerText = fibona; //informa o texto da resposta
    }
    valor1 = valor2; //redefine o primeiro valor
    valor2 = valor3; //redefine o segundo valor
    fibona = fibona + ", " + valor3; //redefine a sequência
    if (valor3 == valorQ2) {
      // confere se o próximo número é igual ao valor à ser verificado
      q2_resposta.innerText = "é da"; //informa a resposta
      q2_posi.innerText = "dele é a " + posicao + "°"; //informa a posição
      q2_valor.innerText = ""; //define o texto de valor próximo como nulo
      sequencia.innerText = fibona; //informa a sequência até o momento
    }
  }
  if (valorQ2 == 0) {
    //confere caso especial do valor a ser conferido ser igual à zero
    q2_resposta.innerText = "é da"; //informa resposta
    q2_posi.innerText = "dele é o 1º"; //informa posição
    q2_valor.innerText = ""; //define texto de valor próximo como nulo
    sequencia.innerText = "0"; //informa a sequência até o momento
  }
  if (valorQ2 == 1) {
    //confere caso especial do valor a ser conferido ser igual à 1
    q2_resposta.innerText = "é da"; //informa resposta
    q2_posi.innerText = "dele é a 2° e também a 3°"; //informa posição
    q2_valor.innerText = ""; //define texto de valor próximo como nulo
    sequencia.innerText = "0, 1, 1"; //informa a sequência até o momento
  }
}

function q3() {}
