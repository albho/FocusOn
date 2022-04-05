import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import getFormattedTime from '../helpers/getFormattedTime';

interface Props {
  history: number;
  time: number;
}

const Progress: React.FC<Props> = ({ history, time }) => {
  let addTime = Math.ceil(history % 2) === 1 ? time : 0;
  const sessionCount = Math.ceil((history - 1) / 2);
  const totalTime = getFormattedTime((sessionCount * 25) + (25 * 60 - addTime));

  return (
    <Card>
      <div style={{padding: '0.5rem'}}>
        <Typography variant='h6'>Progress</Typography>
      </div>
      <Divider />
      <div style={{padding: '0.5rem'}}>
        <Typography variant='body2'>Completed sessions: {sessionCount}</Typography>
        <Typography variant='body2'>Total focus time: {totalTime}</Typography>
      </div>
    </Card>
  )
}

export default Progress
