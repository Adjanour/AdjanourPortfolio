const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();
const db = new sqlite3.Database('./api/db/sqlite.db');

// Upload a new blog post
router.post('/', (req, res) => {
  const { title, content, date } = req.body;
  db.run(`INSERT INTO blog (title, content, date) VALUES (?, ?, ?)`, [title, content, date], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Get all blog posts
router.get('/', (req, res) => {
  db.all(`SELECT * FROM blog ORDER BY date DESC`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;
