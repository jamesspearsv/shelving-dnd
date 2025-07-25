import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import styles from './Lesson.module.css';

const lesson = {
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
  answer: 0,
};

export default function Lesson() {
  // TODO: Build lesson component
  /*
    - [ ] Build lesson data structure
    - [ ] Position book to shelve in the corner of the page
    - [ ] Position books that are 'already on the shelf'
    - [ ] Add droppable slots for book to shelve
    - [ ] Add logic to check books location
    */

  /*
    Lessons need to know a few things:
    - what book is being shelved
    - which books are already shelved
    - where the book to shelve belongs
    - a hint for the user
    */

  // TODO: add drop logic
  return (
    <DndContext>
      <section className={styles.lesson}>
        <div>
          {/* book to shelve */}
          <Draggable index={-1} item={lesson.book}>
            <div className={styles.slot}>
              <div className={styles.book}>
                <p>{lesson.book.title}</p>
                <p>{lesson.book.author}</p>
                <p>{lesson.book.call_no}</p>
              </div>
            </div>
          </Draggable>
        </div>
        <div className={styles.shelf}>
          {/* shelved books */}
          {lesson.shelf.map((book, index) => {
            return (
              <div key={index} className={styles.slot}>
                <div className={styles.book}>
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                  <p>{book.call_no}</p>
                </div>
                <Droppable index={index}>{index}</Droppable>
              </div>
            );
          })}
        </div>
      </section>
    </DndContext>
  );
}
