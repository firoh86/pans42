import { useState } from 'react';
import Lobby from './components/Lobby';
import Game from './components/Game';

export default function App() {
  // 'lobby' o 'game'
  const [screen, setScreen] = useState('lobby');
  const [playerData, setPlayerData] = useState(null);

  const handleStartGame = (data) => {
    setPlayerData(data);
    setScreen('game');
  };

  const handleExitGame = () => {
    setPlayerData(null);
    setScreen('lobby');
  };

  return (
    <div className="App">
      {screen === 'lobby' && <Lobby onStartGame={handleStartGame} />}
      {screen === 'game' && <Game playerData={playerData} onExit={handleExitGame} />}
    </div>
  );
}