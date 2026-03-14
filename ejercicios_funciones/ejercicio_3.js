function calculadora(numero1, numero2, operacion) {

  let resultado;

  if (operacion == 'sumar') {
    resultado = numero1 + numero2;
  } else if (operacion == 'restar') {
    resultado = numero1 - numero2;
  } else if (operacion == 'multiplicar') {
    resultado = numero1 * numero2;
  } else {
    resultado = 'Operación no válida';
  }

  console.log('El resultado de ' + operacion + ' es: ' + resultado);
}

// Pruebas
calculadora(50, 12, 'sumar');
calculadora(32, 5, 'restar');
calculadora(8, 5, 'multiplicar');