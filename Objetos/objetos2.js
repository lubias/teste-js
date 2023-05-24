const p = "ponteira"
const c = "central"
const l = "levantadora"
const lib = "libero"
const o = "oposta"

var selecaoVolei = [
    {
        nome: "Carolana",
        posicao: c
    },
    {
        nome: "Ana Cristina",
        posicao: p
    },
    {
        nome: "Diana",
        posicao: c
    },
    {
        nome: "Gabi Guimarães",
        posicao: p
    },
    {
        nome: "Julia Bergmann",
        posicao: p
    },
    {
        nome: "Julia Kudiess",
        posicao: c
    },
    {
        nome: "Laís",
        posicao: lib
    },
    {
        nome: "Lara",
        posicao: c
    },
    {
        nome: "Lorena Vizel",
        posicao: c
    },
    {
        nome: "Lorenne",
        posicao: o
    },
    {
        nome: "Lorrayna Silva",
        posicao: o
    },
    {
        nome: "Macris Carneiro",
        posicao: l
    },
    {
        nome: "Maiara Basso",
        posicao: p
    },
    {
        nome: "Natinha",
        posicao: lib
    },
    {
        nome: "Naiane",
        posicao: l
    },
    {
        nome: "Nyeme",
        posicao: lib
    },
    {
        nome: "Pri Daroit",
        posicao: p
    },
    {
        nome: "Roberta",
        posicao: l
    },
    {
        nome: "Rosamaria",
        posicao: o
    },
    {
        nome: "Tainara",
        posicao: o
    },
    {
        nome: "Thaisa Daher",
        posicao: c
    },
    {
        nome: "Kisy",
        posicao: o
    },
]

jogadora = Math.floor(Math.random() * 23);

console.log(selecaoVolei[jogadora])