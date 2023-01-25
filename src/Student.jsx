import Scores from "./Scores";

const Student = (props) => {
  return ( 
    <>
    <div>
    <h1>{props.student.name}</h1>
    <p>{props.student.bio}</p>
    < Scores scores={props.student.scores} />
    </div>
    </>
    
);
}

export default Student;