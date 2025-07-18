export interface Book {
  call_no: string;
  title: string;
  author: string;
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from './views/StartPage';
import LevelPage from './views/LevelPage';
import { fetchLevels } from './actions';
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
