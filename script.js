/* ====================================
   AGRINHO 2026 - AGROCONECTA 2030
   SCRIPT.JS
==================================== */

// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

window.addEventListener("load", () => {

    console.log("AgroConecta 2030 iniciado com sucesso!");

    setTimeout(() => {

        alert(
            "Bem-vindo ao AgroConecta 2030!\n\n" +
            "Conheça como a tecnologia pode conectar campo e cidade de forma sustentável."
        );

    }, 1000);

});

// ===============================
// BOTÃO HERO
// ===============================

const botaoHero = document.querySelector(".hero button");

if (botaoHero) {

    botaoHero.addEventListener("click", () => {

        document
            .querySelector("#solucoes")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}

// ===============================
// CONTADOR DE IMPACTO
// ===============================

function animarContador(id, valorFinal) {

    let valorAtual = 0;

    const elemento = document.getElementById(id);

    const velocidade = Math.ceil(valorFinal / 100);

    const contador = setInterval(() => {

        valorAtual += velocidade;

        if (valorAtual >= valorFinal) {

            valorAtual = valorFinal;
            clearInterval(contador);

        }

        elemento.textContent =
            valorAtual.toLocaleString("pt-BR");

    }, 25);

}

// ===============================
// OBSERVER
// ===============================

const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                animarContador("contadorProdutores", 5000);
                animarContador("contadorConsumidores", 12000);
                animarContador("contadorDesperdicio", 80);

                observador.disconnect();

            }

        });

    },

    {
        threshold: 0.5
    }

);

// ===============================
// SE EXISTIR A SEÇÃO
// ===============================

const impacto = document.querySelector("#impacto");

if (impacto) {
    observador.observe(impacto);
}

// ===============================
// DADOS DO PROJETO
// ===============================

const indicadores = [

    {
        titulo: "Produtores conectados",
        valor: 5000
    },

    {
        titulo: "Consumidores atendidos",
        valor: 12000
    },

    {
        titulo: "Redução de desperdício",
        valor: "80%"
    }

];

console.table(indicadores);

// ===============================
// FORMULÁRIO
// ===============================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome =
            document.querySelector("#nome").value;

        const email =
            document.querySelector("#email").value;

        const mensagem =
            document.querySelector("#mensagem").value;

        if (
            nome.trim() === "" ||
            email.trim() === ""
        ) {

            alert("Preencha todos os campos obrigatórios.");
            return;

        }

        const participante = {

            nome,
            email,
            mensagem,
            data: new Date().toLocaleDateString("pt-BR")

        };

        console.log(participante);

        alert(
            `Obrigado ${nome}!\n\nSua participação foi registrada.`
        );

        formulario.reset();

    });

}

// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.backgroundColor = "#f1fff1";

    });

    card.addEventListener("mouseleave", () => {

        card.style.backgroundColor = "#ffffff";

    });

});

// ===============================
// FRASES INSPIRADORAS
// ===============================

const frases = [

    "A tecnologia fortalece o campo.",
    "Sustentabilidade é investir no futuro.",
    "Campo e cidade crescem juntos.",
    "Inovação gera transformação social.",
    "Agricultura inteligente produz mais e preserva mais."

];

function exibirFraseAleatoria() {

    const indice =
        Math.floor(Math.random() * frases.length);

    console.log(
        "Mensagem Agrinho:",
        frases[indice]
    );

}

setInterval(exibirFraseAleatoria, 10000);

// ===============================
// RELÓGIO DIGITAL
// ===============================

function atualizarRelogio() {

    const agora = new Date();

    const hora =
        agora.toLocaleTimeString("pt-BR");

    const relogio =
        document.getElementById("relogio");

    if (relogio) {

        relogio.textContent = hora;

    }

}

setInterval(atualizarRelogio, 1000);

// ===============================
// TEMA ESCURO
// ===============================

const botaoTema =
    document.getElementById("tema");

if (botaoTema) {

    botaoTema.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

}

// ===============================
// ESTATÍSTICAS SIMULADAS
// ===============================

const producaoMensal = [

    450,
    520,
    610,
    700,
    850,
    950

];

const media =

    producaoMensal.reduce(
        (soma, valor) => soma + valor,
        0
    ) / producaoMensal.length;

console.log(
    `Produção média: ${media.toFixed(2)} toneladas`
);

// ===============================
// DATA ATUAL
// ===============================

const dataAtual = new Date();

console.log(
    "Projeto executado em:",
    dataAtual.toLocaleString("pt-BR")
);