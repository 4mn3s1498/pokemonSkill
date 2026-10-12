
import { Lotta } from "./Lotta";

export function PkmnCard({ pokemon, lingua, lotta }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-card">
      <div className="pokemon-layout">
        {/* Colonna sinistra: Pokémon */}
        <div className="pokemon">
          <h2>{pokemon.name}</h2>

          <img
            className="pokemon-img"
            src={
              pokemon.sprites.other["official-artwork"].front_default
            }
            alt={pokemon.name}
          />
        </div>

        {/* Colonna destra: tutti i dati */}
        <div className="pokemon-dati">
          <div className="pokemon-info">
            <p>
              <strong>Abilità</strong>
              <span>{pokemon.abilities[0].nome}</span>
            </p>

            <p>
              <strong>Tipo</strong>
              <span>{lingua}</span>
            </p>
          </div>

          <section className="pokemon-stats">
            <h3>Statistiche</h3>

            {pokemon.stats.map((stat) => (
              <p key={stat.name}>
                <span>{stat.name}</span>
                <strong>{stat.base_stat}</strong>
              </p>
            ))}
          </section>

          <section className="pokemon-lotta">
            <h3>Relazioni di lotta</h3>
            <Lotta lotta={lotta} />
          </section>
        </div>
      </div>
    </div>
  );
}
