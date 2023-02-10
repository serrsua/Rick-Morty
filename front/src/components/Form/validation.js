const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//const regexPassword = /^(?=.*\d)(?=.*[a-z])/;

export const validate = (data) => {
  let errors = {};

  if (!data.username) errors.username = "Se requiere username";
  else if (data.username.length > 35)
    errors.username = "El nombre de usuario es demasiado largo";
  else if (!regexUser.test(data.username))
    errors.username = "Tu username debe ser un e-mail válido";

  if (!data.password) errors.password = "Se requiere password";

  if (data.password.length < 6)
    errors.password = "La contraseña es demasiado corta";
  else if (data.password.length > 10)
    errors.password = "La contraseña es demasiado larga";
  else if (!data.password.match(/\d/))
    errors.password = "La contraseña debe tener al menos 1 número";

  return errors;
};
