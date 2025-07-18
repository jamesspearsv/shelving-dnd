export interface Book {
  call_no: string;
  title: string;
  author: string;
}

import { createBrowserRouter, RouterProvider } from 'react-router';
import StartPage from './views/StartPage';
import LevelPage from './views/LevelPage';

const router = createBrowserRouter([
  { path: '/', element: <StartPage /> },
  { path: '/lvl/:levelNumber', element: <LevelPage /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
