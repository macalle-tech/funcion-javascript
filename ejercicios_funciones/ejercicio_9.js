// Función anónima (sin nombre después de 'function')
const calcularSalario = function(horas, valor) {
  const salarioTotal = horas * valor;

  console.log('El salario total por ' + horas + ' horas es: $' + salarioTotal);
};

// Pruebas: 40 horas a 25000 cada una
calcularSalario(40, 25000);