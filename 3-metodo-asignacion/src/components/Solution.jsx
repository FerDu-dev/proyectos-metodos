import './Solution.css'
export default function Solution ({ asignation }) {
  return (
    <div className='solution'>
      <h1>ASIGNACIONES</h1>
      <table className='solution-table'>
        <thead>
          <tr>
            <th>Cursos</th>
            <th>Profesor</th>
          </tr>
        </thead>
        <tbody>
          {asignation.map((row, index) => (
            <tr key={index}>
              <td>C{row.fila + 1}</td>
              <td>P{row.columna + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
