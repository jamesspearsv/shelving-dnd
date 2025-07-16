import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';
import { useState } from 'react';

const INITIAL_LIST = ['item 1', 'item 2', 'item 3'];

function App() {
  const [list, setList] = useState(
    INITIAL_LIST.sort(() => Math.random() - Math.random())
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
              <Draggable key={item} index={index} item={item}>
                {item}
              </Draggable>
            </Droppable>
          ))}
        </DndContext>
      </section>
    </main>
  );
}

export default App;
