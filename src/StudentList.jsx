import Student from "./Student";

const StudentList = (props) => {
  return ( 
    <>
    <div>
      <h1>This is a Student List</h1>
      {props.studentList.map (student => 
        <Student key={student.id} student={student}/>
      )}
    </div>
    </>

  );
}

export default StudentList;