import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//action creators
export const getStudents = (students) => ({
  type: GET_STUDENTS,
  students
});

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  student
});

export const deleteStudent = (student) => ({
  type: DELETE_STUDENT,
  student
});

//thunk creators

export const fetchStudents = () => (dispatch) => axios.get('api/students')
  .then(res => res.data)
  .then(students => dispatch(getStudents(students)))
  .catch(err => console.error('Could not fetch students.', err));

export const postStudent = () => (dispatch) => axios.post('students')
  .then(res => res.data)
  .then(createdStudent => dispatch(addStudent(createdStudent)));
  .catch(err => console.error('Could not add student.', err));


//reducer

const studentReducer = (students = fetchStudents(), action) => {

  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...students, action.student];
    default: 
      return students;
  }
}

export default studentReducer;