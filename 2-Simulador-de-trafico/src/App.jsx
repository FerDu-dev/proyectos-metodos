import CuatroSemaforos from "./components/CuatroSemaforos"
import DosSemaforos from "./components/DosSemaforos"

function App () {
  return (
    <main className="app">
      <div className='contenedor-simulaciones'>
        <CuatroSemaforos />
        <DosSemaforos />
      </div>
    </main>
  )
}

export default App
