// Usamos const y la flecha =>
const compararNumeros = (num1, num2) => {
  if (num1 > num2) {
    console.log('El número mayor es: ' + num1);
  } else if (num2 > num1) {
    console.log('El número mayor es: ' + num2);
  } else {
    console.log('Ambos números son iguales');
  }
};

// Pruebas
compararNumeros(15, 8);  // Debería mostrar 15
compararNumeros(3, 10);  // Debería mostrar 10
compararNumeros(5, 5);   // Debería mostrar que son iguales