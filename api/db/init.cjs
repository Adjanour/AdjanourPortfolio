const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./api/db/sqlite.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS blog (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      date TEXT
    )
  `);
});

db.close();
