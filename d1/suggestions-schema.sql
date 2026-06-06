CREATE TABLE IF NOT EXISTS suggestions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  suggestion TEXT NOT NULL,
  email TEXT,
  source TEXT NOT NULL DEFAULT 'unknown',
  metadata TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_suggestions_created_at
  ON suggestions(created_at);

CREATE INDEX IF NOT EXISTS idx_suggestions_source
  ON suggestions(source);
