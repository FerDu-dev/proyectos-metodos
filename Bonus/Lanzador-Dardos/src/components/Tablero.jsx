export function Tablero ({ x, y, inicio }) {
  return (
    <div className='container-table'>
      <div className='table-uno'>
        <div className='table-dos'>
          <div className='table-tres'>
            <div className='table-cuatro'>
              {inicio && <div className='pointer1' style={{ top: `${y + 6}px`, left: `${x + 6}px` }} />}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
