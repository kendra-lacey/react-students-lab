// import Score from "./Score";

const Scores = ({scores}) => {
  return ( 
    <>
    {scores.map(score => {
      return(
      <div>
      <p>{score.date}</p>
      <p>{score.score}</p>
      </div>
      )
    }
    )}
    </>
  );
}

export default Scores;