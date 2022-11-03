const projeto = document.getElementsByClassName("projetos");
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let projetoAtual = 0;

setaAvancar.addEventListener("click", function () {
    if(projetoAtual === projeto.length - 1) {
        return;
    }
    esconderProjetoAberto();

    projetoAtual++;

    projeto[projetoAtual].classList.add("mostrar");

    mostrarOuEsconderSetas();
})

setaVoltar.addEventListener("click", function () {

    if (projetoAtual === 0) {
        return;
    }

    projetoAtual--;

    esconderProjetoAberto();
    mostrarProjeto();
    mostrarOuEsconderSetas();

})

function mostrarProjeto() {
    projeto[projetoAtual].classList.add("mostrar");
}

function esconderProjetoAberto() {
    const projetoAberto = document.querySelector(".mostrar");
    projetoAberto.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
    const naoEhOPrimeiroProjeto = projetoAtual !== 0;
    if (naoEhOPrimeiroProjeto) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chegouNoUltimoProjeto = projetoAtual !== 0 && projetoAtual === projeto.length - 1;
    if (chegouNoUltimoProjeto) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }
}
