import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import LESSONS from '@src/lib/lessons';
import Activity from '@src/components/Lessons/Activity';

// TODO: Add a lesson introduction element
// The element should appear when the first activity is rendered and anytime the user chooses to re-read the introduction information.

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
    <>
      <Activity
        name={lesson.name}
        activity={lesson.activities[activityNumber]}
        handleCompletion={handleCompletion}
        lastActivity={activityNumber == lesson.activities.length - 1}
      />
    </>
  );
}
