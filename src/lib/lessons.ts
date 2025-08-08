import type { Lesson } from './types';

const LESSONS = {
  'basic-sorting': {
    name: 'Basic Sorting',
    intro:
      '## Basic Sorting\n\n> This lesson covers basic sorting using call numbers.\n\nFor each activity in this lesson place the unshelved book in its correct spot on the shelf.\n\nRemember that a call number is the label at the bottom of the spine that include information about the last name of an author and other information.\n\n **Hint:** Items are sorted in alphabetical order according to the information on their spinel label.',
    activities: [
      {
        book: {
          call_no: 'JOY',
          author: 'Michael Lee Joy',
          title: 'The Story of Finding Joy',
        },
        shelf: [
          {
            call_no: 'GRE',
            author: 'Tara Greenfield',
            title: 'Last Stand of the Guardians',
          },
          {
            call_no: 'HAR',
            author: 'Laura Ann Harper',
            title: 'Mystery of the Missing Crown',
          },
          {
            call_no: 'LAR',
            author: 'Fiona Daisy Lark',
            title: 'Echoes from the Past',
          },
          {
            call_no: 'MOO',
            author: 'Eliana Faith Moore',
            title: 'Garden of Lost Dreams',
          },
          {
            call_no: 'NEW',
            author: 'Dr. Frank Albert Newton',
            title: 'Secrets of the Universe',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },

      {
        book: {
          call_no: 'BLA',
          author: 'Patrick Blackwood',
          title: 'Hour of Reckoning',
        },
        shelf: [
          {
            call_no: 'ADA',
            author: 'Terry Adams',
            title: 'Wonders of the Forgotten World',
          },
          {
            call_no: 'BEL',
            author: 'Marco Bellini',
            title: 'Secrets of the Savory Scone',
          },
          {
            call_no: 'BRI',
            author: 'Amelia Bright',
            title: 'Seven Secrets of the Ancient Grove',
          },
          {
            call_no: 'CAR',
            author: 'Amiee Carter',
            title: 'Chance Encounter',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'ORO',
          author: "Aiden O'Rourke",
          title: 'The Last of the Dragon Riders',
        },
        shelf: [
          {
            call_no: 'MOO',
            author: 'Eliana Faith Moore',
            title: 'Garden of Lost Dreams',
          },
          {
            call_no: 'NEW',
            author: 'Dr. Frank Albert Newton',
            title: 'Secrets of the Universe',
          },
          {
            call_no: 'OMA',
            author: "Sarah-Jane O'Malley",
            title: 'The Secrets We Keep',
          },
          {
            call_no: 'PAR',
            author: 'Emily and James Parker',
            title: 'The Girl with Silver Eyes',
          },
        ],
        answer: 3, // zero based index of the correct book slot
      },
    ],
  },
  'authors-and-titles': {
    name: 'Sorting by Authors and Titles',
    intro:
      "## Sorting by Authors and Titles\n\n> This lesson focuses on sorting items by authors and titles.\n\nOften there will not be enough information on a spine label to shelf an item where it belongs. Remember that in these cases you have to look at the author and maybe the title to figure out where an item should be sorted.\n\nIf you get stumped remember to take a carful look first at the author's first and then last name. Authors with the same last name should be alphabetized by first name. Books by the same author should be alphabetized by title.\n\n**Hint:** Remember when you are alphabetizing names and words to compare them together one letter at a time.",
    activities: [
      {
        book: {
          call_no: 'HAR',
          author: 'Eliza Hart',
          title: 'Voice of the Forest',
        },
        shelf: [
          {
            call_no: 'GRE',
            author: 'Susan Greene',
            title: 'Road to Redemption',
          },
          {
            call_no: 'GRE',
            author: 'Tara Greenfield',
            title: 'Last Stand of the Guardians',
          },
          {
            call_no: 'HAR',
            author: 'Laura Ann Harper',
            title: 'Mystery of the Missing Crown',
          },
          {
            call_no: 'HAR',
            author: 'Liam Hart',
            title: 'Love Like No Other',
          },
        ],
        answer: 3, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'RIV',
          author: 'Tara Rivers',
          title: 'Chronicles of Eldoria: Forgotten Realm',
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
            call_no: 'RIV',
            author: 'Tara Rivers',
            title: 'Chronicles of Eldoria: Lucidity',
          },
          {
            call_no: 'STA',
            author: 'Richard James Starling',
            title: 'A Symphony of Stars',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'PAR',
          author: 'Emily and James Parker',
          title: 'Girl with Silver Eyes',
        },
        shelf: [
          {
            call_no: 'PAR',
            author: 'Emily and James Parker',
            title: "Clockmaker's Secret",
          },
          {
            call_no: 'PAR',
            author: 'Emily and James Parker',
            title: 'Echoes of a Distant Star',
          },
          {
            call_no: 'PAR',
            author: 'Emily and James Parker',
            title: 'Shattered Realities',
          },
          {
            call_no: 'PAR',
            author: 'Emily and James Parker',
            title: 'Whispers of the Forgotten Forest',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
    ],
  },
  'nothing-before-something': {
    name: 'Using Nothing Before Something',
    intro:
      '## Using nothing before something\n\n>This lesson focuses on using the rule of nothing before something\n\nNothing before something is an important rule to help sorting similarly spelled names and titles. When you are comparing two names or words that are have similar roots or parts, the word or name that has *nothing* first will always be sorted before the word or name that has *something*.\n\n**Hint:** The word *bird* will always be sorted before the word *birds*',
    activities: [
      {
        book: {
          call_no: 'BLA',
          author: 'Marco Black',
          title: 'Secrets of the Savory Scone',
        },
        shelf: [
          {
            call_no: 'ADA',
            author: 'Terry Adams',
            title: 'Wonders of the Forgotten World',
          },
          {
            call_no: 'BLA',
            author: 'Thomas Blackstone',
            title: 'Hour of Reckoning',
          },
          {
            call_no: 'BRI',
            author: 'Amelia Bright',
            title: 'Seven Secrets of the Ancient Grove',
          },
          {
            call_no: 'CAR',
            author: 'Amiee Carter',
            title: 'Chance Encounter',
          },
        ],
        answer: 1, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'HAR',
          author: 'Liam Hart',
          title: 'Voice of the Forest',
        },
        shelf: [
          {
            call_no: 'GRE',
            author: 'Tara Greenfield',
            title: 'The Tales of Green',
          },
          {
            call_no: 'HAR',
            author: 'Laura Ann Harper',
            title: 'Mystery of the Missing Crown',
          },
          {
            call_no: 'HAR',
            author: 'Eliza Hartwell',
            title: 'Love Like No Other',
          },
          {
            call_no: 'JOY',
            author: 'Michael Lee Joy',
            title: 'The Story of Finding Joy',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'HAR',
          author: 'Eliza Hartwell',
          title: 'Loves First Mistake',
        },
        shelf: [
          {
            call_no: 'HAR',
            author: 'Eliza Hartwell',
            title: "Echoes of the Heart's Desire",
          },
          {
            call_no: 'HAR',
            author: 'Eliza Hartwell',
            title: 'Love Like No Other',
          },
          {
            call_no: 'HAR',
            author: 'Eliza Hartwell',
            title: 'Songs of the Night',
          },
          {
            call_no: 'HAR',
            author: 'Eliza Hartwell',
            title: 'Whispers of the Forgotten',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
    ],
  },
  'drop-words': {
    name: 'Handling Drop Words',
    intro:
      '## Handling Drop Words\n\n>This lesson focuses on sorting titles that contain drop words\n\nDrop words are three special words that are ignored when they appear as the first word in a title. They are ignored because they often appear in as the first word in many titles but have not real bearing on how the title should be sorted.\n\nDrop words are the articles *a*,*an*, and *the* only when they are the first word in a title.\n\n**Hint:** *The Fellowship of the Ring** by J.R.R. Tolkien should be read as ~~The~~ *Fellowship of the Ring* when you are sorting',
    activities: [
      {
        book: {
          call_no: 'WAL',
          author: 'Julia Smith Walker',
          title: 'An Ocean Apart',
        },
        shelf: [
          {
            call_no: 'WAL',
            author: 'Julia Smith Walker',
            title: 'A Dance with Destiny',
          },
          {
            call_no: 'WAL',
            author: 'Julia Smith Walker',
            title: 'Glimpse of Eternity',
          },
          {
            call_no: 'WAL',
            author: 'Julia Smith Walker',
            title: 'Heart of the Forest',
          },
          {
            call_no: 'WAL',
            author: 'Julia Smith Walker',
            title: 'Whisper in the Wind',
          },
        ],
        answer: 3, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'GRE',
          author: 'Tara Greenfield',
          title: 'Last Stand of the Guardians',
        },
        shelf: [
          {
            call_no: 'CAR',
            author: 'Amiee Carter',
            title: 'Hidden Truths',
          },
          {
            call_no: 'GRE',
            author: 'Susan Greene',
            title: 'Road to Redemption',
          },
          {
            call_no: 'GRE',
            author: 'Tara Greenfield',
            title: 'A Tale of Green',
          },
          {
            call_no: 'HAR',
            author: 'Laura Ann Harper',
            title: 'Mystery of the Missing Crown',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
      {
        book: {
          call_no: 'MOO',
          author: 'Eliana Faith Moore',
          title: 'The Girl Who Spoke to Shadows',
        },
        shelf: [
          {
            call_no: 'MCK',
            author: 'John Robert McKinley',
            title: 'Last Voyage of the Starship Endeavor',
          },
          {
            call_no: 'MOO',
            author: 'Eliana Faith Moore',
            title: 'A Garden of Lost Dreams',
          },
          {
            call_no: 'MOO',
            author: 'Eliana Faith Moore',
            title: 'Journey to the Unknown',
          },
          {
            call_no: 'MOO',
            author: 'Eliana Faith Moore',
            title: 'Secrets of the Universe',
          },
        ],
        answer: 2, // zero based index of the correct book slot
      },
    ],
  },
} as { [key: string]: Lesson };

export default LESSONS;
