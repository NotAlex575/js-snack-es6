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