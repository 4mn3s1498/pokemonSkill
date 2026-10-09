
 export function PkmnCard({pokemon, lingua})
 { return <> <div>
        {pokemon ? (
          <>
            <div>{pokemon.name}</div>

            <img src={pokemon.sprites.front_default} />

            <div>{pokemon.abilities[0].nome}</div>

            <div>
              {/* {pokemon.types
                .map((type) => type.type.name)
                .join(" ")} */lingua}
            </div>

            {pokemon.stats.map((stat) => (
              <div key={stat.name}>
                {stat.name}: {stat.base_stat}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
      </>
      }