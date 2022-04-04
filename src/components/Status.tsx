import React from 'react'
import Typography from '@mui/material/Typography';

interface Props {
  status: string
}

const Status: React.FC<Props> = ({ status }) => {
  return (
    <Typography variant='h3' component='h1'>{status}</Typography>
  )
}

export default Status;
