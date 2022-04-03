import getFormattedTime from '../helpers/getFormattedTime';

interface Props {
  time: number
}

const Timer: React.FC<Props> = ({ time }) => {
  const formattedTime = getFormattedTime(time);

  return (
    <button>{formattedTime}</button>
  )
}

export default Timer
