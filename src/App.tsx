import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchLevels } from '@src/lib/utils';
import MainMenu from '@src/views/MainMenu';
import LessonSelector from '@src/views/LessonSelector';
import Lesson from '@src/views/Lesson';
import LevelPage from '@src/views/LevelPage';

const router = createBrowserRouter([
  { path: '/', element: <MainMenu /> },
  { path: '/lvl/:levelNumber', element: <LevelPage /> },
  { path: '/lessons/', element: <LessonSelector /> },
  { path: '/lessons/:name', element: <Lesson /> },
]);

let mounted = false;

function App() {
  // fetch level information from remote csv
  useEffect(() => {
    if (!mounted) {
      fetchLevels();
      mounted = true;
    }
  }, []);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
