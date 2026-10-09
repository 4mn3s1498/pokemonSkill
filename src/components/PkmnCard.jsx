import { Lotta } from "./Lotta";

export function PkmnCard({ pokemon, lingua, lotta }) {
  return (
    <div className="pokemon-card">
      {pokemon ? (
        <>
          <h2>{pokemon.name}</h2>

          <img
            className="pokemon-img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <div className="pokemon-info">
            <p>Abilità: {pokemon.abilities[0].nome}</p>
            <p>Tipo: {lingua}</p>
          </div>

          <div className="pokemon-stats">
            {pokemon.stats.map((stat) => (
              <p key={stat.name}>
                {stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>

          <div className="pokemon-lotta">
            <Lotta lotta={lotta} />
          </div>
        </>
      ) : null}
    </div>
  );
}
