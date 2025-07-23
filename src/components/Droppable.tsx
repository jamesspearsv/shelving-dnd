import { useDroppable } from '@dnd-kit/core';
import type { DroppableProps } from '@src/lib/types';

export default function Droppable(props: DroppableProps) {
  const { setNodeRef } = useDroppable({
    id: props.index,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
}
