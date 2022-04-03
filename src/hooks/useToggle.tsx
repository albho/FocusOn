import { useState } from 'react'

const useToggle = (defaultValue: boolean) => {
  const [pause, setPause] = useState(defaultValue);

  const togglePause = () => {
    setPause((prev: boolean) => !prev);
  }

  return [pause, togglePause];
}

export default useToggle;
