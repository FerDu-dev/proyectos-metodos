import { useState, useEffect } from 'react';
import CuatroSemaforos from './components/CuatroSemaforos';
import DosSemaforos from './components/DosSemaforos';

function App() {
  const [simulacionEnEjecucion, setSimulacionEnEjecucion] = useState(false);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);

  useEffect(() => {
    if (simulacionEnEjecucion) {
      const intervalo = setInterval(() => {
        setTiempoTranscurrido((tiempo) => tiempo + 1);
      }, 1000);
      return () => clearInterval(intervalo);
    }
  }, [simulacionEnEjecucion]);

  const manejarClicSimulacion = () => {
    setSimulacionEnEjecucion((enEjecucion) => !enEjecucion);
    setTiempoTranscurrido(0);
  };

  return (
    <main className="app">
      <button onClick={manejarClicSimulacion}>
        {simulacionEnEjecucion ? 'Detener' : 'Iniciar'} simulación
      </button>
      <div>Tiempo transcurrido: {tiempoTranscurrido} segundos</div>
      <div className="contenedor-simulaciones">
        <CuatroSemaforos simulacionEnEjecucion={simulacionEnEjecucion} />
        {/* <DosSemaforos /> */}
      </div>
    </main>
  );
}

export default App;

