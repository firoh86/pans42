import { useState } from 'react';

export default function Lobby({ onStartGame }) {
  const [nickname, setNickname] = useState('');
  const [vsBot, setVsBot] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return alert('Por favor, escribe un apodo');
    
    // Pasamos los datos del jugador a la pantalla de juego
    onStartGame({ nickname, vsBot });
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Pans42 - Recepción</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto' }}>
        <div>
          <label>Tu Nickname: </label>
          <input 
            type="text" 
            value={nickname} 
            onChange={(e) => setNickname(e.target.value)} 
            placeholder="Ej: Firoh"
            required
          />
        </div>

        <div>
          <label>Modo de juego: </label>
          <select value={vsBot ? 'bot' : 'pvp'} onChange={(e) => setVsBot(e.target.value === 'bot')}>
            <option value="bot">Contra Bot 🤖</option>
            <option value="pvp">Multijugador 👥</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          ¡Empezar Partida!
        </button>
      </form>
    </div>
  );
}