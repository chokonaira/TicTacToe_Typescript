/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('lib/web/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'lib/web/build/index.html'));
});

app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
