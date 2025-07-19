import { useDroppable } from '@dnd-kit/core';
import type { PropsWithChildren } from 'react';

// TODO: move to types file
interface DroppableProps extends PropsWithChildren {
  index: number;
}

export default function Droppable(props: DroppableProps) {
  const { setNodeRef } = useDroppable({
    id: props.index,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
}
