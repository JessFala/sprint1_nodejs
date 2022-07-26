const Jugadorx = require("./Jugadorx.js");

const jugadorx1 = new Jugadorx("Cris", 39, 150, 48, "pivot");
const jugadorx2 = new Jugadorx("Leyva", 16, 174, 70, "escolta");
const jugadorx3 = new Jugadorx("Rolling", 15, 201, 93, "base");
const jugadorx4 = new Jugadorx("Terry", 27, 170, 78, "aler");
const jugadorx5 = new Jugadorx("Thiago", 26, 210, 89, "aler-pivot");
const jugadorx6 = new Jugadorx("Nara", 21, 184, 80, "pivot");
const jugadorx7 = new Jugadorx("Meri", 35, 175, 58, "base");
const jugadorx8 = new Jugadorx("Gael", 20, 203, 81, "escolta");

 let arrayJugadorx = [];
 arrayJugadorx.push(jugadorx1, jugadorx2, jugadorx3, jugadorx4, jugadorx5, jugadorx6, jugadorx7, jugadorx8);
 
console.table(arrayJugadorx);

console.log("Jugadorxs de més de 200 cm d'alçada.");
 
for(const jugadorx of arrayJugadorx) {
    if(jugadorx.alcada>200) {
        console.log(jugadorx.nom, jugadorx.alcada);
    }
}

console.log("Jugadorxs menors de 21 anys.");

for(const jugadorx of arrayJugadorx){
    if(jugadorx.edat<21){
        console.log(jugadorx.nom, jugadorx.edat);
    }
}