function calcularAreaRectangulo(base, altura) {
  // Calculamos el área multiplicando base por altura
  const area = base * altura;
  
  // Retornamos el resultado
  return area;
}

// Pruebas
const resultadoArea = calcularAreaRectangulo(10, 5);
console.log('El área del rectángulo es: ' + resultadoArea);