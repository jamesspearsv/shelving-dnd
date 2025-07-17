import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import type { Book } from '../App';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { useState } from 'react';
import styles from './LevelContainer.module.css';

interface LevelContainerProps {
  level: Book[];
  levelName: string;
}

export default function LevelContainer(props: LevelContainerProps) {
  const [list, setList] = useState(
    props.level.sort(() => Math.random() - Math.random())
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
    <section>
      <section className={styles.heading}>
        <h1>{props.levelName}</h1>
        <button>Check Solution</button>
      </section>
      <DndContext onDragEnd={handleDragEnd}>
        <div className={styles.level}>
          {list.map((item, index) => (
            <Droppable key={index} index={index}>
              <Draggable key={index} index={index} item={item}>
                <div className={styles.book}>
                  <div>
                    <p className={styles.info}>
                      <strong>{item.title}</strong>
                      <br />{' '}
                      <em>
                        <span>{item.author}</span>
                      </em>
                    </p>
                  </div>
                  <p>{item.call_no}</p>
                </div>
              </Draggable>
            </Droppable>
          ))}
        </div>
      </DndContext>
    </section>
  );
}
