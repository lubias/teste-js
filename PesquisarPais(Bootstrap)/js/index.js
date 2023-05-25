document.getElementById("card").style.setProperty("display", "none", "important")

function Procurar(){
    let pais = document.getElementById("pais").value
    let finalUrl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`

    fetch(finalUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        document.getElementById("card").style.display = "block";
        document.getElementById("bandeira").src = data[0].flags["svg"]
        document.getElementById("nome").innerHTML = pais
        document.getElementById("capital").innerHTML = data[0].capital[0]
        document.getElementById("continente").innerHTML = data[0].continents[0]
        document.getElementById("populacao").innerHTML = data[0].population
    })
    
}