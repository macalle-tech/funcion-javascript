function calcularIMC(peso, estatura) {
  // Calculamos el cuadrado de la estatura multiplicándola por sí misma
  const estaturaAlCuadrado = estatura * estatura;
  
  // Dividimos el peso por el resultado anterior
  const imc = peso / estaturaAlCuadrado;
  
  // Retornamos el resultado
  return imc;
}

// Pruebas: Una persona de 70kg y 1.75m de altura
const miIMC = calcularIMC(70, 1.75);
console.log('El IMC calculado es: ' + miIMC);