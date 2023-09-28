export function TablaPuntuacion({ jugadores, puntuaciones }) {
    if (!jugadores || !puntuaciones) {
      return null;
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>Turno</th>
            {jugadores.map((jugador) => (
              <th key={jugador}>{jugador}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {puntuaciones.map((puntuacion, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {jugadores.map((jugador) => (
                <td key={jugador}>{puntuacion[jugador]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }