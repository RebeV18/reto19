import { useState, useEffect, useRef } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);

  useEffect(() => {
    if (password && cPassword && password !== cPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  }, [password, cPassword]);

  const validarEmail = (email) => {
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Regex.test(email);
  };

  //manejo envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    //validar los datos requeridos
    if (!nombre || !lastName || !email) {
      setError("Todos los campos son requeridos");
      return;
    }

    if (!validarEmail(email)) {
      setError("Por favor, ingrese un correo electrónico válido");
      return;
    }

    if (password !== cPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // mensaje de éxito
    setSuccess("Formulario enviado con éxito");
  };

  return (
    <div className="flex justify-center p-5">
      <div>
        <h1 className="text-center sm: text-1xl md:text-3xl lg:text-5xl font-semibold p-15">
          Formulario Reto 19 - Formulario de Registro
        </h1>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-5 gap-5">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
          />

          <input
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
          />

          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
          />

          <input
            type="password"
            placeholder="Confirme su contraseña"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
          />

          <button
            type="submit"
            className="border-2 border-sky-500 rounded-lg p-1.5 mt-10 sm:w-50 md:w-100"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;