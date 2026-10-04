import Image from "next/image";
import styles from "../../../styles/Pokemon.module.css";

type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
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
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        width={300}
        height={300}
      />

      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>

      <div>
        <h3>Tipo:</h3>
      </div>

      <div className={styles.types_container}>
        {pokemon.types.map((item, index) => (
          <span
            key={index}
            className={`${styles.type} ${
              styles["type_" + item.type.name]
            }`}
          >
            {item.type.name}
          </span>
        ))}
      </div>

      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>

        <div className={styles.data_weight}>
          <h4>Peso</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}