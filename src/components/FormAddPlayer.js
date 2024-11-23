import { useState } from "react";

export default function FormAddPlayer({ onAddPlayer }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newPlayer = {
      name: name,
      score: 0,
      id: crypto.randomUUID(),
    };
    onAddPlayer(newPlayer);
    setName("");
  }

  return (
    <form className="form-add-player" onSubmit={handleSubmit}>
      <label>🧑‍🦱 Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}
