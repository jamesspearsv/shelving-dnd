import lessons from '@src/lib/lessons';
import { Link } from 'react-router-dom';
import styles from './LessonSelector.module.css';
import Icon from '@src/components/Icon';

export default function LessonSelector() {
  const links = Object.keys(lessons);

  return (
    <section className={styles.lessonContainer}>
      <section>
        <h1>Select A Lesson</h1>
        <p>
          Select a lesson below to get stated. These lessons should be completed
          in order from top to bottom.
        </p>
      </section>
      <hr />
      <section>
        {links.map((link) => (
          <div className={styles.lessonLink}>
            <Link to={`/lessons/${link}`}>
              <Icon icon="play-circle" />
            </Link>
            <p>{lessons[link].name}</p>
          </div>
        ))}
      </section>
      <Link to={'/'}>Main Menu</Link>
    </section>
  );
}
