export default function Validation(input) {
  const errors = {};
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /[0-9]/;

  if (!input.email) {
    errors.email = "Ingresa un email válido!";
  } else if (!emailRegex.test(input.email)) {
    errors.email = "Ingresa un email válido!";
  } else if (input.email.length > 35) {
    errors.email = "El email debe tener menos de 35 caracteres!";
  }

  if (passwordRegex.test(input.password)) {
    errors.password = "Contraseña inválida!";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "Contraseña inválida!";
  }

  return errors;
}