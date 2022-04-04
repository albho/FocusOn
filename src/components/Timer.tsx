import getFormattedTime from '../helpers/getFormattedTime';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  time: number
  handleClick: () => void
}

const Timer: React.FC<Props> = ({ time, handleClick }) => {
  const formattedTime = getFormattedTime(time);

  return (
    <Typography variant='h2' style={{ fontSize: '10rem' }} component={Button} onClick={handleClick}>{formattedTime}</Typography>
  )
}

export default Timer;
