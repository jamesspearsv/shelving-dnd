import Papa from 'papaparse';
import type { LevelItem } from '@src/lib/types';
import { levelInfo } from '@src/lib/const';

/**
 * Fetch level information from a remote csv source
 */
export function fetchLevels() {
  Papa.parse(levelInfo, {
    download: true,
    header: true,
    complete: (result) => {
      //   console.log(result);
      //   console.log(result.data);

      //   parse level information
      const data = result.data as LevelItem[];
      const keys = Object.keys(data[0]);
      const numberOfLevels = keys.length - 3;

      //   console.log('number of levels: ', numberOfLevels);

      const levels: Array<LevelItem[]> = [];

      // parse out level assignments for each item in order
      data.forEach((item) => {
        // for each level number in order push into assigned levels
        for (let i = 0; i < numberOfLevels; i++) {
          // check level assignment for a specific item
          if (`level${i + 1}` in item && item[`level${i + 1}`] !== '') {
            if (!levels[i]) levels[i] = [];
            levels[i].push(item);
          }
        }
      });

      //   console.log(levels);

      localStorage.setItem('shelving-dnd-levels', JSON.stringify(levels));
    },
  });
}
