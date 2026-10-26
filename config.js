// =====================================================================
// CONFIGURAÇÃO DO FORMULÁRIO
// Tudo que muda de um cliente para outro fica neste arquivo.
// A chave e os códigos da Bolten NÃO ficam aqui: eles vão nas variáveis
// do EasyPanel (veja COMO-CRIAR-PARA-CLIENTE.md).
// =====================================================================

module.exports = {
  // Nome da empresa (aparece no topo, ao lado da logo)
  empresa: "Dra. Priscilla Cerqueira Moura",

  // Título da aba do navegador. Para usar o nome da empresa, use:  tituloAba: null,
  tituloAba: "Atendimento jurídico | Dra. Priscilla Cerqueira Moura",

  // Arquivo da logo, dentro da pasta public/. Sem logo (só o nome no topo), use:  logo: null,
  logo: null,

  // Cores do formulário (use as cores da logo do cliente)
  cores: {
    principal: "#f97316", // botões, destaques e opções marcadas
    principalHover: "#ea580c", // botão ao passar o mouse (um tom mais escuro da principal)
    destaque: "#fb923c", // segunda cor: barra de progresso, brilho do fundo e ✓ final
    fundo: "#fff7ed", // fundo da página
    selecionadaFundo: "#ffedd5", // fundo da opção marcada, dos selos e do botão Voltar
    texto: "#1c1917", // títulos e textos
    textoSecundario: "#57534e", // textos de apoio
    borda: "#fed7aa", // bordas dos campos e opções
  },

  // Textos da tela de abertura, dos botões e da tela final
  textos: {
    titulo: "Recebeu ou pode receber uma medida protetiva?",
    subtitulo:
      "Responda algumas perguntas rápidas para verificarmos a possibilidade de atendimento jurídico particular.",
    selos: ["Leva 1 minuto", "Atendimento particular"], // pode ser [] para não mostrar selos
    botaoComecar: "Começar",
    botaoContinuar: "Continuar →",
    botaoVoltar: "← Voltar",
    avisoMultipla: "Você pode marcar mais de uma opção.",

    // Mensagens finais quando HÁ qualificação
    finalQualificado:
      "Recebemos suas informações. Para dar continuidade ao atendimento, fale com a Dra. Priscilla pelo WhatsApp.",
    finalNaoQualificado:
      "Agradecemos o seu contato. Neste momento, não será possível dar continuidade à solicitação por este canal.",

    // Mensagem final quando NÃO HÁ qualificação (qualificacao: null)
    final: "Recebemos suas informações. Para dar continuidade ao atendimento, fale com a Dra. Priscilla pelo WhatsApp.",
  },

  // Perguntas, na ordem em que aparecem (quantas quiser).
  // - id: um nome curto, sem espaços nem acentos (usado em "contato" e "qualificacao")
  // - tipo: "texto", "whatsapp", "email", "escolha" (uma resposta) ou "multipla" (várias respostas)
  // - pergunta: o texto mostrado na tela
  // - opcoes: só para "escolha" e "multipla"
  perguntas: [
    {
      id: "situacao",
      tipo: "escolha",
      pergunta: "Qual é a sua situação atual?",
      opcoes: [
        "Já recebi uma medida protetiva contra mim.",
        "Existe um pedido de medida protetiva contra mim.",
        "Acredito que posso receber uma medida protetiva.",
        "Quero apenas informações sobre o assunto.",
      ],
    },
    {
      id: "preocupacao",
      tipo: "escolha",
      pergunta: "O que mais preocupa você nessa situação?",
      opcoes: [
        "As restrições e consequências da medida protetiva.",
        "Não saber como agir ou quais são meus direitos.",
        "A possibilidade de a situação se agravar.",
        "Quero entender melhor como funciona.",
      ],
    },
    {
      id: "prazo",
      tipo: "escolha",
      pergunta: "Quando pretende buscar assistência jurídica?",
      opcoes: [
        "Quero contratar uma advogada o quanto antes.",
        "Pretendo contratar nos próximos 7 dias.",
        "Ainda estou avaliando a contratação.",
        "Não pretendo contratar neste momento.",
      ],
    },
    {
      id: "pagamento",
      tipo: "escolha",
      pergunta: "Qual condição de pagamento seria viável para você?",
      opcoes: [
        "Tenho disponibilidade para pagar à vista, conforme os honorários apresentados.",
        "Consigo assumir parcelas a partir de R$ 500 mensais.",
        "Preciso conhecer os valores antes de confirmar.",
        "Não tenho disponibilidade financeira atualmente.",
      ],
    },
    { id: "nome", tipo: "texto", pergunta: "Qual é o seu nome?" },
    { id: "whatsapp", tipo: "whatsapp", pergunta: "Qual é o seu WhatsApp?" },
  ],

  // Quais perguntas vão para o contato na Bolten.
  // À esquerda: nome EXATO do campo do contato na Bolten. À direita: o id da pergunta.
  contato: {
    Nome: "nome",
    Telefone: "whatsapp",
  },

  // Qualificação: o lead é NÃO QUALIFICADO se responder alguma das opções listadas.
  // Formato: { id_da_pergunta: ["opção que desqualifica", ...], ... }
  // Para não ter qualificação, use:  qualificacao: null,
  qualificacao: {
    desqualificaSe: {
      situacao: ["Quero apenas informações sobre o assunto."],
      prazo: ["Não pretendo contratar neste momento."],
      pagamento: ["Não tenho disponibilidade financeira atualmente."],
    },
  },

  // Código do pixel da Meta. Para não ter pixel, use:  pixelMeta: null,
  pixelMeta: "959018970525443",

  // Botão de WhatsApp na tela final. Com qualificação, só o qualificado vê o botão.
  // Ao clicar, o pixel registra o evento "Contact" (se houver pixel).
  // Para não ter botão, use:  whatsapp: null,
  whatsapp: {
    numero: "5527998737944", // com 55 e DDD, só números
    mensagem: "Olá, Dra. Priscilla. Preenchi o formulário e gostaria de dar continuidade ao atendimento.",
    textoBotao: "Falar com a Dra. Priscilla →",
  },
};
