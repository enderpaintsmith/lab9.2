
// Defines the props used by the TextInput component.
export interface TextInputProps {
  onTextChange: (text: string) => void; // Sends updated text to the parent component.
  placeholder?: string; // Optional placeholder text.
  initialValue?: string; // Optional starting text.
}

// Defines the statistics calculated from the user's text.
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // Estimated reading time in minutes.
}

// Defines the props used by the StatsDisplay component.
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean; // Controls whether reading time is displayed.
}

// Defines the optional settings for the CharacterCounter component.
export interface CharacterCounterProps {
  minWords?: number; // Minimum word count goal.
  maxWords?: number; // Maximum word count goal.
  targetReadingTime?: number; // Target reading time in minutes.
}
