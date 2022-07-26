class Calculadora {
    constructor() {
        
    }
    
calcula(operacio, a, b){
    switch(operacio) {
        case "suma":
            console.log(a+b);
            break;
        case "resta":
            console.log(a-b);
            break;
        case "multiplicacio":
            console.log(a*b);
            break;
        case "divisio":
            console.log(a/b);
            break;
        case "modul":
            console.log(a%b);
            break;
    }
}
}
module.exports = Calculadora;

    
/*const operacions = [{
    "suma": function(a,b) {return a+b},
    },{
    "resta": function(a,b){return a-b},
    },{
    "multiplicacio": function(a,b){return a*b},
    },{
    "divisio": function (a,b){return a/b},
    },{
    "modul": function (a,b){return a%b}
    }];
}
}*/
    
/*constructor(operacio,operantA, operantB){
    this.operacio = operacio;
    if(!["suma", "resta", "multiplicacio", "divisio", "modul"].includes(operacio)){
        throw new Error("Aquesta no és una operació possible.")
        }
    this.operantA = operantA;
    this.operantB = operantB;
    }   

    //calcula(operacio, a, b) {*/



