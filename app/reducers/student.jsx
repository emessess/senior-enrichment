import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const FIND_STUDENT = 'FIND_STUDENT';

//action creators
export const getStudents = (students) => ({
  type: GET_STUDENTS,
  students
});

export const findStudent = (student) => ({
  type: FIND_STUDENT,
  student
});

//thunks

export const fetchStudents = () => (dispatch) => axios.get('api/students')
  .then(res => res.data)
  .then(students => dispatch(getStudents(students)));


