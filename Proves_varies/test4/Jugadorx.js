class Jugadorx {
    constructor(nom, edat, alcada, pes, posicio){
        this.nom = nom;
        this.edat = edat;
        this.alcada = alcada;
        this.pes = pes;
        this.posicio = posicio;
            if(!["base", "escolta", "aler", "aler-pivot", "pivot"].includes(posicio)){
                throw new Error("Aquesta no és una posició de jugadorx vàlida a bàsket.")
                }
     }
}

module.exports = Jugadorx;