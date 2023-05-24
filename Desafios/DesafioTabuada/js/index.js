function calcular(){
    html = "";
    resposta_div = window.document.getElementById("resposta");
    numero = window.document.getElementById("numero").value;
    repeticoes = window.document.getElementById("repeticoes").value;
    
    if(numero == "" || repeticoes == ""){
        alert("Precisa preencher os 2 valores");
        return false;
    }

    html += `A tabuada do ${numero} é: <br>`;

    for(i=0; i<=repeticoes; i++){
        resultado = numero * i;
        html += `${numero} x ${i} = ${resultado}<br>`;
    }

    resposta_div.innerHTML = html;
}