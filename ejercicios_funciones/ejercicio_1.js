function loginUsuario(usuario, password) {

  if (usuario == 'admin') {

    if (password == '1234') {
      console.log('Bienvenido admin');
    } else {
      console.log('Usuario o contraseña incorrectos');
    }

    } else {
    // Si el usuario NO es admin, ni siquiera miramos la contraseña
    console.log('Usuario o contraseña incorrectos');
  }

  }

  loginUsuario('admin', '1234');
