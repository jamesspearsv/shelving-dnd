import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import styles from './Lesson.module.css';
import { useEffect, useState } from 'react';
import LessonHeader from './LessonHeader';

const lesson = {
  name: 'Basic ordering',
  book: { call_no: 'CAR', author: 'Amiee Carter', title: 'Chance Encounter' },
  shelf: [
    { call_no: 'BLA', author: 'Patrick Blackwood', title: 'Hour of Reckoning' },
    {
      call_no: 'GRE',
      author: 'Tara Greenfield',
      title: 'Last Stand of the Guardians',
    },
    {
      call_no: 'MCA',
      author: 'James Robert McAllister',
      title: 'A Dance with Destiny',
    },
    {
      call_no: 'OCO',
      author: "Marcus O'Connor",
      title: 'Journey to the Unknown',
    },
  ],
  answer: 1,
};

export default function Lesson() {
  const [dropped, setDropped] = useState(false);
  const [shelf, setShelf] = useState([...lesson.shelf]);
  const [correct, setCorrect] = useState(false);
  // TODO: Build lesson component
  /*
    - [x] Build lesson data structure
    - [x] Position book to shelve in the corner of the page
    - [x] Position books that are 'already on the shelf'
    - [x] Add droppable slots for book to shelve
    - [x] Add logic to check books location
    - [ ] Add lesson reset button
    - [ ] Add lesson hint
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
    newShelf.splice(index, 0, lesson.book);

    // update state
    setShelf(newShelf);
    setDropped(true);
  }

  useEffect(() => {
    const result = shelf[lesson.answer] === lesson.book;
    console.log(result);
    if (dropped) {
      setCorrect(result);
    }
  }, [dropped, shelf]);

  return (
    <div className={styles.lessonContainer}>
      <p>{correct ? 'Solution correct' : 'Solution Incorrect'}</p>
      <LessonHeader name={lesson.name} />
      <DndContext onDragEnd={handleDragEnd}>
        <section className={styles.lesson}>
          <div>
            {/* book to shelve */}
            {!dropped && (
              <Draggable index={-1} item={lesson.book}>
                <div className={styles.slot}>
                  <div className={styles.book}>
                    <p>{lesson.book.title}</p>
                    <p>{lesson.book.author}</p>
                    <p>{lesson.book.call_no}</p>
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
          <p>Correct!</p>
        ) : (
          <p>Incorrect. Try Again!</p>
        )}
      </section>
    </div>
  );
}
