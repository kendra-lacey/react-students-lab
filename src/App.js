import './App.css';
import { useState } from 'react';
import { studentData } from './data';
import StudentList from './StudentList';

function App() {
const [studentList, setStudentList] = useState(studentData)
  return (
    <div>
      <StudentList studentList={studentList}/>
    </div>
  );
}

export default App;
