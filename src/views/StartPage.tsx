import { Link } from 'react-router-dom';
import styles from './StartPage.module.css';
import { useEffect, useRef, useState } from 'react';

// TODO: Add start screen content
// - General information about the game
// - Game instructions
// - A new game start button
// - A level select button
export default function StartPage() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(modalRef.current);
    if (!modalRef.current) return;
    if (modalOpen) modalRef.current.showModal();
    else modalRef.current.close();
  }, [modalOpen]);

  return (
    <section className={styles.pageContainer}>
      <h1>Shelving Practice!</h1>
      <Link to={'/lvl/1'} className={styles.startButton}>
        Start
      </Link>
      <button
        onClick={() => {
          console.log('opening');
          setModalOpen(true);
        }}
      >
        Learn More
      </button>
      <dialog ref={modalRef} onClose={() => setModalOpen(false)}>
        <article>
          <h2>Learn More</h2>
          <p>
            This is a simple game where you are tasked with organizing a set of
            books in a series of progressively challenging levels.
          </p>
          <p>
            For each level you will be given a set of books. Use your mouse or
            trackpad to drag and drop each book into its correct location.
          </p>
          <p>
            Once all the items are in their correct spot you have completed the
            level and will progress to the next one. Good luck!
          </p>
          <button type="reset" onClick={() => setModalOpen(false)}></button>
        </article>
      </dialog>
    </section>
  );
}
