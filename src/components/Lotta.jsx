 import { useState } from "react";
 import { getNomeItaliano } from "./api/pkmn";
 
 export function Lotta({ lotta }){
      const forte = {
    titolo: "Forte contro: ",
    relazione: "double_damage_to"
  };

  const debole = {
    titolo: "Debole contro: ",
    relazione: "double_damage_from"
  };

  const relazioni = [forte, debole];

  return <div>
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
  }