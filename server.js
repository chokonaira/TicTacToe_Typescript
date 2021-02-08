/* eslint-disable no-undef */
import express, { static } from 'express';
import { resolve } from 'path';

const app = express();
const port = process.env.PORT || 5000;

app.use(static('lib/web/build'));
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'lib/web/build/index.html'));
});

app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
