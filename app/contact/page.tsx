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
                <p><strong>Email :</strong> bouzroubrayan@gmail.com</p>
                <p><strong>Téléphone :</strong> 0620388175</p>
                <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/brayan-bouzrou" target="_blank">Mon profil LinkedIn</a></p>
            </main>
        </div>
    );
}