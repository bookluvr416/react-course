import { useState, useEffect } from 'react';

const  INTERVAL_TIME = 100;

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - INTERVAL_TIME);
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    }
  }, [])
  

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  )
}

export default QuestionTimer;
