const courseRepo = require('../repositories/courseRepo');

const create = (data) => {
  return courseRepo.save(data);
}

const list = () => {
  return courseRepo.getAll();
}

module.exports = {
  create,
  list
}