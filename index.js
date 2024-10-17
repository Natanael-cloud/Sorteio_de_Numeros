function sortearNumero() {
  // Obtém os valores dos campos de entrada 'numeroInicial' e 'numeroFinal' e os converte para inteiros
  const numeroInicial = parseInt(document.getElementById('numeroInicial').value);
  const numeroFinal = parseInt(document.getElementById('numeroFinal').value);
  
  // Seleciona o elemento de resultado para exibir o número sorteado ou mensagens de erro
  const resultadoDiv = document.getElementById('resultado');

  // Verifica se os valores são válidos: se ambos são números e se o número inicial é menor que o número final
  if (isNaN(numeroInicial) || isNaN(numeroFinal) || numeroInicial >= numeroFinal) {
    // Se houver erro, exibe uma mensagem e termina a execução da função
    resultadoDiv.textContent = 'Por favor, insira um intervalo válido!';
    resultadoDiv.classList.add('show'); // Adiciona a classe para mostrar a mensagem
    return; // Interrompe a função caso haja um erro
  }

  // Gera um número aleatório dentro do intervalo especificado (entre numeroInicial e numeroFinal)
  const numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

  // Exibe o número sorteado no elemento 'resultado'
  resultadoDiv.textContent = `O número sorteado foi: ${numeroSorteado}`;
  resultadoDiv.classList.add('show'); // Mostra o resultado na tela

  // Chama a função para criar e animar os balões após o sorteio
  criarBaloes();
}

function criarBaloes() {
  // Seleciona o contêiner onde os balões serão adicionados
  const container = document.getElementById('baloes-container');

  // Limpa balões antigos (remove o conteúdo anterior do contêiner)
  container.innerHTML = '';

  // Cria 10 balões dinamicamente
  for (let i = 0; i < 10; i++) {
    // Cria um elemento <div> para representar um balão
    const balao = document.createElement('div');
    balao.classList.add('balao'); // Adiciona a classe 'balao' para aplicar o estilo do CSS

    // Define uma cor aleatória para o balão usando a função getRandomColor()
    balao.style.backgroundColor = getRandomColor();

    // Posiciona o balão aleatoriamente ao longo da largura da tela
    balao.style.left = `${Math.random() * 100}vw`; // Define a posição horizontal do balão

    // Adiciona o balão criado ao contêiner
    container.appendChild(balao);
  }
}

function getRandomColor() {
  // Gera uma cor hexadecimal aleatória (ex: #FF5733)
  const letters = '0123456789ABCDEF'; // Possíveis caracteres para cada dígito hexadecimal
  let color = '#'; // Começa com o símbolo de cor hexadecimal
  for (let i = 0; i < 6; i++) {
    // Adiciona 6 dígitos aleatórios (de 0 a F) para formar uma cor
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; // Retorna a cor gerada
}

