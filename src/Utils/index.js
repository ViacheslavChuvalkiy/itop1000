export const formatTime = (time) => {
  const secs = Math.floor(time ) % 60 < 10 ? '0' + Math.floor(time ) % 60 : Math.floor(time ) % 60;
  const mins = Math.floor(time / 60) % 60 < 10 ? '0' + Math.floor(time / 60) % 60 : Math.floor(time / 60) % 60;
  const hrs =  Math.floor(time / 1000 / 60) % 60 < 10 ? '0' +Math.floor(time / 1000 / 60) % 60 : Math.floor(time / 1000 / 60) % 60;
  return `${hrs}:${mins}:${secs}`
};