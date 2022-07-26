const Pokemon = require("./Pokemon.js");
const Atac = require("./Atac.js");

//Instanciar objetes classe Pokémon
const pokemon1 = new Pokemon(1, "Cris", 3, "electrico");
const pokemon2 = new Pokemon(2, "Leyva", 3, "tierra");
const pokemon3 = new Pokemon(3, "Gael", 3, "fuego");
const pokemon4 = new Pokemon(4, "Meri", 1, "agua");
const pokemon5 = new Pokemon(5, "Thiago", 1, "planta");
const pokemon6 = new Pokemon(6, "Terry", 2, "agua");

//Instaciar classe Atac
const atac1 = new Atac("escupir", 80);
const atac2 = new Atac("insultar", 100);
const atac3 = new Atac("empujar", 100);
const atac4 = new Atac("rajar", 100);
const atac5 = new Atac("arañar", 65);


pokemon1.afegirAtac(atac1);
pokemon1.afegirAtac(atac2);
pokemon1.afegirAtac(atac3);
pokemon1.afegirAtac(atac4);
pokemon1.afegirAtac(atac5);
pokemon2.afegirAtac(atac2);
pokemon3.afegirAtac(atac3);
pokemon3.afegirAtac(atac4);
pokemon4.afegirAtac(atac2);
pokemon4.afegirAtac(atac3);
pokemon5.afegirAtac(atac1);
pokemon5.afegirAtac(atac5);
pokemon5.afegirAtac(atac3);
pokemon6.afegirAtac(atac3);
pokemon6.afegirAtac(atac4);
pokemon6.afegirAtac(atac5);

console.log(pokemon1);

let equipPokemon = [];
equipPokemon.push(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);
console.table(equipPokemon);

for(const pokes of equipPokemon) {
    if(pokes.tipus === "electrico") {
        console.log(`Xl Pokemon ${pokes.nom} és de tipus ${pokes.tipus}`);
    }

//Mostrar nivells d'atac
for(const pokes of equipPokemon){
    console.log(pokes.ataques);
}

//Sumar nivell
for(const pokes of equipPokemon) {
    if(pokes.tipus === "agua"){
      console.log(`El pokemon ${pokes.nom} té un nou nivell ${pokes.sumarNivell()}`);   
    }
}
}
