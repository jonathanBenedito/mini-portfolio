const slider = document.querySelector("#slider");
const slides = slider.querySelectorAll(".slide");
const quantiaSlides = slides.length;
const bulletsContainer = slider.querySelector(".bullets-container");
const botaoEsquerdo = slider.querySelector("#esquerdo");
const botaoDireito = slider.querySelector("#direito");
let index = 0;


for(let i = 0; i < slides.length; i++) {
    const bullet = document.createElement('span');
    
    bullet.classList.add("bullet");
    bullet.addEventListener("click", function () {
        mostrarSlide(i);
        ativarBullet(i);
    })
    bulletsContainer.appendChild(bullet);
}

ativarBullet(0);

botaoEsquerdo.addEventListener("click", function () {   
    if (index > 0) {
        slides[index].classList.remove("ativo");
        index--;
        slides[index].classList.add("ativo");
        ativarBullet(index);

        checarBotaoDireito();
        checarBotaoEsquerdo();
    }
})

botaoDireito.addEventListener("click", function () {
    if (index < quantiaSlides - 1) {
        slides[index].classList.remove("ativo");
        index++;
        slides[index].classList.add("ativo");
        ativarBullet(index);

        checarBotaoDireito();
        checarBotaoEsquerdo();
    }
})

function mostrarSlide(id) {
    slides[index].classList.remove("ativo");
    index = id;
    slides[index].classList.add("ativo");

    checarBotaoDireito();
    checarBotaoEsquerdo();
}

function ativarBullet(id) {
    const bullets = slider.querySelectorAll(".bullet");

    for(let i = 0; i < bullets.length; i++) {
        if (i == id) {
            bullets[id].classList.add("ativo");
        } else {
            bullets[i].classList.remove("ativo");
        }
    }     
}

function checarBotaoEsquerdo() {
    if (index > 0) {
        botaoEsquerdo.classList.remove("desativado");
    } else if (index == 0) {
        botaoEsquerdo.classList.add("desativado");
    }
}

function checarBotaoDireito() {
    if (index < quantiaSlides - 1) {
        botaoDireito.classList.remove("desativado");
    } else if (index == quantiaSlides - 1) {
        botaoDireito.classList.add("desativado");
    }
}


