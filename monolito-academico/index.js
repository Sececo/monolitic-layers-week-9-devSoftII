const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let students = [];
let courses = [];

app.get('/', (req, res) => {
  res.send('welcome to the academic monolithic API');
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send(`Estudiante ${newStudent.name} agregado correctamente`);
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/courses', (req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res.send(`Curso ${newCourse.title} agregado correctamente`);
});

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});