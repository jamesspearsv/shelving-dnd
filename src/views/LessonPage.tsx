import { useParams, useSearchParams } from 'react-router-dom';
import lessons from '@src/lib/lessons';
import LessonContainer from '@src/components/Lessons/LessonContainer';

export default function LessonPage() {
  //! Look up how to use useParams
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // TODO: add logic to parse activity number param
  const activityParam = searchParams.get('activity');
  const activityNumber = activityParam ? parseInt(activityParam) : 0;

  // TODO: handle activity completion
  function handleCompletion() {
    // update activity search param
  }

  if (!name) return null;
  if (!(name in lessons)) return null;

  const lesson = lessons[name];
  return (
    <LessonContainer
      name={lesson.name}
      activity={lesson.activities[0]}
      handleCompletion={handleCompletion}
    />
  );
}
