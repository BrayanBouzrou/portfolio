import Head from 'next/head';
import styles from '../styles/Projects.module.css';

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projets - Mon Portfolio Éco-responsable</title>
                <meta name="description" content="Découvrez mes projets éco-conçus." />
            </Head>
            <main className={styles.main}>
                <h1>Projets</h1>
                <ul className={styles.projectList}>
                    <li><strong>FlatCraft :</strong> Projet en Java/JavaFX, GitLab</li>
                    <li><strong>IVT :</strong> Projet en HTML/CSS</li>
                    <li><strong>Jeu du Chameau :</strong> Projet en Python</li>
                    <li><strong>Jeu du Juste Prix :</strong> Projet en Java/JavaFX</li>
                    <li><strong>Application de gestion de stock d’eau :</strong> Java/JavaFX, GitLab, PL/PGSQL</li>
                </ul>
            </main>
        </div>
    );
}
