
 export function PkmnCard({pokemon, lingua})
 { return <> <div>
        {pokemon ? (
          <>
            <div>{pokemon.name}</div>

            <img src={pokemon.sprites.front_default} />

            <div>{pokemon.abilities[0].ability.name}</div>

            <div>
              {/* {pokemon.types
                .map((type) => type.type.name)
                .join(" ")} */lingua}
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
      }