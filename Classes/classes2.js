class Jogadora{
    constructor(nome, posicao){
        this.nome = nome
        this.posicao = posicao
    }
    posicaoAtual(){
        console.log(`A posição da ${this.nome} é ${this.posicao}`)
    }
}

const Gattaz = new Jogadora("Carol Gattaz", "Central")
const Sheilla = new Jogadora("Sheilla Castro", "Oposta")

Gattaz.posicaoAtual()