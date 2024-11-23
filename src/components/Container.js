import PlayersList from "./PlayersList";
import FormAddPlayer from "./FormAddPlayer";
import FormScores from "./FormScores";
import Button from "./Button";
import { useState } from "react";

// const initialPlayers = [
//   {
//     name: "ahmed",
//     score: 22,
//     id: 1,
//   },
//   {
//     name: "marko",
//     score: 50,
//     id: 2,
//   },
//   {
//     name: "omar",
//     score: 122,
//     id: 3,
//   },
// ];

export default function Container() {
  const [players, setPlayers] = useState([]);
  const [addPlayerOpen, setAddPlayerOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  function handleOpenAddPlyer() {
    setAddPlayerOpen((open) => !open);
  }

  function handleAddPlayer(player) {
    setPlayers((players) => [...players, player]);
    // setAddPlayerOpen(false);
  }

  function handleSelection(player) {
    setSelectedPlayer((selected) =>
      selected?.id === player.id ? null : player
    );
    setAddPlayerOpen(false);
  }

  function handleAddScore(value) {
    setPlayers((palyers) =>
      palyers.map((player) =>
        player.id === selectedPlayer?.id
          ? { ...player, score: player.score + value }
          : player
      )
    );
    // setSelectedPlayer(null);
  }

  function handleMinusScore(value) {
    setPlayers((players) =>
      players.map((player) =>
        player.id === selectedPlayer.id
          ? { ...player, score: player.score - value }
          : player
      )
    );
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <PlayersList
          players={players}
          selectedPlayer={selectedPlayer}
          onSelection={handleSelection}
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
            onAddScore={handleAddScore}
            onMinus={handleMinusScore}
          />
        )}
      </main>
    </div>
  );
}
