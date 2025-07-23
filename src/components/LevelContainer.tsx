import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { useEffect, useRef, useState } from 'react';
import styles from './LevelContainer.module.css';
import { Link } from 'react-router';
import type { LevelItem } from '../lib/utils';
import type { LevelContainerProps } from '@src/lib/types';

export default function LevelContainer(props: LevelContainerProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [correctItems, setCorrectItems] = useState(0);
  const [list, setList] = useState<LevelItem[]>([]);

  useEffect(() => {
    setList(() => {
      return props.level.toSorted(
        () => Math.random() - Math.random() + Math.random() * 0.1
      );
    });
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, [props.level]);

  useEffect(() => {
    let c = 0;
    list.forEach((item, index) => {
      if (item === props.level[index]) {
        c++;
      }

      setCorrectItems(c);

      if (c !== list.length) return;
      setTimeout(() => {
        if (!modalRef.current) return;
        const modal = modalRef.current;
        modal.showModal();
      }, 500);
    });
  }, [list, props.level]);

  function handleDragEnd(event: DragEndEvent) {
    if (correctItems === list.length) return;
    if (event.over) {
      // console.log(event);
      // console.log('dragged item: ', list[event.active.id as number]);
      // console.log('dropped on: ', list[event.over.id as number]);

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
        <p
          className={
            correctItems === list.length
              ? styles.levelCompleted
              : styles.levelInProgress
          }
        >
          Books shelved correctly: {correctItems} of {list.length}
        </p>
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
      <dialog ref={modalRef}>
        <article>
          <h2>Level Completed!</h2>
          <Link to={`/lvl/${props.levelNumber + 1}`}>
            {' '}
            Continue to next level
          </Link>
        </article>
      </dialog>
    </section>
  );
}
