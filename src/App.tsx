import { useState, useEffect } from 'react';

import './App.css';
import Status from './components/Status';
import Timer from './components/Timer';

const FOCUS_LENGTH = 25 * 60;
const BREAK_LENGTH = 5 * 60;

const cycle = [
  { status: 'Focus', time: FOCUS_LENGTH },
  { status: 'Break', time: BREAK_LENGTH },
]

const App: React.FC = () => {
  const initialTimer = cycle[0].time;
  const initialStatus = cycle[0].status;
  
  const [history, setHistory] = useState(1);
  const [pause, setPause] = useState(true);
  const [time, setTime] = useState(initialTimer);
  const [status, setStatus] = useState(initialStatus);

  const handleClick = () => {
    setPause(prev => !prev);
  }

  useEffect(() => {
    if (pause) {
      return;
    }

    const timer = setInterval(() => {
      if (time === 0) {
        const currentCycleIndex = history % 2;
        setTime(cycle[currentCycleIndex].time);
        setStatus(cycle[currentCycleIndex].status);
        setHistory(prev => prev + 1);
        return;
      }

      setTime(prev => prev - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [time, pause, history]);

  return (
    <div className="App">
      <Status status={status} />
      <Timer time={time} handleClick={handleClick}/>
    </div>
  );
}

export default App;
