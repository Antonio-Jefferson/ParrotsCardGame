const form = document.querySelector('.iniciar');
const nome = document.querySelector('.nome');
const numero = document.querySelector('.numberCards');

function iniciarGamer(event){
    event.preventDefault();


    localStorage.setItem('player',nome.value)



    window.open = "./gamer.html";
}