function cajeroAutomatico(saldo, retiro) {
  if (retiro <= saldo) {
    // Calculamos cuánto queda
    const nuevoSaldo = saldo - retiro;
    console.log('Retiro exitoso. Su nuevo saldo es: ' + nuevoSaldo);
  } else {
    // Si el retiro es más grande que el saldo
    console.log('Fondos insuficientes');
  }
}

// Pruebas
cajeroAutomatico(500000, 200000); // Éxito: Quedan 300000
cajeroAutomatico(100000, 150000); // Error: Fondos insuficientes