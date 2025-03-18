# Reto 19: Formulario

1. Crea un componente llamado Formulario que tenga un formulario con los siguientes campos:
- nombre: campo de texto para ingresar el nombre.
- apellido: campo de texto para ingresar el apellido.
- email: campo de texto para ingresar el correo electrónico.
- password: campo de contraseña para ingresar la contraseña.
- confirmPassword: campo de contraseña para confirmar la contraseña.
- submit: botón para enviar el formulario.


2. Utiliza los siguientes hooks:
- useState para almacenar el estado de cada uno de los campos del formulario.
- useEffect para validar que las contraseñas coincidan al escribir en ambos campos.
- useRef para obtener el valor de los campos de contraseña y compararlos.


3. Implementa la validación de los campos del formulario, de manera que los campos de nombre, apellido y correo electrónico sean requeridos y que el correo electrónico tenga un formato válido.

4. Al hacer clic en el botón de enviar, muestra un mensaje de éxito si los campos son válidos, de lo contrario muestra un mensaje de error.