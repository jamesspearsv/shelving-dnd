import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import styles from './LessonContainer.module.css';
import { useEffect, useState } from 'react';
import LessonHeader from './LessonHeader';
import type { Activity } from '@src/lib/types';

export default function LessonContainer(props: {
  name: string;
  activity: Activity;
  handleCompletion: () => void;
}) {
  const [dropped, setDropped] = useState(false);
  const [shelf, setShelf] = useState([...props.activity.shelf]);
  const [correct, setCorrect] = useState(false);
  // TODO: Build lesson component
  /*
    - [x] Build lesson data structure
    - [x] Position book to shelve in the corner of the page
    - [x] Position books that are 'already on the shelf'
    - [x] Add droppable slots for book to shelve
    - [x] Add logic to check books location
    - [x] Add lesson reset button
    - [ ] Add lesson continue button
    */

  function handleDragEnd(event: DragEndEvent) {
    console.log(event.collisions);

    if (!event.collisions) return;

    const collisions = event.collisions;
    const newShelf = [...shelf];

    // find max index in collisions
    let index = 0;
    collisions.forEach((collision) => {
      if ((collision.id as number) >= index) index = collision.id as number;
    });

    // insert book into shelf
    newShelf.splice(index, 0, props.activity.book);

    // update state
    setShelf(newShelf);
    setDropped(true);
  }

  useEffect(() => {
    const result = shelf[props.activity.answer] === props.activity.book;
    console.log(result);
    if (dropped) {
      setCorrect(result);
    }
  }, [dropped, props.activity.answer, props.activity.book, shelf]);

  function resetLesson() {
    setDropped(false);
    setCorrect(false);
    setShelf([...props.activity.shelf]);
  }

  function continueLesson() {
    props.handleCompletion();
  }

  return (
    <div className={styles.lessonContainer}>
      <p>{correct ? 'Solution correct' : 'Solution Incorrect'}</p>
      <LessonHeader name={props.name} />
      <DndContext onDragEnd={handleDragEnd}>
        <section className={styles.lesson}>
          <div>
            {/* book to shelve */}
            {!dropped && (
              <Draggable index={-1} item={props.activity.book}>
                <div className={styles.slot}>
                  <div className={styles.book}>
                    <p>{props.activity.book.title}</p>
                    <p>{props.activity.book.author}</p>
                    <p>{props.activity.book.call_no}</p>
                  </div>
                </div>
              </Draggable>
            )}
          </div>
          <div className={styles.shelf}>
            {/* shelved books */}
            {shelf.map((book, index) => {
              return (
                <div key={index} className={styles.slot}>
                  <Droppable index={index}>
                    <div className={styles.book}>
                      <p>{book.title}</p>
                      <p>{book.author}</p>
                      <p>{book.call_no}</p>
                    </div>
                  </Droppable>
                </div>
              );
            })}
          </div>
        </section>
      </DndContext>
      <section>
        {!dropped ? (
          <p>
            Place the book to the left in the correct place on the shelf to the
            right.
          </p>
        ) : correct ? (
          <div>
            <p>Correct!</p>
            <button onClick={continueLesson}>Continue</button>
          </div>
        ) : (
          <div>
            <p>Incorrect. Reset the lesson and try again!</p>
            <button onClick={resetLesson}>Reset</button>
          </div>
        )}
      </section>
    </div>
  );
}
