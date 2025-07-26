import { Link, useNavigate } from 'react-router-dom';
import styles from './LessonHeader.module.css';
import Modal from '../Modal';
import { useModal } from '@src/lib/hooks';

export default function LessonHeader(props: { name: string }) {
  const navigate = useNavigate();
  const modal = useModal();
  function navigateToMainMenu() {
    navigate('/');
  }

  return (
    <>
      <section className={styles.headerContainer}>
        <h1>Lesson: {props.name}</h1>
        <button onClick={() => modal.setOpen(true)}>Main Menu</button>
      </section>
      <Modal ref={modal.ref}>
        <section className={styles.modalContent}>
          <p>
            Are you sure you want to return to the main menu? All progress will
            be lost.
          </p>
          <div className={styles.modalButtons}>
            <button onClick={navigateToMainMenu}>Yes</button>
            <button onClick={() => modal.setOpen(false)}>No</button>
          </div>
        </section>
      </Modal>
    </>
  );
}
