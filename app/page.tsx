import Image from "next/image";

import Card from "../components/card";

type Pokemon = {
  name: string;
  url: string;
  id: number;
};

type PokemonResponse = {
  results: Pokemon[];
};

export default async function Home() {
  const maxPokemons = 100;

  const api = `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`;

  const res = await fetch(api);

  const data: PokemonResponse = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return (
    <>
      <div className="title-container">
        <h1 className="title">Poke<span>Next</span></h1>
        <Image src="/pokeball.png" alt="PokeNext Logo" width={50} height={50} />
      </div>

      <div className="pokemon-container">
        {data.results.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />))}
      </div>
    </>
  );
}