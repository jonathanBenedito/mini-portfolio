const abas = document.querySelectorAll(".aba");
const abasExpansiveis = document.querySelectorAll(".expansivel");
const conteudo = document.querySelector(".conteudo");
const minhasInformacoes = document.querySelector(".minhas-informacoes");

abas.forEach(aba => {
  aba.addEventListener("click", function () {
    
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  })
})

abasExpansiveis.forEach(aba => {
  aba.addEventListener("click", function () {

    if(conteudo.classList.contains("expandido")) {
      return;
    }
      
    expandirAba();
  })
})

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionado");
  conteudo.classList.remove("expandido");
  minhasInformacoes.classList.remove("escondido");
  abaSelecionada.classList.remove("selecionado");
  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
  const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
  informacaoAserMostrada.classList.add("selecionado");
}

function expandirAba() {
  conteudo.classList.add("expandido");
  minhasInformacoes.classList.add("escondido");
}