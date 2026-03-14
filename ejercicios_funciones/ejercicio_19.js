function saludarSegunHora(hora) {
  if (hora >= 6 && hora <= 12) {
    console.log('Buenos días');
  } else if (hora > 12 && hora <= 18) {
    console.log('Buenas tardes');
  } else {
    console.log('Buenas noches');
  }
}

// Pruebas
saludarSegunHora(9);  // Buenos días
saludarSegunHora(15); // Buenas tardes
saludarSegunHora(22); // Buenas noches