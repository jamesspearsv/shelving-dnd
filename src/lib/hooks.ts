import { useEffect, useRef, useState } from 'react';

export function useModal() {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState(false);

  // Add close event listener to referenced dialog element
  useEffect(() => {
    if (!ref.current) return;

    const controller = new AbortController();
    const signal = controller.signal;

    ref.current.addEventListener(
      'close',
      () => {
        setOpen(false);
      },
      { signal }
    );

    return () => {
      controller.abort();
    };
  });

  // Handle modal opening and closing effect
  useEffect(() => {
    if (!ref.current) return;

    if (open) ref.current.showModal();
    if (!open) ref.current.close();
  }, [open]);

  return { ref, open, setOpen };
}
