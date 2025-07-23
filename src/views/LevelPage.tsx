import LevelContainer from '../components/LevelContainer';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { LevelItem } from '@src/lib/types';

export default function LevelPage() {
  const { levelNumber } = useParams(); // url param indicating the active level
  const [level, setLevel] = useState<LevelItem[] | null>(null);

  // TODO: extract into function or hook
  useEffect(() => {
    if (!levelNumber) return;

    (async () => {
      const storedLevels = localStorage.getItem('shelving-dnd-levels');
      if (!storedLevels) return;
      const levels = await JSON.parse(storedLevels);

      console.log(levels);

      if (levelNumber > levels.length) setLevel(null);

      setLevel(levels[Number(levelNumber) - 1]);
    })();
  }, [levelNumber]);

  if (!level) {
    return (
      <section style={{ textAlign: 'center' }}>
        <h1>Congratulations!</h1>
        <p>You have completed all the levels!</p>
        <Link to="/">Start Screen</Link>
      </section>
    );
  }

  return (
    <LevelContainer
      level={level}
      levelName={`Level ${levelNumber}`}
      levelNumber={Number(levelNumber)}
    />
  );
}
