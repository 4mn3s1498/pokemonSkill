export function Lotta({ lotta }) {
  const forte = {
    titolo: "Forte contro: ",
    relazione: "double_damage_to"
  };

  const debole = {
    titolo: "Debole contro: ",
    relazione: "double_damage_from"
  };
  const immune = {
    titolo: "Non fa danno a: ",
    relazione: "no_damage_to"
};
const immuneDa = {
    titolo: "Non riceve danno: ",
    relazione: "no_damage_from"
};

  const relazioni = [forte, debole,immune,immuneDa];

  return (
    <div>
      {lotta
        ? relazioni.map((relazione) => (
            <div key={relazione.titolo}>
              {relazione.titolo}{" "}

              {lotta.damage_relations[relazione.relazione].map((data) => (
                <span key={data.name}>
                  {data.name}{" "}
                </span>
              ))}
            </div>
          ))
        : ""}
    </div>
  );
}
