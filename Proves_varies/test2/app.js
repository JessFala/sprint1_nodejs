const Calculadora = require("./Calculadora");

let resta = new Calculadora("resta", 4,2);
console.log(resta.calcula(resta));








/*let resta = new Calculadora("resta", 2, 3);

function Calcula (operacio, operantA, operantB){
    const operacions = [{
        "suma": function(a,b) {return a + b},
    },{
        "resta": function(a,b){return a - b},
    }, {
        "multiplicar": function(a,b){return a * b},
    }, {
        "modul": function (a,b){return a%b}
    }];*/

/*for (let i=0; i< operacions.length; i++) {

    if(Object.keys(operacions[i])[0] == operacio){
        return operacions[i][operacio](operantA, operantB)
    } else {
        console.log('error')
    }
}
}

console.log(Calculadora("resta", 4,2));*/


