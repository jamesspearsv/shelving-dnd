import { useDraggable } from '@dnd-kit/core';
import type { PropsWithChildren } from 'react';
import type { Book } from '../App';

interface DraggableProps extends PropsWithChildren {
  index: number;
  item: Book;
}

export default function Draggable(props: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.index,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    width: 'fit-content',
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
