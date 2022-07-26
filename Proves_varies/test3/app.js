const Cotxe = require("./Cotxe.js");

let cotxe1 = new Cotxe(2000, "Seat", "2453HJB", "blanc", "benzina");
let cotxe2 = new Cotxe(2000, "Vokswagen", "3092JSR", "negre", "electric");
let cotxe3 = new Cotxe(2000, "Opel", "2451JDG", "vermell", "benzina");
let cotxe4 = new Cotxe(2000, "Audi", "2452LHI", "platejat", "gasoil");
let cotxe5 = new Cotxe(2000, "Tesla", "2455GJD", "verd", "electric");
let cotxe6 = new Cotxe(2000, "RangeRover", "2456GJD", "gris", "gasoil");

 //Comprovació de l'error de combustible
//let cotxe7 = new Cotxe(2000, "Porsche", "2456GJD", "gris", "benzina95");

let arrayCotxes = [];

arrayCotxes.push(cotxe1,cotxe2, cotxe3, cotxe4, cotxe5, cotxe6);

console.table(arrayCotxes);



for (let index = 0; index < arrayCotxes.length; index++){
    if(index % 2 == 0){
       arrayCotxes[index].color = "blau";
    } else {
        arrayCotxes[index].color = "vermell";
    }
}
console.log("Després d'aplicar el SETEO color: ");
console.table(arrayCotxes);


for(const cotxe of arrayCotxes) {
    if(cotxe.combustible === "benzina") {
        console.log(`El cotxe de la marca ${cotxe.marca} funciona amb combustible ${cotxe.combustible}.`);
    }
}