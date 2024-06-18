const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog.cjs');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/blog', blogRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
