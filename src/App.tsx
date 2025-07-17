export interface Book {
  call_no: string;
  title: string;
  author: string
}

import BOOK_LIST from './assets/level1.json' with { type: "json" };
import LevelContainer from './components/LevelContainer';


function App() {


  return (
    <main>
      <LevelContainer level={BOOK_LIST} levelName='Level 1' />
    </main>
  );
}

export default App;
