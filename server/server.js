import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.put('/api/updateData', (req, res) => {
  const { layout } = req.body;

  if (!layout || !Array.isArray(layout)) {
    return res.status(400).json({ message: 'Invalid layout data' });
  }
  data.layout = layout;
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
  res.json({ message: 'Layout updated successfully', layout: data.layout });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
