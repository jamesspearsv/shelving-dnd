import { useParams, useSearchParams } from 'react-router-dom';
import lessons from '@src/lib/lessons';
import Activity from '@src/components/Lessons/Activity';

export default function Lesson() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const activityParam = searchParams.get('activity');
  let activityNumber = activityParam ? parseInt(activityParam) : 0;
  if (isNaN(activityNumber)) activityNumber = 0;

  function handleCompletion() {
    if (activityNumber < lesson.activities.length - 1) {
      setSearchParams({ activity: `${activityNumber + 1}` });
    } else return; // TODO: handle lesson completion
  }

  if (!name) return null;
  if (!(name in lessons)) return null;

  const lesson = lessons[name];

  return (
    <Activity
      name={lesson.name}
      activity={lesson.activities[activityNumber]}
      handleCompletion={handleCompletion}
    />
  );
}
