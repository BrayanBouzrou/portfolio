import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>À propos - Mon Portfolio Éco-responsable</title>
                <meta name="description" content="En savoir plus sur moi et mes engagements." />
            </Head>
            <main className={`${styles.main} about-section`}>
                <h1 className={styles.title}>À propos</h1>

                <section className={styles.contentSection}>
                    <h2>Éducation</h2>
                    <ul className={styles.list}>
                        <li>BUT Informatique à IUT de Lens (2022-2025)</li>
                        <li>Baccalauréat Numérique et Science de Informatique/Maths au Lycée Carnot (2019-2021)</li>
                    </ul>
                </section>

                <section className={styles.contentSection}>
                    <h2>Compétences</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCategory}>
                            <h3>Programmation</h3>
                            <p>Python, Java/JavaFX, SAP/ABAP</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3>Web</h3>
                            <p>HTML/CSS, PHP, Spring/React</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3>Base de données</h3>
                            <p>MySQL, PL/PGSQL, MongoDB</p>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3>Outils</h3>
                            <p>GitLab/GitHub, Shell Linux</p>
                        </div>
                    </div>
                </section>

                <section className={styles.contentSection}>
                    <h2>Qualités</h2>
                    <p>Motivé, Sociable, Leader, Sérieux</p>
                </section>

                <section className={styles.contentSection}>
                    <h2>Loisirs</h2>
                    <p>Volleyball, Musculation, Culture japonaise, Jeux vidéo</p>
                </section>
            </main>
        </div>
    );
}