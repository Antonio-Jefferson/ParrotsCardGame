
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
    const cartas = [];
    const conteiner = document.querySelector('.conteiner')

    let numberCartas = 0;
    while(numberCartas < 4 || numberCartas > 14 || numberCartas % 2 !== 0){
        numberCartas = Number(prompt("DIGITE A QUANTIDADE DE CARTAS: "));
    } 
    
    for(let i = 0;numberCartas > i; i++){
        cartas.push(`<li onclick="clicar(this)" class="card">
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
    return Math.random() -0.5;
}


let clickJogadas = 0;
function clicar(virar){
    virar.classList.toggle('click');
}



iniciar();
embaralhador()