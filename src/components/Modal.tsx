import type { ModalProps } from '@src/lib/types';

export default function Modal(props: ModalProps) {
  return (
    <dialog ref={props.ref}>
      <article>{props.children}</article>
    </dialog>
  );
}
