import './Matriz.css'

export default function Matriz ({ matriz, title }) {
  return (
    <>
      <h1 className='title'>{title}</h1>
      <table className='matriz-table'>
        <thead>
          <tr>
            <th rowSpan={2}>Cursos</th>
            <th colSpan={5}>Profesores</th>
          </tr>
          <tr>
            {matriz[0].map((_, index) => (
              <th key={index}>P{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matriz.map((row, index) => (
            <tr key={index}>
              <td>C{index + 1}</td>
              {row.map((col, index) => (
                <td key={index}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <table className='table-auto'>
        <thead>
          <tr>
            <th>Fila</th>
            {matriz[0].map((_, index) => (
              <th key={index}>C{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matriz.map((row, index) => (
            <tr key={index}>
              <td>F{index + 1}</td>
              {row.map((col, index) => (
                <td key={index}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  )
}
