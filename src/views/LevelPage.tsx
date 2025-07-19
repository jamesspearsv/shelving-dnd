import LevelContainer from '../components/LevelContainer';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import type { LevelItem } from '../lib/utils';

export default function LevelPage() {
  const { levelNumber } = useParams(); // url param indicating the active level
  const [level, setLevel] = useState<LevelItem[] | undefined>(undefined);

  // TODO: extract into function or hook
  useEffect(() => {
    if (!levelNumber) return;

    (async () => {
      const storedLevels = localStorage.getItem('shelving-dnd-levels');
      if (!storedLevels) return;
      const levels = await JSON.parse(storedLevels);

      console.log(levels);

      setLevel(levels[Number(levelNumber) - 1]);
    })();
  }, [levelNumber]);

  return (
    <LevelContainer
      level={level || []}
      levelName="Level 1"
      levelNumber={Number(levelNumber)}
    />
  );
}
