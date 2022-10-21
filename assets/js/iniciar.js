let texto;
let numberCards;
let nomePlayer;
function iniciar(){
     texto = document.querySelector('.nome');
     nomePlayer = texto.value;
     numberCards = Number(document.querySelector('.numberCards'));
     console.log(nomePlayer)
    ativarBtn()
}
iniciar();
function ativarBtn(){
    const btnAtivo = document.querySelector('.btnIniciar')
    if(nomePlayer.length !== 0 || numberCards < 14 || numberCards > 4 || numberCards % 2 === 0){
        btnAtivo.classList.add('btnAtivo');  
    } 
}
console.log(nomePlayer.length);
console.log(nomePlayer)
console.log(numberCards)