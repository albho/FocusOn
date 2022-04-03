const getFormattedTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedSeconds = ('0' + seconds).slice(-2);

  const formattedTime = `${minutes}:${formattedSeconds}`
  return formattedTime;
}

export default getFormattedTime;
