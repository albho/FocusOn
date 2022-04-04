import { useState, useEffect } from 'react';

import './App.css';
import Status from './components/Status';
import Timer from './components/Timer';

const App: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [pause, setPause] = useState(true);
  const [status, setStatus] = useState('Pause'); // focus, break, long break, pause

  const handleClick = () => {
    setPause(prev => !prev);
  }

  useEffect(() => {
    if (time < 1 || pause) {
      return;
    }

    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [time, pause]);

  return (
    <div className="App">
      <Status status={status} />
      <Timer time={time} handleClick={handleClick}/>
    </div>
  );
}

export default App;
