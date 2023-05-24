let bolasDeOuro = 7
let times = ["Barcelona", "PSG"]

let jogador = {
    nome: 'Lionel Messi',
    idade: 35,
    numGol: 805,
    bolasDeOuro,
    times,
    Gol(g = 0){
        console.log("Messi fez gol!")
        this.numGol += g
    }
};

//console.log(jogador.numGol);

jogador.posicao = 'Atacante';

console.log(jogador);
jogador.Gol(3)

delete jogador.idade;
console.log(jogador);