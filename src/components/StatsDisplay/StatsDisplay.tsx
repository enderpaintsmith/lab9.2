
import type { StatsDisplayProps } from "../../types";

export function StatsDisplay({
  stats,
  showReadingTime = true
}: StatsDisplayProps) {
  return (
    <div>
      <h2>Text Statistics</h2>

      <p>Characters: {stats.characterCount}</p>

      <p>Words: {stats.wordCount}</p>

      {showReadingTime && (
        <p>Estimated Reading Time: {stats.readingTime.toFixed(2)} minutes</p>
      )}
    </div>
  );
}
