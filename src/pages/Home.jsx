import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const formRef = useRef(null); // Referencia para el formulario

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleCPassword = (event) => {
    setCPassword(event.target.value);
  };

  useEffect(() => {
    if (password !== cPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [password, cPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !lastName || !email) {
      alert("Todos los campos son requeridos");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido");
      return;
    }

    if (password !== cPassword) {
      alert("Las contraseñas no coinciden, favor ingresarlas nuevamente");
    } else {
      formRef.current.reset(); // Restablecer el formulario
      console.log("Formulario enviado");
    }
  };

  return (
    <div className="flex justify-center p-5">
      <div>
        <h1 className="text-center sm: text-2xl md:text-4xl lg:text-6xl font-semibold p-15">
          Formulario Reto 19
        </h1>
        <form
          ref={formRef}
          className="flex flex-col justify-center items-center p-5 gap-5"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Digite su nombre"
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
            type="text"
            value={name}
            onChange={handleName}
          />
          <input
            placeholder="Digite su apellido"
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
            type="text"
            value={lastName}
            onChange={handleLastName}
          />
          <input
            placeholder="Digite su correo electrónico"
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <input
            placeholder="Digite su contraseña"
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <input
            placeholder="Digite su contraseña"
            className="border-2 border-sky-500 rounded-lg p-1.5 sm:w-100 md:w-150"
            type="password"
            value={cPassword}
            onChange={handleCPassword}
          />
          <button
            className="border-2 border-sky-500 rounded-lg p-1.5 mt-10 sm:w-50 md:w-100"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
