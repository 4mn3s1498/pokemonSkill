import { useState } from "react";

async function fetchPokemon(nome) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nome}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");

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
          setPokemon(data);
          console.log(pokemon);
        }}
      >
        Cerca
      </button>

      <div>
        {pokemon ? (
          <>
            <div>{pokemon.name}</div>

            <img src={pokemon.sprites.front_default} />

            <div>{pokemon.abilities[0].ability.name}</div>

            <div>
              {pokemon.types
                .map((type) => type.type.name)
                .join(" ")}
            </div>

            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}