
import { useState, useCallback } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

export function CharacterCounter({
  minWords = 50,
  maxWords = 500,
  targetReadingTime = 3
}: CharacterCounterProps) {
  const [text, setText] = useState<string>("");

  // Updates the text when the TextInput component sends a new value.
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []);

  // Counts words by separating text at spaces, tabs, or line breaks.
  // Empty input returns zero instead of counting an empty word.
  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  // Calculates the statistics using an average reading speed of 200 words per minute.
  const stats: TextStats = {
    characterCount: text.length,
    wordCount: wordCount,
    readingTime: wordCount / 200
  };

  // Calculates progress toward the maximum word count, capped at 100%.
  const progress = maxWords > 0
    ? Math.min((wordCount / maxWords) * 100, 100)
    : 0;

  return (
    <section className="character-counter">
      <h2>Character Counter</h2>

      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start writing here..."
      />

      <StatsDisplay stats={stats} />

      <div className="writing-goals">
        <h3>Writing Goals</h3>

        <p>Minimum words: {minWords}</p>
        <p>Maximum words: {maxWords}</p>
        <p>Target reading time: {targetReadingTime} minutes</p>

        <p>Word count progress: {progress.toFixed(0)}%</p>

        <progress
          className="word-progress"
          value={progress}
          max={100}
        />

        {/* Displays feedback based on the current word count. */}
        {wordCount < minWords && (
          <p className="goal-message">
            Keep writing to reach your minimum word count.
          </p>
        )}

        {wordCount >= minWords && wordCount <= maxWords && (
          <p className="goal-success">
            You've reached your minimum word count!
          </p>
        )}

        {wordCount > maxWords && (
          <p className="goal-warning">
            You have exceeded the maximum word count.
          </p>
        )}
      </div>
    </section>
  );
}
