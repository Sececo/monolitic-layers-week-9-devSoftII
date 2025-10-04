const studentService = require('../services/studentService');

//student controllers
const createStudent = (req, res) => {
  const newStudent = studentService.create(req.body);
  res.send(`Estudiante ${newStudent.name} agregado correctamente`);
}

const listStudent = (req, res) => {
  const list = studentService.list();
  res.json(list);
}

module.exports = {
  createStudent,
  listStudent
};  