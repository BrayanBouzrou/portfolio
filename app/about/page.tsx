import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>À propos - Mon Portfolio Éco-responsable</title>
                <meta name="description" content="En savoir plus sur moi et mes engagements." />
            </Head>
            <main className={styles.main}>
                <h1>À propos</h1>
                <p>Je suis un développeur passionné par l'éco-responsabilité et les bonnes pratiques.</p>
            </main>
        </div>
    );
}