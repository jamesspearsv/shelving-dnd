import lessons from '@src/lib/lessons';
import { Link } from 'react-router-dom';

export default function LessonSelector() {
  const links = Object.keys(lessons);

  return (
    <section>
      <h1>Select Lesson</h1>
      <div>
        {links.map((link) => (
          <div>
            <Link to={link}>{lessons[link].name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
