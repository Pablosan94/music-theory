import {ToneTypesEnum} from "@shared/enums";

export const DashboardFavoritesDataExample = [
  {
    title: "Major scale",
    description: "Learn how to build and use the Major scale.",
    tone: {
      type: ToneTypesEnum.SCALE,
      notes: ['C3','D3','E3','F3','G3','A3','B3','C4']
    }
  },
  {
    title: "Minor Pentatonic scale",
    description: "Learn how to build and use the minor Pentatonic scale.",
    tone: {
      type: ToneTypesEnum.SCALE,
      notes: ['C3','Eb3','F3','G3','Bb3','C4']
    }
  },
  {
    title: "Modes",
    description: "Learn how to build and use the Modes."
  },
  {
    title: "Triads",
    description: "Learn how to build and use basic triads.",
    tone: {
      type: ToneTypesEnum.CHORD,
      notes: ['C3','E3','G3']
    }
  }
];
export const DashboardMostRecentDataExample = [
  {
    title: "Harmonic minor scale",
    description: "Learn how to build and use the Harmonic minor scale.",
    tone: {
      type: ToneTypesEnum.SCALE,
      notes: ['C3','D3','Eb3','F3','G3','Ab3','B3','C4']
    }
  },
  {
    title: "Seventh chords",
    description: "Learn how to build and use seventh chords.",
    tone: {
      type: ToneTypesEnum.CHORD,
      notes: ['C3','E3','G3','B3']
    }
  },
  {
    title: "Suspended chords",
    description: "Learn how to build and use suspended chords.",
    tone: {
      type: ToneTypesEnum.CHORD,
      notes: ['C3','D3','G3']
    }
  }
];

