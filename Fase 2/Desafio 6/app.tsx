import React, { useState } from "react";

interface EncabezadoProps {
  titulo: string;
}

interface ContenidoProps {
  texto: string;
}

function Encabezado({ titulo }: EncabezadoProps) {
  return (
    <h1 style={{ color: "blue" }}>
      {titulo}
    </h1>
  );
}

function Contenido({ texto }: ContenidoProps) {
  const colores = ["yellow", "cyan", "orange"];
  const [indiceColor, setIndiceColor] = useState(0);

  const cambiarColor = () => {
    setIndiceColor((indiceColor + 1) % colores.length);
  };

  return (
    <div>
      <p
        style={{
          backgroundColor: colores[indiceColor],
          padding: "10px"
        }}
      >
        {texto}
      </p>

      <button onClick={cambiarColor}>
        Cambiar color
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Encabezado titulo="Mi Aplicación React" />

      <Contenido texto="Este es el contenido del componente con estado." />
    </div>
  );
}

export default App;