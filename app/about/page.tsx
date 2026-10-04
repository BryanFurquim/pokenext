import Image from "next/image";
import styles from '../../styles/about.module.css'


export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Bem-vindo ao PokeNext! Este é um projeto desenvolvido com Next.js e TypeScript, com o objetivo de criar uma aplicação web para explorar informações sobre  Pokémon.</p>
            <Image src="/charizard.png" alt="charizard" width={350} height={320} />
        </div>
    )
}