import React, { useState } from 'react'
import Typography from '@mui/material/Typography';

const Greeting: React.FC = () => {
  const [greeting, setGreeting] = useState('Hello!');

  return (
    <Typography variant='h3' component='h1'>{greeting}</Typography>
  )
}

export default Greeting
