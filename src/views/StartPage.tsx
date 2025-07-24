import { Link } from 'react-router-dom';
import styles from './StartPage.module.css';
import { useModal } from '@src/lib/hooks';
import Modal from '@src/components/Modal';

export default function StartPage() {
  const modal = useModal();

  return (
    <section className={styles.pageContainer}>
      <h1>Shelving Practice!</h1>
      <Link to={'/lvl/1'} className={styles.startButton}>
        Start
      </Link>
      <button
        onClick={() => {
          console.log('opening');
          modal.setOpen(true);
        }}
      >
        Learn More
      </button>
      <Modal ref={modal.ref}>
        <div className={styles.modalContent}>
          <h2>Instructions and Info</h2>
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
        </div>
        <button type="reset" onClick={() => modal.setOpen(false)}></button>
      </Modal>
    </section>
  );
}
