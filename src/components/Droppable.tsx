import { useDroppable } from '@dnd-kit/core';
import type { PropsWithChildren } from 'react';

interface DroppableProps extends PropsWithChildren {
  item: string;
  index: number;
}

export default function Droppable(props: DroppableProps) {
  const { setNodeRef } = useDroppable({
    id: props.index,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
}
