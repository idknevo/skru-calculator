import PlayersList from "./PlayersList";
import FormAddPlayer from "./FormAddPlayer";
import FormScores from "./FormScores";
import Button from "./Button";
import { useState } from "react";

export default function Container() {
  const [players, setPlayers] = useState([]);
  const [addPlayerOpen, setAddPlayerOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  function handleOpenAddPlyer() {
    setAddPlayerOpen((open) => !open);
  }

  function handleAddPlayer(player) {
    setPlayers((players) => [...players, player]);
  }

  function handleSelection(player) {
    setSelectedPlayer((selected) =>
      selected?.id === player.id ? null : player
    );
    setAddPlayerOpen(false);
  }

  function handleScore(value, minus = false) {
    setPlayers((palyers) =>
      palyers.map((player) => {
        if (player.id === selectedPlayer?.id) {
          const modifiedPlayer = minus
            ? { ...player, score: player.score - value }
            : { ...player, score: player.score + value };
          setSelectedPlayer(modifiedPlayer);
          return modifiedPlayer;
        } else return player;
      })
    );
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <PlayersList
          players={players}
          selectedPlayer={selectedPlayer}
          onSelection={handleSelection}
          key={selectedPlayer?.name}
        />
        {addPlayerOpen && <FormAddPlayer onAddPlayer={handleAddPlayer} />}
        <Button onClick={handleOpenAddPlyer}>
          {addPlayerOpen ? "Close" : "Add Player"}
        </Button>
      </aside>
      <main>
        {selectedPlayer && (
          <FormScores
            selectedPlayer={selectedPlayer}
            onChangeScore={handleScore}
            key={selectedPlayer.id}
          />
        )}
      </main>
    </div>
  );
}
