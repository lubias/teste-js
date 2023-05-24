let quebrada = false
const div_lampada = window.document.getElementById("lampada");

function ligar(){
    if(quebrada == false){
        div_lampada.src = "./img/lampada_acesa.svg";
    }
}

function desligar(){
    if(quebrada == false){
        div_lampada.src = "./img/lampada_apagada.svg";
    }
}

function quebrar(){
    div_lampada.src = "./img/lampada_quebrada.svg";
    quebrada = true;
}

function trocar(){
    if(quebrada == true){
        div_lampada.src = "./img/lampada_apagada.svg";
        quebrada = false;
    }else{
        window.alert("Essa lampada não precisa ser trocada!");
    }
}