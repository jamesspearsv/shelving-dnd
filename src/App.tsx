import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';
import { useState } from 'react';

export interface Book {
  call_no: string;
  title: string;
  author: string
}

import BOOK_LIST from './assets/level1.json' with { type: "json" };


// const INITIAL_LIST = ['item 1', 'item 2', 'item 3'];

function App() {
  const [list, setList] = useState(BOOK_LIST
    // .sort(() => 
    // Math.random() - Math.random())
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over) {
      // console.log(event);
      console.log('dragged item: ', list[event.active.id as number]);
      console.log('dropped on: ', list[event.over.id as number]);

      const newList = [...list];
      // remove dragged item from list
      newList.splice(event.active.id as number, 1);

      // replace dragged item in list
      newList.splice(
        event.over.id as number,
        0,
        list[event.active.id as number]
      );
      setList(newList);
    }
  }

  return (
    <main>
      <h1>Hello, Shelving!</h1>

      <section style={{ display: 'flex', gap: '1rem' }}>
        <DndContext onDragEnd={handleDragEnd}>
          {list.map((item, index) => (
            <Droppable key={item} index={index} item={item}>
              <Draggable key={item} index={index} item={item} />
            </Droppable>
          ))}
        </DndContext>
      </section>
    </main>
  );
}

export default App;
