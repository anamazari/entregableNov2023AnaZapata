import { useState } from "react"
import Card from "./components/Card";
import './Formulario.css'


function App() {
  
  const [formulario, setformulario] = useState({
    nombre: '',
    escritor: '',
  });
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formulario.nombre.length < 3 || formulario.nombre.startsWith(' ') || formulario.escritor.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
    } else {
      setError('');
      setSubmittedData(formulario);
    }
  };

  return (
    <div>
      <form 
        className="formulario"
        onSubmit={handleSubmit}
      >
        <label>Ingresa tu nombre</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleInputChange}
        />

        <label>Escribe tu escritor favorito</label>
        <input
          type="text"
          name="escritor"
          value={formulario.escritor}
          onChange={handleInputChange}
        />

        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {submittedData && (
        <Card
          nombre={submittedData.nombre}
          escritor={submittedData.escritor}
        />
      )}
    </div>
  );
  
}

export default App;
