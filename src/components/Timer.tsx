import getFormattedTime from '../helpers/getFormattedTime';

interface Props {
  time: number
  handleClick: () => void
}

const Timer: React.FC<Props> = ({ time, handleClick }) => {
  const formattedTime = getFormattedTime(time);

  return (
    <button onClick={handleClick}>{formattedTime}</button>
  )
}

export default Timer
