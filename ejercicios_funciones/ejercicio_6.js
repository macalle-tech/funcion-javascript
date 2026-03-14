function calcularDescuento(precio, descuento) {
  // 1. Calculamos cuánto es el valor a restar
  const valorDescuento = (precio * descuento) / 100;
  
  // 2. Restamos ese valor al precio original
  const precioFinal = precio - valorDescuento;

  // 3. RETORNAMOS el valor (no lo imprimimos todavía)
  return precioFinal;
}

// 4. Prueba: Como la función RETORNA, debemos meterla en un console.log para verla
const resultadoFinal = calcularDescuento(100000, 20); // 20% de descuento
console.log('El precio con descuento es: ' + resultadoFinal);