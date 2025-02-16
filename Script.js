//
//Documento contendo as funções usadas no documento Index.html
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

//As funções listas deste ponto em diante se referem a resolução da questão 3.
//Embora seja importante lembrar que quando se tem uma demanda mais vale ela estar resolvida do que
//perfeita devo dar atenção ao fato de que a proposta do teste prático é avaliar minha capacidade de pensar
//de forma lógica, criativa e eficiente para resolver as questões apresentadas.
//Levei em consideração que a 5° questão pede que evitemos o uso do method "reverse" e cheguei em 5 soluções
//distintas para a questão proposta.

async function coleta() {
  //coleta é uma função assíncrona, ou seja, precisa de resposta de um servidor
  const response = await fetch(
    "https://raw.githubusercontent.com/8BitsSpike/Target-Sistemas/main/dados.json"
  ); // a resposta que estamos aguardando vem desta parte, usando fetch podemos usar arquivos do tipo json vindo de API's,
  // servidores ou de repositórios
  const valoresBrutos = await response.json(); //ainda damos o comando de aguardo aqui para assegurar que o valor veio corretamente
  //e que foi devidamente convertido para o formato que precisamos
  for (let k = 0; k < 30; k++) {
    //usamos um loop for para contar as posições do array(lisata de itens) que recebemos
    let numeroDia = "valor_" + (k + 1); //usamos os valor k para definir o nome do elemento que vai receber o valor
    let valorDia = document.getElementById(numeroDia); //definimos a posição do elemento que queremos
    valorDia.value = valoresBrutos[k].valor; //informamos o valor que foi removido do elemento valor do objeto que estava dentro do array
  } //fazemos isso até que todos os valores tenham sido atualizados
}

function q311() {
  //A função q311 é a primeira proposta de resolução para a questão 3
  let apurado = []; //Nomeamos e definimos as variáveis para evitar problemas de inconsistência
  let posicao = []; //Quando a variável é nomeada e definida devemos usar a notação "literal"
  let montante = 0; //no caso de arrays usamos [], objetos usamos {}, strings usamos ""
  let media = 0; //para valores numéricos podemos usar algum valor que não afete o lógica do algorismo
  let lugar = " "; //Quando usamos a notação "literal" para definir nossas variáveis podemos deixar
  let diaCorrigido = " "; //elas em branco ou "vazias"
  let maior = " "; //Definir variáveis é importante para previnir que alguns mothodos como o "push"
  let menor = " "; //que é usado na construção do array permitindo você inserir novos valores sem ter
  let posiMaior; //que manualmente escrever um por um no array já na declaração do mesmo funcionem
  let posiMenor; //esse tipo de method é definido por tipo de dado, ou seja, não podemos usar
  let posiAcima; //o "push" em uma string, assim como não podemos usar "concat" em objetos ou números
  for (let k = 1; k < 30; k++) {
    //Definimos um loop for que vai verificar o valor k do 0 até 30
    let d = "valor_" + k; //sempre que passarmos por um valor k iremos definir uma variável d como sendo a id
    //do elemento dia que queremos, se não definirmos ela aqui dentro o valor definido na primeira volta iria
    //persistir no endereço de memória referente a variável d e isso poderia causar erros.
    let dia = document.getElementById(d).value; //a variável dia busca o valor no elemento de id= valor_k
    lugar = parseFloat(dia); //parseFloat converte para "Float", um formato de número com casas decimais
    if (isNaN(lugar)) {
      //caso o valor vindo da conversão parseFloat não for um número
      lugar = 0; //definimos ele como sendo zero.
    }
    if (lugar != 0) {
      //se tudo estiver certo até aqui e o resultado da conversão parseFloat for diferente de zero
      montante = montante + lugar; //somamos ele na variável montante usada para saber o total vendido no mês
      apurado.push(lugar); //inserimos os valor no array apurado, onde os valores de venda são guardados
      posicao.push(k); //e o dia na mesma posição no array posicao, assim podemos sempre saber de quando ele é
    }
    if (k == 29) {
      //quando chegamos no final da comparação
      media = montante / apurado.length; //definimos a variável media como sendo o total de vendas dividido pelos
    } //total de dias em que a venda não foi zero
  }
  for (let i = 0; i < apurado.length; i++) {
    //usamos outro loop for, agora comparando i com o total de dias com venda
    diaCorrigido = posicao[i]; //identificamos qual dia estamos avaliando
    if (apurado[i] > media) {
      //verificamos se o valor vendido foi maior que a média
      if (posiAcima != " ") {
        //se ele for maior e a string que contem os dias acima da média estiver com algo nela
        posiAcima += ", " + diaCorrigido; //poremos virgula e espaçamento adequado.
      } else {
        //caso ela esteja vazia
        posiAcima = diaCorrigido; //populamos ela diretamente com o dia que estamos olhando hoje, sem virgulas e espaço
      }
    } //caso o valor seja menor ele segue sem mudar a lista de dias acima da média
    if (diaCorrigido != posiMaior && apurado[i] == maior) {
      //conferimos se o valor é igual ao maior valor já existente
      posiMaior += ", " + diaCorrigido; //se for concatenamos ele com o dia já registrado usando virgula e espaçamento
    } //neste caso verificamos se o dia que estamos é diferente do que já temos anotado, isso evita repetição da data
    if (i != 0 && apurado[i] > maior) {
      //conferimos se o valor é maior que maior valor que já existente
      maior = apurado[i].toString(); //se ele for maior ele passará a ser o novo maior valor
      posiMaior = diaCorrigido; //e o dia que estamos vira o novo dia do maior valor
    } //justamente por conta dessa ultima declaração que verificamos antes se o dia do maior valor era diferente ou não
    if (i != 0 && apurado[i] < maior) {
      //conferimos se o valor é menor que maior valor que já existente
      if (menor == " ") {
        //se ele for temos que conferir se já existe um menor valor de venda
        menor = apurado[i].toString(); //se não tivemos o menor valor de venda definimos ele
        posiMenor = diaCorrigido; //e seu dia
      }
      if (menor == apurado[i] && diaCorrigido != posiMenor) {
        //caso dois dias tenham o menor valor
        posiMenor += ", " + diaCorrigido; //o novo dia é concatenado, mas o valor não precisa mudar
      } //mas isso só quando o dia que estamos verificando for diferente do dia de menor venda
      if (menor > apurado[i]) {
        //caso ele seja menor que o menor valor já anotado
        menor = apurado[i].toString(); //ele toma seu lugar
        posiMenor = diaCorrigido; //e seu dia é anotado no dia de menor venda
      }
    }
    if (i == 0) {
      //quando o i for zero temos um caso especial, ele é o primeiro dia avaliado
      maior = apurado[i].toString(); //por isso o valor aqui é o maior que temos inevitavelmente
      posiMaior = diaCorrigido; //e seu dia é registrado também
    }
  } //concluido o loop for temos a lista de dias acima da média, de maior venda e menor venda
  let dMenor = document.getElementById("dia_menor_valor1"); //definimos as posições para os valores
  let vMenor = document.getElementById("menor_valor_dia1"); //que iremos informar como resposta
  let dMaior = document.getElementById("dia_maior_valor1");
  let vMaior = document.getElementById("maior_valor_dia1");
  let dMedia = document.getElementById("dias_media1");
  let vMedia = document.getElementById("media_mensal1");
  dMedia.innerText = "nos dias: " + posiAcima; //dias acima da média sempre vão ser mais de um
  vMedia.innerText = media; //informamos os valores da média
  vMaior.innerText = maior; //do maior valor vendido
  vMenor.innerText = menor; //do menor
  if (typeof posiMaior == String) {
    //testamos para ver se temos mais de um dia com maior venda
    dMaior.innerText = "Os dias " + posiMaior + " foram os dias"; //usamos plural caso sim
  } else dMaior.innerText = "O dia " + posiMaior + " foi o dia"; //singular caso não
  if (typeof posiMenor == String) {
    //testamos para ver se temos mais de um dia com menor venda
    dMenor.innerText = "Os dias " + posiMenor + " foram os dias"; //usamos plural caso sim
  } else dMenor.innerText = "O dia " + posiMenor + " foi o dia"; //singular caso não
}

function q312() {
  //A função q312 é a segunda proposta de resolução para a questão 3
  let apurado = []; //como na função q311 tambem definimos e nomeamos as variáveis importantes
  let posicao = []; //no caso desta função, q312, é ainda mais importante já que iremos usar mais methodos
  let arrayValores = []; //e eles só funcionam em array.
  let posiAcima = [];
  let armazen = [];
  let montante = 0;
  let media = 0;
  let lugar = " ";
  let maior = " ";
  let menor = " ";
  let posiMaior = " ";
  let posiMenor = " ";
  let posAcima;
  let diaCorrigido = " ";
  for (let k = 1; k < 30; k++) {
    //Definimos um loop for que vai verificar o valor k do 0 até 30
    let d = "valor_" + k; //sempre que passarmos por um valor k iremos definir uma variável d como sendo a id
    //do elemento dia que queremos, se não definirmos ela aqui dentro o valor definido na primeira volta iria
    //persistir no endereço de memória referente a variável d e isso poderia causar erros.
    let dia = document.getElementById(d).value; //a variável dia busca o valor no elemento de id= valor_k
    lugar = parseFloat(dia); //parseFloat converte para "Float", um formato de número com casas decimais
    if (isNaN(lugar)) {
      //caso o valor vindo da conversão parseFloat não for um número
      lugar = 0; //definimos ele como sendo zero.
    }
    if (lugar != 0) {
      //se tudo estiver certo até aqui e o resultado da conversão parseFloat for diferente de zero
      montante = montante + lugar; //somamos ele na variável montante usada para saber o total vendido no mês
      apurado.push(lugar); //inserimos os valor no array apurado, onde os valores de venda são guardados
      posicao.push(k); //e o dia na mesma posição no array posicao, assim podemos sempre saber de quando ele é
    }
    if (k == 29) {
      //quando chegamos no final da comparação
      media = montante / apurado.length; //definimos a variável media como sendo o total de vendas dividido pelos
      //total de dias em que a venda não foi zero
      armazen = apurado.slice(); //criamos um novo array para conter os valores de apurado que não aponte para
    } //a mesma posição na memoria, se informarmos que armazen = apurado sem usar o method "slice"
    //mesmo que o method esteja vazio de mudanças a gualdade inferida iria informar ao codigo que os dois podem
  } //ter o mesmo endereço, daí se mudarmos armazen de alguma forma iriamos também mudar o array apurado
  arrayValores = armazen.sort(
    function (a, b) {
      //Usamos o method sort para organizar arrays, normalmente ele
      return a - b; //é usado paraorganizar strings dentro de um array, mas usando a função de comparação (a,b)
    } //ele compara dois valores do array, essa comparação é do tipo a - b, os rezultados podem ser, negativos, zero
  ); //e positivos. Quando o resultado é negativo b é maios que a e por isso vem depois, quando é zero b=a então não //importa a ordem mas quando é positivo sabemos que b é menor que a e por isso deve vir na frente, assim o method
  //sort faz a organização crescente dos valores do array
  maior = arrayValores[arrayValores.length - 1]; //a ultima posição do array é o maior valor
  menor = arrayValores[0]; //a primeira o menor
  posiMaior = posicao[apurado.indexOf(maior)]; //usando o method "indexOf" achamos o lugar dele no array
  posiMenor = posicao[apurado.indexOf(menor)]; //e assim definimos a posição do dia que eles representam
  function maiorQueMedia(value, index, array) {
    //usamos a mesma ideia do sort para pegar valores de venda
    return value > media; //meiores que a média e converter eles em um array, mas nesse caso ela vai nos
  } //dar o primeiro e menor valor que é maior que a média
  let primeiroMedia = arrayValores.find(maiorQueMedia); //usamos essa nova função no method "find"
  let posiPrimeiroMedia = arrayValores.indexOf(primeiroMedia); //e o method "indexOf" para saber onde ele
  let totalMedia = arrayValores.length - posiPrimeiroMedia; //está começando para comparar com o tamanho do
  for (let i = 0; i < totalMedia; i++) {
    //array em um loop for
    diaCorrigido =
      posicao[apurado.indexOf(arrayValores[posiPrimeiroMedia + i])];
    posiAcima.push(diaCorrigido); //assim colocamos todos os dias que tem valor maior que a média num array
  }
  posAcima = posiAcima.sort(
    function (a, b) {
      //usando novamente o method "sort" organizamos eles em ordem
      return a - b; //crescente do menor para o maior.
    } //não podemos usar o method sem declarar ele, mas podemos nos aproveitar da declaração de igualdade
  ); //para modificar o array que iramos usar diretamente
  let dMenor = document.getElementById("dia_menor_valor2"); //apontamos as posições node vamos inserir as
  let vMenor = document.getElementById("menor_valor_dia2"); //respostas que obtivemos
  let dMaior = document.getElementById("dia_maior_valor2");
  let vMaior = document.getElementById("maior_valor_dia2");
  let dMedia = document.getElementById("dias_media2");
  let vMedia = document.getElementById("media_mensal2"); //por ultimo
  dMedia.innerText = "nos dias: " + posiAcima; //declaramos os valores de venda e os dias com seus valores
  vMedia.innerText = media;
  vMaior.innerText = maior;
  vMenor.innerText = menor;
  dMaior.innerText = "O dia " + posiMaior + " foi o dia";
  dMenor.innerText = "O dia " + posiMenor + " foi o dia";
}

function q313() {
  //A função q313 é a terceira proposta de resolução para a questão 3
  let apurado = []; //assim como nas funções anteriores começamos nomeando e definindo as variáveis
  let posicao = []; //dessa vez iremos usar mais methodos e por isso teremos mais arrays
  let acima = [];
  let posiAcima = [];
  let diaCorrigido = [];
  let montante = 0;
  let media = 0;
  let lugar = " ";
  let maior = " ";
  let menor = " ";
  let posiMaior = " ";
  let posiMenor = " ";
  for (let k = 1; k < 30; k++) {
    //novamente usamos um loop for para coletar os valores de cada dia
    let d = "valor_" + k;
    let dia = document.getElementById(d).value;
    lugar = parseFloat(dia);
    if (isNaN(lugar)) {
      lugar = 0;
    }
    if (lugar != 0) {
      montante = montante + lugar;
      apurado.push(lugar);
      posicao.push(k);
    }
    if (k == 29) {
      media = montante / apurado.length;
    }
  }
  function apuradoMax(array) {
    //definimos um method que usa arrays e identifica o maior valor
    return Math.max.apply(null, array); //usamos o method "Math.max" para compara valores em uma
  } //string e forçamos o array a ser enterpretado como uma string
  function apuradoMin(array) {
    //definimos um method que usa arrays e identifica o menor valor
    return Math.min.apply(null, array); //usamos o method "Math.min" para compara valores em uma
  } //string e forçamos o array a ser enterpretado como uma string
  maior = apuradoMax(apurado); //usamos o method que criamos no array com os valores e teremos o maior
  menor = apuradoMin(apurado); //usamos o method que criamos no array com os valores e teremos o menor
  posiMaior = posicao[apurado.indexOf(maior)]; //usamos o mehtod "indexOf" para achar o dia do valor maior
  posiMenor = posicao[apurado.indexOf(menor)]; //usamos o mehtod "indexOf" para achar o dia do valor menor
  function passaDaMedia(array) {
    //montamos um method para criar um array quando o valor for maior que a
    return array > media; //média
  }
  acima = apurado.filter(passaDaMedia); //usamos o method "filter" para separar os valores segundo a função
  acima.forEach((element) => {
    //depois usamos o method "forEach" para converter os valores em dias
    diaCorrigido.push(posicao[apurado.indexOf(element)]);
  });
  posiAcima = diaCorrigido.sort(function (a, b) {
    //usamos o method "sort" para por em ordem crescente
    return a - b;
  });
  let dMenor = document.getElementById("dia_menor_valor3"); //definimos as posições onde os valores vão
  let vMenor = document.getElementById("menor_valor_dia3");
  let dMaior = document.getElementById("dia_maior_valor3");
  let vMaior = document.getElementById("maior_valor_dia3");
  let dMedia = document.getElementById("dias_media3");
  let vMedia = document.getElementById("media_mensal3");
  dMedia.innerText = "nos dias: " + posiAcima; //e por ultimo informamos os valores
  vMedia.innerText = media;
  vMaior.innerText = maior;
  vMenor.innerText = menor;
  dMaior.innerText = "O dia " + posiMaior + " foi o dia";
  dMenor.innerText = "O dia " + posiMenor + " foi o dia";
}

function q321() {
  //A função q321 é a quarta proposta de resolução para a questão 3
  let vendas = []; //novamente nomeamos e definimos as variáveis que iremos usar
  let media = 0;
  let maior = 0;
  let menor = 0;
  let montante = 0;
  let posiMaior;
  let posiMenor = " ";
  let posiAcima = " ";
  for (let k = 1; k < 30; k++) {
    //usamos um for loop para montar os objetos
    let d = "valor_" + k;
    let dia = document.getElementById(d).value;
    let lugar = parseFloat(dia);
    if (isNaN(lugar)) {
      lugar = 0;
    }
    if (lugar != 0) {
      montante = montante + lugar;
      let elemento = {}; //cada objeto tem que ser definido dentro da função
      elemento.valor = lugar; //se ele for definido antes estaremos sempre modificando o mesmo objeto
      elemento.dia = k; //e os valores para as posições dia e valor iriam ser iguais ao ultimo dia apenas
      vendas.push(elemento); //depois colocamos esse objeto dentro do array
    }
    if (k == 29) {
      media = montante / vendas.length;
    }
  }
  for (let i = 0; i < vendas.length; i++) {
    //criamos outro for loop para conferir os valores internos
    let diaCorrigido = vendas[i].dia; //como é mais facil escrever diaCorrido que vendas[i].dia indexei o valor
    if (vendas[i].valor >= media) {
      //comparamos os valores dos objetos internos do array
      if (posiAcima != " ") {
        //quando já existir registro de dia na variável concatenamos virgulas e espaços
        posiAcima += ", " + diaCorrigido; //alem do dia
      } else {
        //se não tiver ele é o primeiro dia na variável
        posiAcima = diaCorrigido;
      }
    }
    if (maior == 0) {
      //quando for o primeiro número a ser comparado ele será o maior
      maior = vendas[i].valor;
      posiMaior = diaCorrigido; //e seu dia será registrado
    }
    if (vendas[i].valor == maior && posiMaior != diaCorrigido) {
      //no caso de existir um valor igual ao maior
      posiMaior += ", " + diaCorrigido; //seu dia é concatenado ao dia do primeiro com virgula e espaço
    }
    if (vendas[i].valor > maior && posiMaior != diaCorrigido) {
      //se ele for maior que o maior até então
      maior = vendas[i].valor; //ele toma seu lugar
      posiMaior = diaCorrigido; //e sua posição é registrada
    }
    if (vendas[i].valor < maior) {
      //se ele for menor
      if (vendas[i].valor < menor) {
        //ele pode ser o menor de todos os valores
        menor = vendas[i].valor; //ele toma seu lugar
        posiMenor = diaCorrigido; //e seu dia é registrado
      }
      if (vendas[i].valor == menor && posiMenor != diaCorrigido) {
        //igual ao menor até então
        posiMenor += ", " + diaCorrigido; //seu dia será concatenado com virgula e espaço
      }
      if (menor == 0 && posiMenor != diaCorrigido) {
        //ou o primeiro menor valor registrado
        menor = vendas[i].valor; //ele se torna o menor valor
        posiMenor = diaCorrigido; //e seu dia é registrado
      }
    }
  }
  let dMenor = document.getElementById("dia_menor_valor4"); //identificamos as posições onde vamos passar
  let vMenor = document.getElementById("menor_valor_dia4"); //os valores resposta
  let dMaior = document.getElementById("dia_maior_valor4");
  let vMaior = document.getElementById("maior_valor_dia4");
  let dMedia = document.getElementById("dias_media4");
  let vMedia = document.getElementById("media_mensal4");
  dMedia.innerText = "nos dias: " + posiAcima; //passamos os dias acima da média em valor de venda
  vMedia.innerText = media; //os valores de média, menor venda e maior venda
  vMaior.innerText = maior;
  vMenor.innerText = menor;
  if (typeof posiMaior == String) {
    //verificamos de temos mais de um dia com o maior valor
    dMaior.innerText = "Os dias " + posiMaior + " foram os dias"; //informamos eles
  } else dMaior.innerText = "O dia " + posiMaior + " foi o dia"; //ou informamos ele
  if (typeof posiMenor == String) {
    //verificamos de temos mais de um dia com o menor valor
    dMenor.innerText = "Os dias " + posiMenor + " foram os dias"; //informamos eles
  } else dMenor.innerText = "O dia " + posiMenor + " foi o dia"; //ou informamos ele
}

function q322() {
  //A função q322 é a quinta proposta de resolução para a questão 3
  let vendas = []; //iremos novamente nomear e definir as variáveis que usaremos
  let media = 0;
  let maior = 0;
  let menor = 0;
  let montante = 0;
  let posiMaior;
  let posiMenor = " ";
  let posiAcima = " ";
  for (let k = 1; k < 30; k++) {
    //usamos um for loop para pegar os valores dos dias
    let d = "valor_" + k;
    let dia = document.getElementById(d).value;
    let lugar = parseFloat(dia);
    if (isNaN(lugar)) {
      lugar = 0;
    }
    if (lugar != 0) {
      //se eles não forem dias sem vendas montamos um objeto com ele
      montante = montante + lugar;
      let elemento = {}; //criado aqui na função para que seus valores sejam corretos
      elemento.valor = lugar;
      elemento.dia = k;
      vendas.push(elemento); //colocamos ele dentro do array
    }
    if (k == 29) {
      media = montante / vendas.length;
    }
  }
  function maiorQueMedia({ valor }) {
    //criamos uma função que vai separar em dois arrays
    return valor > media ? "sim" : "nao"; //os que são maiores e os que não são maiores que a média
  }
  let acima = Object.groupBy(vendas, maiorQueMedia); //usando o method "groupBy" o array é separado
  //de acordo com a função definida antes, ou seja, em dois arrays o "sim" e o "não"
  for (let [x, y] of acima.sim.entries()) {
    //usando um for loop nos elementos do array "sim"
    posiAcima += ", " + y.dia; //concatenamos os dias em que eles ocorrem com virgulas e espaços
  }
  let organizado = vendas.sort(function (a, b) {
    //usamos um method "sort" definido para objetos no array
    return a.valor - b.valor;
  });
  menor = organizado[0].valor; //o menor valor vai estar organizado em primeiro lugar
  posiMenor = organizado[0].dia; //assim como seu dia
  maior = organizado[organizado.length - 1].valor; //o maior valor vai estar organizado em ultimo lugar
  posiMaior = organizado[organizado.length - 1].dia; //assim como seu dia
  let dMenor = document.getElementById("dia_menor_valor5"); //definimos as posições onde vamos informar os
  let vMenor = document.getElementById("menor_valor_dia5"); //valores respostas
  let dMaior = document.getElementById("dia_maior_valor5");
  let vMaior = document.getElementById("maior_valor_dia5");
  let dMedia = document.getElementById("dias_media5");
  let vMedia = document.getElementById("media_mensal5");
  dMedia.innerText = "nos dias: " + posiAcima.substring(2, posiAcima.length); //usamos o method "substring"
  vMedia.innerText = media; //para cortar a primeira virgula e o primeiro espaço da lista de dias com venda
  vMaior.innerText = maior; //maior que a média
  vMenor.innerText = menor; //depois informamos os valores de média, menor venda e maior venda
  dMaior.innerText = "O dia " + posiMaior + " foi o dia"; //e o dia de maior venda
  dMenor.innerText = "O dia " + posiMenor + " foi o dia"; //e menor venda
}

function novalinha() {
  //A função novalinha permite a criação de novos espaços para mais entradas de valores
  let espaco = document.getElementById("espaco"); //identificamos o elemento onde vamos colocar as nova linha
  let contagem = espaco.childElementCount; //contamos seus "elementos filhos" para saber aonde por a nova linha
  let n = contagem; //o uso da variável n é para facilitar a identificação da posição da nova linha
  espaco.innerHTML +=
    '<div class="alinha-horizontal"><div class="estado"><label for="estado_' +
    n +
    '" hidden="hidden">a</label><textarea id="estado_' +
    n +
    '" rows="1" cols="6" maxlength="6" placeholder="---"></textarea></div><div class="venda"><label for="vendas_' +
    n +
    '" hidden="hidden">a</label><textarea id="vendas_' +
    n +
    '" rows="1" cols="22" maxlength="22" placeholder="000"></textarea></div><div class="percentual"><span id="percentual_' +
    n +
    '"></span></div></div>';
  //a linha anterior inclui um elemento html com as caracteristicas corretas para a nova linha e com os identificadores
  //atualizados permitindo identificarmos os elementos corretos na hora que formos chamar por eles
}

function q4() {
  //A função q4 resolve a 4° questão calculando a participação nas vendas totais em percentual
  let espaco = document.getElementById("espaco"); //definimos de onde iremos buscar os elementos
  let children = espaco.childElementCount; //contamos quandos "elementos filhos" temos
  let totalVendas = 0; //definimos a variável para o total de vendas
  for (let k = 1; k < children; k++) {
    //usamos um for loop para identificar cada elemento filho
    let nome = "vendas_" + k; //criamos o nome do elemento que vamos usar
    let ref = document.getElementById(nome); //fazemos uma variável que contem sua posição
    let vendas = parseFloat(ref.value); //tentamos tornalo um valor mais preciso possível
    if (ref.value.length === 0 || isNaN(vendas)) {
      //caso o usuário não tenha definido valor ou o valor for texto
      vendas = parseFloat(ref.getAttribute("placeholder")); //usamos o valor informado no "placeholder"
    }
    totalVendas = totalVendas + vendas; //depois somamos o valor achado no total de vendas
  }
  let posiTotal = document.getElementById("vendas_final"); //achamos onde informar o total de vendas
  posiTotal.innerText = totalVendas; //e passamos o valor para a posição correta
  for (let i = 1; i < children; i++) {
    //criamos mais um for loop para conferir os lugares novamente
    let nome = "vendas_" + i; //usamos o mesmo nome
    let sobreNome = "percentual_" + i; //mas desta vez criamos o nome da posição onde o percentual vai entrar
    let percent = document.getElementById(sobreNome); //e achamos sua posição
    let ref = document.getElementById(nome); //novamente identificamos a posição
    let vendas = parseFloat(ref.value); //e tentamos converter em número
    if (ref.value.length === 0 || isNaN(vendas)) {
      //conferimos se o usuário informou algo naquela posição
      vendas = parseFloat(ref.getAttribute("placeholder")); //conferimos o valor do placeholder caso não
    }
    let percentual = ((vendas / totalVendas) * 100).toFixed(2); //calculamos a participação no total de vendas
    percent.innerText = percentual + "%"; //e informamos na posição correta com o sinal de % concatenado nele
  }
}

function q51() {
  let element = document.getElementById("q5_input1");
  let fraseEnviada = element.value;
  if (fraseEnviada.length === 0) {
    fraseEnviada = element.getAttribute("placeholder");
  }
  let tamanho = fraseEnviada.length;
  let fraseInvertida = " ";
  for (let k = tamanho; k > 0; k--) {
    fraseInvertida += fraseEnviada.charAt(k - 1);
  }
  let retorno = document.getElementById("retorno_q51");
  retorno.innerText = fraseInvertida;
}

function q52() {
  let element = document.getElementById("q5_input2");
  let fraseEnviada = element.value;
  if (fraseEnviada.length === 0) {
    fraseEnviada = element.getAttribute("placeholder");
  }
  let tamanho = fraseEnviada.length;
  console.log(tamanho, typeof tamanho, fraseEnviada);
  let fraseInvertida = " ";
  for (let k = tamanho; k > 0; k--) {
    fraseInvertida += fraseEnviada.substring(k - 1, k);
  }
  console.log(fraseInvertida);
  let retorno = document.getElementById("retorno_q52");
  retorno.innerText = fraseInvertida;
}

function colapso(id) {
  let elemento = document.getElementById(id);
  let tamanho = elemento.style.height;
  if (tamanho.length == 0 || tamanho == "40px") {
    elemento.style.height = "auto";
  } else {
    elemento.style.height = "40px";
  }
}
