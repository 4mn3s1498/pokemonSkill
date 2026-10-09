const chiaviRelazioni = [
  "double_damage_to",
  "double_damage_from",
  "no_damage_to",
  "no_damage_from"
];
export async function getTipoIt(url) {
  const response = await fetch(url);

  const datiTipo = await response.json();

  const datiIt = datiTipo.names.find(
    (dato) => dato.language.name === "it"
  ).name;

  return datiIt;
}

export async function fetchPokemon(nome) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nome}`
    );

    const data = await response.json();

    const statistiche = await Promise.all(
      data.stats.map(async (stat) => {
        const dato = await getTipoIt(stat.stat.url);

        return {
          name: dato,
          base_stat: stat.base_stat
        };
      })
    );

    data.stats = statistiche;

    const abilita = await Promise.all(
      data.abilities.map(async (abilita) => {
        const data = await getTipoIt(abilita.ability.url);

        return {
          nome: data,
          nascosta: abilita.is_hidden
        };
      })
    );

    data.abilities = abilita;

    const datiLotta = await fetch(
      data.types[0].type.url
    );

    const danni = await datiLotta.json();

    const relazioniIt = await Promise.all(
      chiaviRelazioni.map(async (chiave) => {
        const tipi = danni.damage_relations[chiave];

        const tipiIt = await Promise.all(
          tipi.map(async (x) => {
            const nome = await getTipoIt(x.url);

            return {
              name: nome,
              url: x.url
            };
          })
        );

        return {
          chiave: chiave,
          tipi: tipiIt
        };
      })
    );

    const danniIt = Object.fromEntries(
      relazioniIt.map((oggetto) => [
        oggetto.chiave,
        oggetto.tipi
      ])
    );

    danni.damage_relations = danniIt;

    const nomeItaliano = await getTipoIt(
      data.types[0].type.url
    );

    return {
      dati: data,
      datiLotta: danni,
      nomeItaliano: nomeItaliano,
      statistiche: statistiche,
      abilità: abilita
    };
  } catch (error) {
    console.error(error);
  }
}