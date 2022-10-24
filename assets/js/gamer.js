let numberCartas = 0;
let primeiro = '';
let segundo = '';
let cont = 0;
let i;
let jogadas = 0;
let nome; 


function iniciar(){
    const imgCards = [
        'arara.jpg',
        'arara.jpg',
        'tucano.jpg',
        'tucano.jpg',
        'ovelha.jpg',
        'ovelha.jpg',
        'coala.jpg',
        'coala.jpg',
        'flamigo.png',
        'flamigo.png',
        'onca.png',
        'onca.png',
        'pombo.jpg',
        'pombo.jpg'
    ]
    const dataAtributo = [
        'arara',
        'arara',
        'tucano',
        'tucano',
        'ovelha',
        'ovelha',
        'coala',
        'coala',
        'flamigo',
        'flamigo',
        'onca',
        'onca',
        'pombo',
        'pombo'
    ]   
    const cartas = [];
    const conteiner = document.querySelector('.conteiner');
    const nomePlayer = document.querySelector('.jogador')
    nome = prompt('Digite seu nome: ')
    nomePlayer.innerHTML = nome;
    while(numberCartas < 4 || numberCartas > 14 || numberCartas % 2 !== 0){
        numberCartas = Number(prompt("DIGITE A QUANTIDADE DE CARTAS: "));
    } 
    
    for(let i = 0;numberCartas > i; i++){
        cartas.push(`<li onclick="clicar(this)" data-check='${dataAtributo[i]}' class="card">
        <div class="frente face">
            <img src="assets/img/back.png">
        </div>
        <div class="verso face">
            <img src="assets/img/${imgCards[i]}">
        </div>
    </li>`) 
    
    }
    cartas.sort(embaralhador);
    for(let i = 0;numberCartas > i; i++){
        conteiner.innerHTML += cartas[i];
    }

}
function embaralhador(){
    return Math.random() -0.5
}

function time(){
    i = setInterval(encrementar, 1000);
}
function encrementar(){
    cont++
    const contador = document.querySelector('.init-time');
    contador.innerHTML = cont;
    endGamer();
}
function clicar(virar){
    if(virar.className.includes('click')){
        return;
    }
    if(primeiro === ''){
        virar.classList.add('click');
        primeiro = virar;
        jogadas += 1;
    }else if(segundo == ''){
        virar.classList.add('click');
        segundo = virar;
        jogadas += 1;
        compraraCartas()
    }
}
function compraraCartas(){
    const cardOne = primeiro.getAttribute('data-check');
    const cardTwo = segundo.getAttribute('data-check');
    if(cardOne === cardTwo){
        primeiro.classList.add('acertouCard');
        segundo.classList.add('acertouCard')
    
        primeiro = '';
        segundo = '';

        endGamer();
    }else if(cardOne!== cardTwo){
        setTimeout(() => {
            primeiro.classList.remove('click');
            segundo.classList.remove('click');
            console.log('diferentes')

            primeiro = '';
            segundo = '';
        }, 500);
    }
}
function endGamer(){
    const acertos = document.querySelectorAll('.click');
    const fimDoJogo = document.querySelector('.endGamer');
    const time = document.querySelector('.tempo-de-jogo');
    const numberJogadas = document.querySelector('.jogadas');
    const namePlayer = document.querySelector('.nomePlayer')
    if(acertos.length === numberCartas){
        setTimeout(() => {
            fimDoJogo.classList.remove('escondido');
            time.innerHTML = `${cont}s`;
            numberJogadas.innerHTML = jogadas;
            namePlayer.innerHTML = nome;
            clearInterval(i);
        }, 300);
    }
}

function jogarNovamente(){
    const fimDoJogo = document.querySelector('.endGamer');
    fimDoJogo.classList.add('escondido');
    setTimeout(() => {
      window.location.reload()
    }, 300);
 
}
iniciar();
embaralhador();
time()