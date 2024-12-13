import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact - Mon Portfolio Éco-responsable</title>
                <meta name="description" content="Me contacter pour plus d'informations." />
            </Head>
            <main className={styles.main}>
                <h1>Contact</h1>
                <p>Vous pouvez me joindre via ce formulaire :</p>
                {/* Formulaire de contact ici */}
            </main>
        </div>
    );
}