const caixa_Principal = document.querySelector(".caixa-principal");
const caixa_Perguntas = document.querySelector(".caixa-perguntas");
const caixa_Alternativas = document.querySelector(".caixa-alternativas");
const caixa_Resultados = document.querySelector(".caixa-resultados");
const texto_Resultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Democracia no Brasil, ela existe mesmo?",
        alternativas: [
            {
                texto: "Não, existem muitas fraudes e má conduta nas eleições e em nossos governos",
                afirmacao: "Acredito que o Brasil tem que melhorar muito na nossa democracia, somos um país que não existe conhecimento politico algum, nós deixamos os nossos direitos serem levados pela falta de consciência e  não damos a devida importância.",
            },

            {

                texto: "Sim, todos nós temos acesso aos mesmos conhecimentos politicos",
                afirmação: "No Brasil existe democracia, pois todos tem os mesmos direitos e sabemos das nossas responsabilidades comos eleitores.",

            },
        ]
    },

    {
        enunciado: "Nós nos comprometemos com as eleições? Estudamos nossos candidatos ou nem conhecemos quem colocamos em nosso poder politico.",
        alternativas: [
            {
                texto: "Acredito que existe uma parte da população que não saiba qual é a nossa responsabilidade como eleitores, então nós não nos comprometemos.",
                afirmacao: "Somos grandes irresponsáveis com as eleições e por conta disso, a nossa justiça eleitoral não consegue ser 100% justa e transparente."
            },

            {
                texto: "Nossa população se compromete sim",
                afirmacao: "Os brasileiros dão a devida importância para a eleições,"
            },
        ]
    },

    {
        enunciado: "Você acha que no Brasil existe Conhecimento Politico para toda a sociedade?",
        alternativas: [
            {
                texto: "Não, até porque existe as grandes diferenças sociais, e não conseguimos dicernir a tamanha importancia do conhecimento politico .",
                afirmacao: "O conhecimento politico abre um amplo leque, as classes sociais mais pobre não tem o mesmo acesso a informações do que as mais ricas, não conseguem nem diferenciar quais são as noticias verdadeiras."
            },

            {
                texto: "Sim, pois todos temos o mesmo acesso as informações",
                afirmacao: "o conhecimento se busca, todos temos o mesmo acesso a informações, não existe privilégios"
            }
        ]
    }
];

let perg_atual = 0;
let pergunta_atual;
let historia_final = "";

function mostra_pergunta() {
    if (perg_atual >= perguntas.length) {
        mostra_resultado();
        return;
    };
    pergunta_atual = perguntas[perg_atual]
    caixa_Perguntas.textContent = perguntas[0].enunciado
    caixa_Alternativas.textContent = "";
    texto_Resultado.textContent = "";
    mostra_alternativas();
};

mostra_pergunta();


function mostra_alternativas() {
    for (const alternativa of pergunta_atual.alternativas) {
        const botao_alternativas = document.createElement("button")
        botao_alternativas.textContent = alternativa.texto;
        botao_alternativas.addEventListener("click", () => resposta_selecionada(alternativa));
        caixa_Alternativas.appendChild(botao_alternativas);

    };
};

function resposta_selecionada(opcao_selecionada) {
    const afirmacao = opcao_selecionada.afirmacao;
    historia_final += afirmacao + " ";
    perg_atual++;
    mostra_pergunta();
};

function mostra_resultado() {
    caixa_Perguntas.textContent = "em 2024...";
    texto_Resultado.textContent = historia_final;
    caixa_Alternativas.textContent = "";
};
