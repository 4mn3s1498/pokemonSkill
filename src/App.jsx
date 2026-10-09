import { useState } from "react";
import { PkmnCard } from "./components/pkmnCard";
import { Lotta } from "./components/Lotta";
import { fetchPokemon } from "./components/api/pkmn";

export default function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [lotta, setLotta] = useState("");
  const [nomeItaliano, setNomeItaliano] = useState("");

  return (
    <>
      <h1>POKEMON SKILL</h1>

      <input
        placeholder="Inserisci il nome del Pokémon"
        onChange={(evento) => {
          setInput(evento.target.value);
        }}
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

      <PkmnCard pokemon={pokemon} lingua={nomeItaliano}/>
      <Lotta lotta={lotta} />
    </>
  );
}