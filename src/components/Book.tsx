import type { PropsWithChildren } from 'react';

import styles from './Activity.module.css';

interface BookProps extends PropsWithChildren {
  title: string;
  author: string;
  call_no: string;
}

export default function Book(props: BookProps) {
  return (
    <div className={styles.slot}>
      <div className={styles.book}>
        <div className={styles.spine}>
          <p className={styles.title}>{props.title}</p>
          <p>
            <em>{props.author}</em>
          </p>
        </div>
        <div className={styles.callNo}>
          <p>{props.call_no}</p>
        </div>
      </div>
    </div>
  );
}
