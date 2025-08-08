import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import LESSONS from '@src/lib/lessons';
import Activity from '@src/components/Activity';
import LessonIntro from '@src/components/LessonIntro';
import MainMenuButton from '@src/components/MainMenuButton';

export default function Lesson() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const activityParam = searchParams.get('activity');
  let activityNumber = activityParam ? parseInt(activityParam) : 0;
  if (isNaN(activityNumber)) activityNumber = 0;

  function handleCompletion() {
    if (activityNumber < lesson.activities.length - 1) {
      setSearchParams({ activity: `${activityNumber + 1}` });
    } else navigate('/lessons');
  }

  if (!name) return null;
  if (!(name in LESSONS)) return null;

  const lesson = LESSONS[name];

  return (
    <section>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <h1>{lesson.name}</h1>
        <LessonIntro init={activityNumber === 0} />
        <MainMenuButton />
      </div>
      <Activity
        name={lesson.name}
        activity={lesson.activities[activityNumber]}
        handleCompletion={handleCompletion}
        lastActivity={activityNumber == lesson.activities.length - 1}
      />
    </section>
  );
}
