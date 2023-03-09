import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!usuario || !pass) {
      console.error('Por favor chequea que la información sea correcta');
      return;
    }
    
    const usuarioRegex = /^\d{2}$/;
    if (!usuarioRegex.test(usuario)) {
      console.error('Tu nombre de usuario debe tener más de 2 caracteres');
      return;
    }
    
    const passRegex = /^\d{6}$/;
    if (!passRegex.test(pass)) {
      console.error('La contraseña debe tener más de  caracteres');
      return;
    }
  
    console.log(`Usuario: ${usuario}, Contraseña: ${pass}`);
    setUsuario('');
    setPass('');
    event.target.reset(); // Resetea el formulario
  }

  return (
    <>
      <div>
        <h1>Inicio de Sesion</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Ingresa tu usuario: |
            <input
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Ejm: Alexander"
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
            />
          </label>
          <br />
          <br />
          
          <label>
            Ingresa tu contraseña: |
            <input
              type="text"
              name="pass"
              id="pass"
              placeholder="Escribe tu contraseña"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </label>
          <br />
          <br />

          <button type="submit">
            Ingresar
          </button>
        </form>
      </div>
      
    </>
  );
}

export default App;