import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Accueil - Mon Portfolio Éco-responsable</title>
                <meta name="description" content="Portfolio conçu pour minimiser son impact environnemental." />
            </Head>
            <main className={styles.main}>
                <h1>Bienvenue sur mon portfolio éco-responsable !</h1>
                <p>Ce site a été conçu avec des pratiques respectueuses de l'environnement.</p>
            </main>
        </div>
    );
}