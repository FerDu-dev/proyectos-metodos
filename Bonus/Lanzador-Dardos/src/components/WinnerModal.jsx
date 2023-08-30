export function WinnerModal ({ winner, resetGame }) {
  return (
    <section className='winner'>
      <div className='text'>
        <h2>El ganador es: {winner}</h2>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
