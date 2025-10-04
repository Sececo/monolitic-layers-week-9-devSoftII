const studentRepo = require('../repositories/studentRepo');

const create = (data) => {
  return studentRepo.save(data);
}

const list = () => {
  return studentRepo.getAll();
}

module.exports = {
  create,
  list
}