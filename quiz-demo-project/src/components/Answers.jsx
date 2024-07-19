import { useRef } from 'react';

const Answers = ({ unsortedAnswers, selectedAnswer, answerState, handleSelectAnswer }) => {
  const shuffledAnswersRef = useRef();

  if (!shuffledAnswersRef.current) {
    shuffledAnswersRef.current = [...unsortedAnswers];
    shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
  }
  
  return (
    <ul id="answers">
      {shuffledAnswersRef.current.map((answer, index) => {
        let cssClass = '';
        const isSelected = selectedAnswer === answer;
        
        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }

        return (
          <li key={index} className="answer">
            <button className={cssClass} onClick={() => handleSelectAnswer(answer)} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        )
      })}
    </ul>
  )
};

export default Answers;
