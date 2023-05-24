class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    Adicionar() {
        let produto = this.lerDados();

        if(this.Validar(produto)){
            this.Salvar(produto);
            this.fazTabela(this.arrayProdutos);
        }
        
        return false;
    }

    lerDados() {
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById("nome_produto").value;
        produto.precoProduto = document.getElementById("preco_produto").value;

        return produto;
    }

    Validar(produto){
        let msg = "";

        if (produto.nomeProduto == "") {
            msg += "Informe o nome do produto\n";
        }

        if (produto.precoProduto == "") {
            msg += "Informe o preço do produto";
        }

        if(msg != ""){
            alert(msg);
            return false;
        }
        
        return true;
    }

    Salvar(produto){
        this.arrayProdutos.push(produto);
        this.id++;

        this.limparCampos();
    }

    limparCampos(){
        document.getElementById("nome_produto").value = "";
        document.getElementById("preco_produto").value = "";
    }

    fazTabela(){
        let tbody = document.getElementById('tbody');
        //let html = "";
        tbody.innerText = '';

        /*this.arrayProdutos.forEach(function(elem){
            html += "<tr>";
            html += "<td>"+elem.id+"</td>";
            html += "<td>"+elem.nomeProduto+"</td>";
            html += "<td>"+elem.precoProduto+"</td>";
            html += "<td><i class='fa fa-trash'></i></td>";
            html += "</tr>"
        });*/

        for(let i = 0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_delete = tr.insertCell();

            td_id.innerHTML = this.arrayProdutos[i].id;
            td_nome.innerHTML = this.arrayProdutos[i].nomeProduto;
            td_preco.innerHTML = this.arrayProdutos[i].precoProduto;
            td_delete.innerHTML = "<a onclick='produto.apagarDados("+this.arrayProdutos[i].id+")'><i class='fa fa-trash'></i></a>";
        };
    }

    apagarDados(id){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

        console.log(this.arrayProdutos);

        alert('O item foi apagado com sucesso!');
    }

    /*apagarDados(id){
        let novoArray = [];

        this.arrayProdutos.forEach(function(elem){
            if(elem.id != id)
                novoArray.push(elem);
        });

        this.arrayProdutos = novoArray;
        this.fazTabela();
    }*/
}

const produto = new Produto();
