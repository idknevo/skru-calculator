import Button from "./Button";
export default function PlayersList({ players, selectedPlayer, onSelection }) {
  return (
    <>
      <h1>Players List</h1>
      <ul>
        {players.map((player) => (
          <Player
            player={player}
            selectedPlayer={selectedPlayer}
            onSelection={onSelection}
            key={player.id}
          />
        ))}
      </ul>
    </>
  );
}

function Player({ player, selectedPlayer, onSelection }) {
  const isSelected = player.id === selectedPlayer?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <div className="info">
        <h3>{player.name}</h3>
        <p>score: {player.score}</p>
      </div>
      <Button onClick={() => onSelection(player)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
