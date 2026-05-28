const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/api/portfolio', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data.json');
    const fileData = await fs.readFile(dataPath, 'utf-8');
    res.json(JSON.parse(fileData));
  } catch (error) {
    console.error("Error reading data file:", error);
    res.status(500).json({ error: "Failed to load portfolio data." });
  }
});


app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
});
