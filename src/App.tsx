import { useState, useEffect } from 'react';

import './App.css';
import Timer from './components/Timer';

const App: React.FC = () => {
  const [time, setTime] = useState(25 * 60);

  useEffect(() => {
    if (time < 1) {
      return;
    }

    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="App">
      <Timer time={time} />
    </div>
  );
}

export default App;
