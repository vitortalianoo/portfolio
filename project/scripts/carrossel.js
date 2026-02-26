const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach((carrossel) => {

    const slides = carrossel.querySelector(".slides");
    const btnEsquerda = carrossel.querySelector(".esquerda");
    const btnDireita = carrossel.querySelector(".direita");
    const imagens = carrossel.querySelectorAll("img");

    const tamLista = imagens.length - 1;
    let indice = 0;

    const atualizarCarrossel = () => {
        slides.style.transform = `translateX(-${indice * 100}%)`;
    };

    btnEsquerda.addEventListener("click", () => {
        indice--;
        if (indice < 0) indice = tamLista;
        atualizarCarrossel();
    });

    btnDireita.addEventListener("click", () => {
        indice++;
        if (indice > tamLista) indice = 0;
        atualizarCarrossel();
    });

});