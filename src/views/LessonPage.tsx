import { useParams, useSearchParams } from 'react-router-dom';
import lessons from '@src/lib/lessons';
import LessonContainer from '@src/components/Lessons/LessonContainer';

export default function LessonPage() {
  //! Look up how to use useParams
  const { name } = useParams();
  const searchParams = useSearchParams();

  // TODO: handle activity completion
  function handleCompletion() {
    console.log(searchParams);
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
