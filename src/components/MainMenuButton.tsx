import { useNavigate } from 'react-router-dom';
import styles from './MainMenuButton.module.css';
import Modal from './Modal';
import { useModal } from '@src/lib/hooks';

export default function MainMenuButton() {
  const navigate = useNavigate();
  const modal = useModal();
  function navigateToMainMenu() {
    navigate('/');
  }

  return (
    <>
      <button onClick={() => modal.setOpen(true)}>Main Menu</button>
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
