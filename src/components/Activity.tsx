import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import styles from './Activity.module.css';
import { useEffect, useState } from 'react';
import type { Activity, BookInterface } from '@src/lib/types';
import Book from './Book';

export default function Activity(props: {
  name: string;
  activity: Activity;
  handleCompletion: () => void;
  lastActivity: boolean;
}) {
  const [dropped, setDropped] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [shelf, setShelf] = useState<BookInterface[]>([]);

  // reset state when activity shelf changes
  useEffect(() => {
    setDropped(false);
    setCorrect(false);
    setShelf(props.activity.shelf);
  }, [props.activity]);

  // check solution when book is dropped
  useEffect(() => {
    const answer = shelf[props.activity.answer];
    const result = answer === props.activity.book;
    if (dropped) {
      setCorrect(result);
    }
  }, [dropped, props.activity, shelf]);

  // handle drag end event
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

  // reset current lesson activity
  function resetActivity() {
    setDropped(false);
    setCorrect(false);
    setShelf([...props.activity.shelf]);
  }

  // handle advancing to next lesson activity
  function continueLesson() {
    props.handleCompletion();
  }

  return (
    <section className={styles.container}>
      <DndContext onDragEnd={handleDragEnd}>
        <section className={styles.activity}>
          <div>
            {/* book to shelve */}
            {!dropped && (
              <Draggable index={-1} item={props.activity.book}>
                <Book
                  title={props.activity.book.title}
                  author={props.activity.book.author}
                  call_no={props.activity.book.call_no}
                />
              </Draggable>
            )}
          </div>
          <div className={styles.shelf}>
            {/* shelved books */}
            {shelf.map((book, index) => {
              return (
                <Droppable index={index}>
                  <Book
                    title={book.title}
                    author={book.author}
                    call_no={book.call_no}
                  />
                </Droppable>
              );
            })}
          </div>
        </section>
      </DndContext>
      {/* TODO: Improve feedback UI */}
      <section>
        {!dropped ? (
          <p>Sort the book above into the correct place on the shelf.</p>
        ) : correct ? (
          <div className={styles.feedback}>
            <p>
              {!props.lastActivity
                ? 'Correct! Continue to the next activity.'
                : 'You have finished this lesson! Go back to the lesson screen to continue.'}
            </p>
            <button onClick={continueLesson}>
              {!props.lastActivity ? 'Next activity' : 'Back to lessons'}
            </button>
          </div>
        ) : (
          <div>
            <p>Incorrect. Reset the lesson and try again!</p>
            <button onClick={resetActivity}>Reset</button>
          </div>
        )}
      </section>
    </section>
  );
}
