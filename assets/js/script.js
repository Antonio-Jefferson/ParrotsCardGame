const array = [];
let conteiner = document.querySelector('.conteiner')

let numberCartas = 0;
while(numberCartas < 4 || numberCartas > 21 || numberCartas % 2 !== 0){
        numberCartas = Number(prompt("DIGITE A QUANTIDADE DE CARTAS: "));
}

let cont = 0;
while(numberCartas > cont){
        array.push(`<li class="card">
        <div class="frente face">
            <img src="assets/img/back.png">
        </div>
        <div class="verso face">
            <img src="assets/img/bobrossparrot.gif">
        </div>
    </li>`)
        cont++
}

cont = 0;
while(numberCartas > cont){
        conteiner.innerHTML += array[cont];
        cont++
}

function clicador(){
       alert('clicado')
}