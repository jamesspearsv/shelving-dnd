import type { PropsWithChildren } from 'react';

export interface Book {
  call_no: string;
  title: string;
  author: string;
}

export interface DraggableProps extends PropsWithChildren {
  index: number;
  item: Book;
}

export interface DroppableProps extends PropsWithChildren {
  index: number;
}

export interface LevelContainerProps {
  level: LevelItem[];
  levelName: string;
  levelNumber: number;
}

export interface LevelItem {
  call_no: string;
  author: string;
  title: string;
  [key: string]: string;
}
