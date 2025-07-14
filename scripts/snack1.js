//ESERCIZIO

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

const titolo = document.getElementById("titolo");
const risultato = document.getElementById("risultato");

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


let timer = 5;
let piu_pesante_in_pagina = biciclette[0];
let piu_pesante_index = 0;

function timer_function(){
    if(timer > 0){
        titolo.innerHTML = "Vediamo qual'è la bici più pesante tra "+timer;
        timer--;
        setTimeout(timer_function, 1000)
    }
    else{
        titolo.classList.add("d-none");
        risultato.classList.remove("d-none");
        controllo_piu_pesante();
    }
}

function controllo_piu_pesante(){
    for(let i = 1; i < biciclette.length; i++){
        if(biciclette[i].peso < piu_pesante.peso){
            piu_pesante_in_pagina = biciclette[i];
            piu_pesante_index = i;
        }
    }
    for(let i = 0; i < biciclette.length; i++){
        const container_bicicletta = document.getElementById(`container-bicicletta-${i+1}`); //prende nell'html l'elemento id con container-bicicletta-numero di i+1 (quindi da 1 a 6)
        const nome_bicicletta = document.getElementById(`nome-bicicletta${i+1}`);            //prende nell'html l'elemento id con nome-bicicletta-numero di i+1 (quindi da 1 a 6)
        const peso_bicicletta = document.getElementById(`peso-bicicletta-${i+1}`);           //prende nell'html l'elemento id con peso-bicicletta-numero di i+1 (quindi da 1 a 6)
        container_bicicletta.classList.remove("col-md-4");
        if (i != piu_pesante_index) {
            container_bicicletta.remove();
        }
        else{
            if (!container_bicicletta.classList.contains("col.12")){
                container_bicicletta.classList.add("col-12");
                nome_bicicletta.classList.add('text-center');
                peso_bicicletta.classList.add('text-center');
            }

        }
    }
}

timer_function();
