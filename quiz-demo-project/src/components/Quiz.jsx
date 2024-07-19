import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Summary from './Summary';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  /**
   * handleSelectAnswer
   * @param {string} selectedAnswer 
   */
  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setAnswerState('answered');
    setUserAnswers(prevAnswers => {
      return [...prevAnswers, selectedAnswer]
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      setTimeout(() => {
        setAnswerState('')
      }, 2000)
    }, 1000);
  }, [activeQuestionIndex]);

  /**
   * handleSkipAnswer
   */
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={`${QUESTIONS[activeQuestionIndex].id}-timer`}
          timeout={10000}
          onTimeout={answerState === '' ? handleSkipAnswer : null}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          unsortedAnswers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          handleSelectAnswer={handleSelectAnswer}
          key={`${QUESTIONS[activeQuestionIndex].id}-answers`}
        />
      </div>
    </div>
  );
};

export default Quiz;
