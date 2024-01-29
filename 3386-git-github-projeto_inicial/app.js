
alert("Boas vindas ao jogo de numero secreto");

let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("escolha um numero de 1 a 10");

// se o chute for igual ao numero secreto
if(chute == numeroSecreto) {
   alert(`isso ai, você acertou o numero secreto ${numeroSecreto}`);
    
} else {
    alert("você errou");
}
