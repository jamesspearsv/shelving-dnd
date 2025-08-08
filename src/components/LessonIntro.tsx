import { useModal } from '@src/lib/hooks';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './LessonIntro.module.css';

export default function LessonIntro(props: { init: boolean; content: string }) {
  const modal = useModal();
  const [firstRender, setFirstRender] = useState(props.init);

  useEffect(() => {
    if (!modal.ref.current) return;
    if (firstRender) {
      modal.setOpen(true);
      setFirstRender(false);
    }
  }, [modal, firstRender]);

  return (
    <>
      <button onClick={() => modal.setOpen(true)}>Need a hint?</button>
      <Modal ref={modal.ref}>
        <div className={styles['markdown-container']}>
          <Markdown remarkPlugins={[remarkGfm]}>{props.content}</Markdown>
        </div>
        <button
          type="reset"
          onClick={() => {
            modal.setOpen(false);
          }}
        ></button>
      </Modal>
    </>
  );
}
