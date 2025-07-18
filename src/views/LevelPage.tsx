import LevelContainer from '../components/LevelContainer';
import BOOK_LIST from '../assets/level1.json'; //with { type: 'json' };
import { useParams } from 'react-router';

export default function LevelPage() {
  const { levelNumber } = useParams();
  return (
    <LevelContainer
      level={BOOK_LIST}
      levelName="Level 1"
      levelNumber={Number(levelNumber)}
    />
  );
}
