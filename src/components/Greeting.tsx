import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';

const Greeting: React.FC = () => {
  const [greeting, setGreeting] = useState('Hello!');

  useEffect(() => {
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 12) {
      setGreeting('Good morning!');
      return;
    }

    if (currentHour > 18) {
      setGreeting('Good evening!');
      return;
    }

    setGreeting('Good afternoon!')
  }, [])

  return (
    <Typography variant='h3' component='h1'>{greeting}</Typography>
  )
}

export default Greeting
