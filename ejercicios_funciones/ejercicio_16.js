// Función flecha para la conversión
const convertirAMillas = (kilometros) => {
  const factorMilla = 0.621371;
  const millas = kilometros * factorMilla;
  
  return millas;
};

// Pruebas: Convertimos 100 kilómetros
const viajeEnMillas = convertirAMillas(100);
console.log('100 km equivalen a: ' + viajeEnMillas + ' millas');