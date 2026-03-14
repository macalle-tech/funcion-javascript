// Definimos la función flecha
const verificarParImpar = (numero) => {
  // El símbolo % saca el residuo
  if (numero % 2 == 0) {
    console.log('El número ' + numero + ' es par');
  } else {
    console.log('El número ' + numero + ' es impar');
  }
};

// Pruebas
verificarParImpar(10); // Par
verificarParImpar(7);  // Impar