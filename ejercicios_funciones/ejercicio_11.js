function evaluarNota(nota) {
  if (nota >= 3) {
    console.log('Aprobado');
  } else {
    console.log('Reprobado');
  }
}

// Pruebas para verificar
evaluarNota(4.2); // Debería decir Aprobado
evaluarNota(2.5); // Debería decir Reprobado