function convertirCelsiusAFahrenheit(celsius) {
  // Aplicamos la fórmula matemática paso a paso
  const fahrenheit = (celsius * 9 / 5) + 32;
  
  // Devolvemos el resultado para que se pueda usar afuera
  return fahrenheit;
}

// 3. Pruebas: Convertimos 30 grados Celsius
const resultadoF = convertirCelsiusAFahrenheit(30);
console.log('30°C equivalen a: ' + resultadoF + '°F');