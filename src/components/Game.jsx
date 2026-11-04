export default function Game({ playerData, onExit }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Mesa de Cartas 🃏</h2>
      <p>Jugador: <strong>{playerData.nickname}</strong></p>
      <p>Modo: {playerData.vsBot ? 'vs Bot 🤖' : 'vs Jugador 👥'}</p>

      {/* Aquí iría la lógica del tablero, cartas, etc. */}
      <div style={{ margin: '2rem 0', padding: '2rem', border: '2px dashed #666', borderRadius: '8px' }}>
        <p><em>[ Tablero de juego de cartas ]</em></p>
      </div>

      <button onClick={onExit} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Salir / Volver a Recepción
      </button>
    </div>
  );
}