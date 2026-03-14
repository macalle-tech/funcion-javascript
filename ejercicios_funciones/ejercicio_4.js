function verificarEdad(edad) {
  
  if (edad >= 18) {
    console.log('Puede ingresar');
  } else {
    console.log('Acceso denegado');
  }
}


verificarEdad(20); // Debería decir: Puede ingresar
verificarEdad(15); // Debería decir: Acceso denegado