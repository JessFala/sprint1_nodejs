class Cotxe {
    
    constructor(cilindrada, marca, matricula, color, combustible,){
        this.cilindrada = cilindrada;
        this.marca = marca;
        this.matricula = matricula;
        this.color = color
        this.combustible = combustible;
       switch(combustible){
        case 'benzina':
            this.combustible = 'benzina';
            break;
        case 'gasoil':
            this.combustible = 'gasoil';
            break;
        case 'hibrid':
            this.combustible = 'hibrid';
            break;
        case 'electric':
            this.combustible = 'electric';
            break;
        default:
            throw new Error ('Aquesta dada no és un combustible');
       }
}
}

module.exports = Cotxe;