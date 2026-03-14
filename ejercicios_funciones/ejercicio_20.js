// Función flecha con tres parámetros
const calcularPromedio = (nota1, nota2, nota3) => {
  // Sumamos entre paréntesis y luego dividimos por 3
  const promedio = (nota1 + nota2 + nota3) / 3;
  
  // Retornamos el valor
  return promedio;
};

// Pruebas: Notas de un estudiante
const notaFinal = calcularPromedio(4.5, 3.8, 4.0);
console.log('El promedio final es: ' + notaFinal);