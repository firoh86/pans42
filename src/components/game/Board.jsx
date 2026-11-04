import Card from './cards/Card';

export default function Board({ playerData, onExit }) {
  return (
    <div className="game-board" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      color: 'white',
      justifyContent: 'space-between',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      
      {/* 1. ZONA DEL RIVAL (Arriba) */}
      <div className="rival-area" style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', textAlign: 'center' }}>
        <h3>🤖 Chef Rival (Oponente)</h3>
        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>[ Ranuras de comida y cartas del rival ]</p>
      </div>

      {/* 2. ZONA CENTRAL DE LA MESA (Acciones, Mazo y Turno) */}
      <div className="center-table" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <div>
          <span>Turno de: <strong>{playerData.nickname}</strong></span>
          <button 
            onClick={onExit} 
            style={{ marginLeft: '1rem', padding: '0.3rem 0.8rem', cursor: 'pointer', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Salir
          </button>
        </div>
        
        <div style={{ padding: '1.5rem 3rem', border: '2px dashed #2ecc71', borderRadius: '8px', textAlign: 'center' }}>
          <p>🃏 Mazo Central / Acciones</p>
        </div>
      </div>

      {/* 3. TU ZONA / MANO DE CARTAS (Abajo) */}
      <div className="player-area" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ margin: 0 }}>👤 {playerData.nickname} ({playerData.vsBot ? 'vs Bot' : 'Multijugador'})</p>
        
        {/* Contenedor de cartas en mano */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <Card title="Cheddar" subtitle="BURGER" costTop="3€ ING" costBottom="3€ ING" />
          <Card title="Mozzarella" subtitle="PIZZA" costTop="2€ ING" costBottom="2€ ING" />
          <Card title="Pepperoni" subtitle="PIZZA" costTop="4€ ING" costBottom="4€ ING" />
        </div>
      </div>

    </div>
  );
}