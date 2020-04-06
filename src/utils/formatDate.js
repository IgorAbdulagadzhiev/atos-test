const formatDate = (date) => {
  date = new Date(date);
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy = date.getFullYear();
  return `${dd}.${mm}.${yy}`
}

const formatTime = (time) => {
  time = new Date(time);
  let hh = time.getHours();
  let mm = time.getMinutes();
  if (mm < 10) mm = '0' + mm;
  return `${hh}.${mm}`
}

export { formatDate, formatTime};