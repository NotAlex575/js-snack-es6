const biciclette = [
    {
        nome: "Paolino",
        peso: (Math.random()*12).toFixed(2)
    },

    {
        nome: "Pancrazio",
        peso: (Math.random()*12).toFixed(2)
    },

    {
        nome: "Pierino",
        peso: (Math.random()*12).toFixed(2)
    },

    {
        nome: "Patrizia",
        peso: (Math.random()*12).toFixed(2)
    },

    {
        nome: "Gennaro",
        peso: (Math.random()*12).toFixed(2)
    },

    {
        nome: "Paola",
        peso: (Math.random()*12).toFixed(2)
    },

]

let piu_pesante = biciclette[0];

for(let i = 1; i < biciclette.length; i++){
    console.log(biciclette[i].peso)
    if(biciclette[i].peso < piu_pesante.peso){
        piu_pesante = biciclette[i]
    }
}

console.log("La più pesante è:", piu_pesante);

//________________________________________________________________________________________________________________________________________________________________________

//EXTRA MIO

const nome_bicicletta1 = document.getElementById("nome-bicicletta1");
nome_bicicletta1.innerHTML = biciclette[0].nome;
const nome_bicicletta2 = document.getElementById("nome-bicicletta2");
nome_bicicletta2.innerHTML = biciclette[1].nome;
const nome_bicicletta3 = document.getElementById("nome-bicicletta3");
nome_bicicletta3.innerHTML = biciclette[2].nome;
const nome_bicicletta4 = document.getElementById("nome-bicicletta4");
nome_bicicletta4.innerHTML = biciclette[3].nome;
const nome_bicicletta5 = document.getElementById("nome-bicicletta5");
nome_bicicletta5.innerHTML = biciclette[4].nome;
const nome_bicicletta6 = document.getElementById("nome-bicicletta6");
nome_bicicletta6.innerHTML = biciclette[5].nome;

const peso_bicicletta_1 = document.getElementById("peso-bicicletta-1");
peso_bicicletta_1.innerHTML = biciclette[0].peso;
const peso_bicicletta_2 = document.getElementById("peso-bicicletta-2");
peso_bicicletta_2.innerHTML = biciclette[1].peso;
const peso_bicicletta_3 = document.getElementById("peso-bicicletta-3");
peso_bicicletta_3.innerHTML = biciclette[2].peso;
const peso_bicicletta_4 = document.getElementById("peso-bicicletta-4");
peso_bicicletta_4.innerHTML = biciclette[3].peso;
const peso_bicicletta_5 = document.getElementById("peso-bicicletta-5");
peso_bicicletta_5.innerHTML = biciclette[4].peso;
const peso_bicicletta_6 = document.getElementById("peso-bicicletta-6");
peso_bicicletta_6.innerHTML = biciclette[5].peso;

const titolo = document.getElementById("titolo");
const risultato = document.getElementById("risultato");

let timer = 5;


function timer_function(){
    if(timer > 0){
        titolo.innerHTML = "Vediamo qual'è la bici più pesante tra "+timer;
        timer--;
        setTimeout(timer_function, 1000)
    }
    else{
        titolo.classList.add("d-none");
        risultato.classList.remove("d-none");
    }
}


timer_function();
controllo_piu_pesante();