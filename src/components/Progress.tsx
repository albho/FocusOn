import Typography from '@mui/material/Typography';
import React from 'react'

interface Props {
  history: number;
}

const Progress: React.FC<Props> = ({ history }) => {
  const sessionCount = Math.ceil((history - 1) / 2);

  return (
    <Typography variant='subtitle1'>Completed focus sessions: {sessionCount}</Typography>
  )
}

export default Progress
