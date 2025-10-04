const express = require('express');
const app = express();
const port = 5002;

app.use(express.json());

const studentsRoute = require('./sources/routes/students');
const coursesRoute = require('./sources/routes/courses');

app.use('/courses', coursesRoute);

app.use('/students', studentsRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

