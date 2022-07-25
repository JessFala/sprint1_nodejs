/* 
TODO Crea un objeto Operación que represente una operación básica de una calculadora entre dos operandos 
TODO (suma, resta, multiplicación, división, módulo)
Ejemplo de operación: Operacion("resta",3,2)

TODO Esta clase deberá tener un método calcula(), que ejecute tal operación.

TODO Necesitamos acumular en un array 5 operaciones y
TODO ejecutarlas después en bucle 
TODO mostrando el resultado por pantalla. */

function Calculadora (operacio, operantA, operantB){
    const operacions = [{
        "suma": function(a,b) {return a + b},
    },{
        "resta": function(a,b){return a - b},
    }, {
        "multiplicar": function(a,b){return a * b},
    }, {
        "modul": function (a,b){return a%b}
    }]
for (let i=0; i< operacions.length; i++) {

    if(Object.keys(operacions[i])[0] == operacio){
        return operacions[i][operacio](operantA, operantB)
    } else {
        console.log('error')
    }
}
}

console.log(Calculadora("resta", 4,2));


