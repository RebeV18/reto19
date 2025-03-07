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
    <div className="flex flex-col">
      <h1>Formulario Reto 19</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite su nombre"
          type="text"
          value={name}
          onChange={handleName}
        />
        <input
          placeholder="Digite su apellido"
          type="text"
          value={lastName}
          onChange={handleLastName}
        />
        <input
          placeholder="Digite su correo electrónico"
          type="email"
          value={email}
          onChange={handleEmail}
        />
        <input
          placeholder="Digite su contraseña"
          type="text"
          value={password}
          onChange={handlePassword}
        />
        <input
          placeholder="Digite su contraseña"
          type="text"
          value={cPassword}
          onChange={handleCPassword}
        />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
      {searchPerformed && !movieFound && <p>Película no encontrada</p>}
    </div>
  );
};

export default Home;
