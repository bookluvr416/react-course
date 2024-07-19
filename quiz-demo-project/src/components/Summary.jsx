import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

const Summary = ({ userAnswers }) => {

  let skippedCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === null) {
      skippedCount += 1;
    } else if (answer ===  QUESTIONS[index].answers[0]) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const skippedPercentage = Math.round((skippedCount / QUESTIONS.length) * 100);
  const correctPercentage = Math.round((correctCount / QUESTIONS.length) * 100);
  const incorrectPercentage = Math.round((incorrectCount / QUESTIONS.length) * 100);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Complete.</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {QUESTIONS.map((question, index) => {
          const answer = userAnswers[index];

          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === question.answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">Question: {question.text}</p>
              <p className={cssClass}>User Answer: {answer === null ? 'No Answer' : answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
