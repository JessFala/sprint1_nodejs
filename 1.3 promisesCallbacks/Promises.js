//Estructura Promises

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

hazAlgo().then(function(resultado) {
    return hazAlgoMas(resultado);
  })
  .then(function(nuevoResultado) {
    return hazLaTerceraCosa(nuevoResultado);
  })
  .then(function(resultadoFinal) {
    console.log('Obtenido el resultado final: ' + resultadoFinal);
  })
  .catch(falloCallback);

  // Estructura Promises con funciones flechas. 

  hazAlgo()
.then(resultado => hazAlgoMas(resultado))
.then(nuevoResultado => hazLaTerceraCosa(nuevoResultado))
.then(resultadoFinal => {
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
})
.catch(falloCallback);

