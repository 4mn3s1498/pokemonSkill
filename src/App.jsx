import { useState } from "react";

async function fetchPokemon(nome) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nome}`
    );

    const data = await response.json();

    const datiLotta = await fetch(
      `https://pokeapi.co/api/v2/type/17/`
    );

    const danni = await datiLotta.json();

    return {
      dati: data,
      datiLotta: danni
    };
  } catch (error) {
    console.error(error);
  }
}

export default function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [lotta, setLotta] = useState("");

  const relazione = "double_damage_to";

  const forte = {
    titolo: "Forte contro",
    relazione: "double_damage_to"
  };

  const debole = {
    titolo: "Debole contro",
    relazione: "double_damage_from"
  };

  const relazioni = [forte, debole];

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

      <div>
        {lotta ? (
          relazioni.map((relazione) => (
            <div key={relazione.titolo}>
              {relazione.titolo}{" "}

              {lotta.damage_relations[relazione.relazione].map((data) => (
                <span key={data.name}>
                  {data.name}{" "}
                </span>
              ))}
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </>
  );
}