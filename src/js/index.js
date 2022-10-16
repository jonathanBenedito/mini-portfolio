<<<<<<< HEAD
const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
  aba.addEventListener("click", function () {
    
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  })
})

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");
  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
  const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
  informacaoAserMostrada.classList.add("selecionado");
=======
const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
  aba.addEventListener("click", function () {
    
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  })
})

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");
  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
  const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
  informacaoAserMostrada.classList.add("selecionado");
>>>>>>> 0a1d3449a737478b51974285fb1dce5e6351d7ab
}