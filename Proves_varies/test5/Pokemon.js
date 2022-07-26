class Pokemon {
    constructor(numero, nom, nivell, tipus){
        this.numero = numero;
        this.nom = nom;
        this.nivell = nivell;
        this.tipus = tipus;
        if(!["fuego", "agua", "planta", "electrico", "tierra"].includes(tipus)){
            throw new Error("Aquest tipus no és vàlid.");
            }
        this.ataques = [];
     }

     afegirAtac(atac) {
        this.ataques.push(atac);
     }

     sumarNivell(){
        let nouNivell = this.nivell+2;
        return nouNivell;
     }
}

module.exports = Pokemon;



