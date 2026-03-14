const verificarSigno = (numero) => {
  if (numero > 0) {
    console.log('El número ' + numero + ' es Positivo');
  } else if (numero < 0) {
    console.log('El número ' + numero + ' es Negativo');
  } else {
    console.log('El número es Cero');
  }
};

// Pruebas
verificarSigno(10);  // Positivo
verificarSigno(-5);  // Negativo
verificarSigno(0);   // Cero