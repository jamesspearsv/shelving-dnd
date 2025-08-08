import { Link } from 'react-router-dom';
import styles from './MainMenu.module.css';

export default function MainMenu() {
  return (
    <section className={styles.pageContainer}>
      <h1>Shelving Practice!</h1>
      <Link to={'lessons'} className={styles.startButton}>
        Lessons
      </Link>
    </section>
  );
}
