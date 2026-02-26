const elemSlides = document.querySelector(".slides")
const elemBotaoEsquerdo = document.querySelector(".esquerda")
const elemBotaoDireito = document.querySelector(".direita")
const elemImagem = document.querySelectorAll(".slides img")

const tamLista = elemImagem.length - 1

let indice = 0

elemBotaoEsquerdo.addEventListener("click", () => {
    indice--
    if (indice < 0) indice = tamLista
    atualizarCarrossel()
    console.log(indice)
})
elemBotaoDireito.addEventListener("click", () => {
    indice++
    if (indice > tamLista) indice = 0
    atualizarCarrossel()
    console.log(indice)
})

const atualizarCarrossel = () => {
    elemSlides.style.transform = `translateX(-${indice * 100}%)`
}