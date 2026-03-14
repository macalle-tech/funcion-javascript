function generarCorreo(nombre, apellido) {
  // Unimos: nombre + punto + apellido + el resto del correo
  const correoElectronico = nombre + "." + apellido + "@email.com";

  // Mostramos el resultado
  console.log(correoElectronico);
}

// Pruebas
generarCorreo('andres', 'perez'); 
generarCorreo('juan', 'gomez');