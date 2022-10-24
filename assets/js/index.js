function iniciarGamer(){
    const nome = document.querySelector('.nome').value;
    const numero = document.querySelector('.numberDeCartas').value;

    localStorage.nomePLayer = JSON.stringify(nome)
    localStorage.NumeroDeCartas = JSON.stringify(numero)
    window.open('./gamer.html');
}