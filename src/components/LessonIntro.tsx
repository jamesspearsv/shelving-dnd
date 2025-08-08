import { useModal } from '@src/lib/hooks';
import { useEffect } from 'react';
import Modal from './Modal';

export default function LessonIntro(props: { init: boolean }) {
  const modal = useModal();

  useEffect(() => {
    if (!modal.ref.current) return;
    if (props.init) modal.setOpen(true);
  }, [modal, props.init]);

  return (
    <>
      <button onClick={() => modal.setOpen(true)}>Need a hint?</button>
      <Modal ref={modal.ref}>
        <p>Here's a hint</p>
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
