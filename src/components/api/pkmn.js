export async function getNomeItaliano(url) {
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

    const datiLotta = await fetch(
      data.types[0].type.url
    );

    const danni = await datiLotta.json();

    const nomeItaliano = await getNomeItaliano(
      data.types[0].type.url
    );

    return {
      dati: data,
      datiLotta: danni,
      nomeItaliano: nomeItaliano
    };
  } catch (error) {
    console.error(error);
  }
}