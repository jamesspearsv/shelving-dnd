import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from '@src/views/StartPage';
import LevelPage from '@src/views/LevelPage';
import { fetchLevels } from '@src/lib/utils';
import { useEffect } from 'react';

const router = createBrowserRouter([
  { path: '/', element: <StartPage /> },
  { path: '/lvl/:levelNumber', element: <LevelPage /> },
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
