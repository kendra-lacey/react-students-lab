import Scores from "./Scores";

const Student = ({student}) => {
  return ( 
    <>
    <div>
    <h1>{student.name}</h1>
    <p>{student.bio}</p>
    < Scores scores={student.scores} />
    </div>
    </>
    
);
}

export default Student;