const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const db = require('./db');

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);
