type Pokemon = {
  name: string;
  id: number;
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PokemonPage({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  const pokemon: Pokemon = await response.json();

  return (
    <div>
      <h1>{pokemon.name}</h1>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        width={300}
        height={300}
      />
    </div>
  );
}