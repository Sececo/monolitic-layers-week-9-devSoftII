let courses = [];

// Course functions
const save = (data) => {
  courses.push(data);
  return data;
}
const getAll = () => {
  return courses;
}

module.exports = { save, getAll };