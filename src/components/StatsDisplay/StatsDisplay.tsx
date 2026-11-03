import type { StatsDisplayProps } from "../../types";

export function StatsDisplay({
  stats,
  showReadingTime = true
}: StatsDisplayProps) {
  return (
    <section className="stats-display">
      <h2 className="stats-heading">Text Statistics</h2>

      <div className="stats-grid">
        <p className="stat-item">
          Characters: {stats.characterCount}
        </p>

        <p className="stat-item">
          Words: {stats.wordCount}
        </p>

        {showReadingTime && (
          <p className="stat-item">
            Estimated Reading Time: {stats.readingTime.toFixed(2)} minutes
          </p>
        )}
      </div>
    </section>
  );
}