import type { Lesson } from './types';

export default {
  'basic-ordering': {
    name: 'Basic ordering',
    activities: [
      {
        book: {
          call_no: 'CAR',
          author: 'Amiee Carter',
          title: 'Chance Encounter',
        },
        shelf: [
          {
            call_no: 'BLA',
            author: 'Patrick Blackwood',
            title: 'Hour of Reckoning',
          },
          {
            call_no: 'GRE',
            author: 'Tara Greenfield',
            title: 'Last Stand of the Guardians',
          },
          {
            call_no: 'MCA',
            author: 'James Robert McAllister',
            title: 'A Dance with Destiny',
          },
          {
            call_no: 'OCO',
            author: "Marcus O'Connor",
            title: 'Journey to the Unknown',
          },
        ],
        answer: 1, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'RIV',
          author: 'Maxine Daisy Rivers',
          title: 'Forgotten City',
        },
        shelf: [
          {
            call_no: 'PAR',
            author: 'Emily and James Parker',
            title: 'The Girl with Silver Eyes',
          },
          {
            call_no: 'QUA',
            author: 'Alice Beth Quantum',
            title: 'Realm of Possibilities',
          },
          {
            call_no: 'SMI',
            author: 'General Robert Henry Smith',
            title: 'Art of Deception',
          },
          {
            call_no: 'THO',
            author: 'Lila-Jane Thompson',
            title: 'Beyond the Horizon',
          },
        ],
        answer: 2,
      },
    ],
  },
  'advanced-ordering': {
    name: 'Advanced Ordering',
    activities: [],
  },
} as { [key: string]: Lesson };
