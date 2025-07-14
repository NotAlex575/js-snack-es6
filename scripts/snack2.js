let nomi_squadra = [];
for(let i = 0; i < 5; i++){
    nomi_squadra[i] = prompt("inserisci il nome della "+i+" squadra: ")
}

const squadre = [
    {
        nome: nomi_squadra[0],
        punti_fatti: 0,
        falli_fatti: 0
    },
    {
        nome: nomi_squadra[1],
        punti_fatti: 0,
        falli_fatti: 0
    },
    {
        nome: nomi_squadra[2],
        punti_fatti: 0,
        falli_fatti: 0
    },
    {
        nome: nomi_squadra[3],
        punti_fatti: 0,
        falli_fatti: 0
    },
    {
        nome: nomi_squadra[4],
        punti_fatti: 0,
        falli_fatti: 0
    }
]

for(let squadra of squadre){
    squadra.punti_fatti = Math.floor(Math.random()*10)
    squadra.falli_fatti = Math.floor(Math.random()*5)
}

const squadreFalli = squadre.map(({ nome, falli_fatti }) => ({ nome, falli_fatti }));
console.log(squadreFalli);


