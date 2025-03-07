import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [searchPerformed, setSearchPerformed] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center p-15">
      <div className="border-2 border-teal-200 rounded-lg w-150">
        <h1 className="text-center text-2xl font-semibold p-5">
          Formulario Reto 19
        </h1>
        <form
          className="flex flex-col justify-center items-center p-5 gap-5"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Digite su nombre"
            className="border-2 border-sky-500 rounded-lg p-1.5"
            type="text"
            value={name}
            onChange={handleName}
          />
          <input
            placeholder="Digite su apellido"
            className="border-2 border-sky-500 rounded-lg p-1.5"
            type="text"
            value={lastName}
            onChange={handleLastName}
          />
          <input
            placeholder="Digite su correo electrónico"
            className="border-2 border-sky-500 rounded-lg p-1.5"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <input
            placeholder="Digite su contraseña"
            className="border-2 border-sky-500 rounded-lg p-1.5"
            type="text"
            value={password}
            onChange={handlePassword}
          />
          <input
            placeholder="Digite su contraseña"
            className="border-2 border-sky-500 rounded-lg p-1.5"
            type="text"
            value={cPassword}
            onChange={handleCPassword}
          />
          <button
            className="border-2 border-sky-500 rounded-lg p-1.5 mt-10"
            type="submit"
          >
            Enviar
          </button>
        </form>
        {searchPerformed && !movieFound && <p>Película no encontrada</p>}
      </div>
    </div>
  );
};

export default Home;
