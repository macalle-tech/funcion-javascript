function simularCompra(producto, precio, cantidad) {
  // 1. Calculamos el total
  const total = precio * cantidad;

  // 2. Mostramos un mensaje completo usando los parámetros
  console.log('Producto: ' + producto);
  console.log('Cantidad: ' + cantidad);
  console.log('Total a pagar por su compra: ' + total);
}

// 4. Prueba: Compremos 3 balones de 50000 pesos
simularCompra('Balón de fútbol', 50000, 3);