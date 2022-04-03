import { useState, useEffect } from 'react';

import './App.css';
import Timer from './components/Timer';

const App: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [pause, setPause] = useState(true);

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
      <Timer time={time} handleClick={handleClick}/>
    </div>
  );
}

export default App;
