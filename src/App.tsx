import { useState, useEffect } from 'react';
import './App.css';
import Status from './components/Status';
import Timer from './components/Timer';
import Greeting from './components/Greeting';
import Progress from './components/Progress';

import Stack from '@mui/material/Stack';

const FOCUS_LENGTH = 5;
const BREAK_LENGTH = 3;

interface CycleItem {
  status: string;
  time: number;
}

const cycle: CycleItem[] = [
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
      <Stack direction='column' alignItems='flex-start' p={2} sx={{ height: '100vh', background: '#def' }}>
        <Greeting />
        <Status status={status} />
        <Timer time={time} handleClick={handleClick}/>
        <Progress history={history} />
      </Stack>
    </div>
  );
}

export default App;
