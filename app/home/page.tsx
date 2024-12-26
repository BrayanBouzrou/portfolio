import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Accueil - Mon Portfolio Éco-responsable</title>
                <meta name="description" content="Portfolio conçu pour minimiser son impact environnemental." />
            </Head>
            <main className={styles.main}>
                <h1>Bienvenue sur mon portfolio éco-responsable !</h1>
                <p>Découvrez mes projets, mon parcours et contactez-moi pour en savoir plus !</p>
            </main>
        </div>
    );
}