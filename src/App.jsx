
import { useState } from "react";
import { PkmnCard } from "./components/pkmnCard";
import { fetchPokemon } from "./components/api/pkmn";

export default function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [lotta, setLotta] = useState("");
  const [nomeItaliano, setNomeItaliano] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>POKEMON SKILL</h1>

      <div className="tema">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Modalità chiara" : "🌙 Modalità scura"}
        </button>
      </div>

      <div className="ricerca">
        <input
          placeholder="Inserisci il nome del Pokémon"
          value={input}
          onChange={(evento) => setInput(evento.target.value)}
        />

        <button
          onClick={async () => {
            const data = await fetchPokemon(input);
            setPokemon(data.dati);
            setLotta(data.datiLotta);
            setNomeItaliano(data.nomeItaliano);
          }}
        >
          Cerca
        </button>
      </div>

      <PkmnCard
        pokemon={pokemon}
        lingua={nomeItaliano}
        lotta={lotta}
      />
    </div>
  );
}
