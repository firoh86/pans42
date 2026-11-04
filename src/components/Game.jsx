import Board from './game/Board';

export default function Game({ playerData, onExit }) {
  const Stripwidth = 4; // Número base en píxeles

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#24242c',
      backgroundImage: `
        radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0.35) 80%),
        repeating-linear-gradient(60deg, rgba(255, 255, 255, 0.025) 0px, rgba(255, 255, 255, 0.025) ${Stripwidth}px, transparent ${Stripwidth}px, transparent ${Stripwidth * 2}px),
        repeating-linear-gradient(60deg, rgba(0, 0, 0, 0.06) 0px, rgba(0, 0, 0, 0.06) ${Stripwidth}px, transparent ${Stripwidth}px, transparent ${Stripwidth * 2}px)
      `,
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      <Board playerData={playerData} onExit={onExit} />
    </div>
  );
}