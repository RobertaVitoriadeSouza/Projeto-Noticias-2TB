const botaoAbrir = document.querySelector(".header-mobile > button");
const botaoFechar = document.querySelector(".header-mobile nav button ")

const body = document.querySelector("body")
const nav = documento.querySelector(".header-mobile nav")
console.log( body)
  botaoAbrir.addEventListener('click',abrirMenu)
  botaoFechar.addEventListener('click', fecharMenu)

  function abrirMenu (){
body.classList.add("escurecer")
nav.classList.add("abrir")
  }

  function fecharMenu(){
 body.classList.add("escurecer")
nav.classList.add("abrir")
  }