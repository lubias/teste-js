const Jogadora = function(nome, posicao){
    Nome = nome,
    Posicao = posicao

    this.getNome = function(){
        return Nome
    }
    
    this.getPos = function(){
        return Posicao
    }
}

const Gattaz = new Jogadora("Carol Gattaz", "Central")
const Sheilla = new Jogadora("Sheilla Castro", "Oposta")

console.log(Sheilla.getNome())